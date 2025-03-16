import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Scatterplot = ({ data, highlightedIndices, title }) => {
  const svgRef = useRef();
  const width = 200, height = 200;
  const margin = { top: 10, right: 20, bottom: 30, left: 40 };

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const xDomain = d3.extent(data, d => +d[0]);
    const yDomain = d3.extent(data, d => +d[1]);

    const xScale = d3.scaleLinear().domain(xDomain).range([0, width]);
    const yScale = d3.scaleLinear().domain(yDomain).range([height, 0]);

    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    svg.append("g")
      .call(d3.axisLeft(yScale));

    svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(+d[0]))
      .attr("cy", d => yScale(+d[1]))
      .attr("r", 2.5)
      .attr("fill", (d, i) => highlightedIndices.includes(i) ? "red" : "black");
  }, [data, highlightedIndices]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Scatterplot;
