import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
    const svgRef = useRef();

    useEffect(() => {
        if (!data || data.length === 0) return;

        const width = 325, height = 325;
        const margin = { top: 20, right: 20, bottom: 40, left: 40 };

        const svg = d3.select(svgRef.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom);

        svg.selectAll("*").remove();

        const meanX = d3.mean(data, d => d[0]);
        const stdDevX = d3.deviation(data, d => d[0]) || 0;
        const meanY = d3.mean(data, d => d[1]);
        const stdDevY = d3.deviation(data, d => d[1]) || 0;

        const barData = [
            { axis: "X", mean: meanX, stdDev: stdDevX },
            { axis: "Y", mean: meanY, stdDev: stdDevY }
        ];

        const xScale = d3.scaleBand()
            .domain(barData.map(d => d.axis))
            .range([0, width])
            .padding(0.4);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(barData, d => d.mean + d.stdDev)])
            .range([height, 0]);

        const g = svg.append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        g.selectAll(".bar")
            .data(barData)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", d => xScale(d.axis))
            .attr("y", d => yScale(d.mean))
            .attr("width", xScale.bandwidth())
            .attr("height", d => height - yScale(d.mean))
            .attr("fill", (d, i) => (i === 0 ? "lightgreen" : "plum"));

        g.selectAll(".error-line")
            .data(barData)
            .enter()
            .append("line")
            .attr("class", "error-line")
            .attr("x1", d => xScale(d.axis) + xScale.bandwidth() / 2)
            .attr("x2", d => xScale(d.axis) + xScale.bandwidth() / 2)
            .attr("y1", d => yScale(d.mean - d.stdDev))
            .attr("y2", d => yScale(d.mean + d.stdDev))
            .attr("stroke", "black")
            .attr("stroke-width", 2);

        g.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(xScale));

        g.append("g")
            .call(d3.axisLeft(yScale));

    }, [data]);

    return <svg ref={svgRef}></svg>;
};

export default BarChart;
