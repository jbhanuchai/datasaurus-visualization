import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const DinoPlot = ({ data, onBrush }) => {
    const svgRef = useRef();

    useEffect(() => {
        if (!data || data.length === 0) return;

        const width = 420, height = 420;
        const marginLeft = 65;  
        const marginBottom = 55; 

        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height);

        svg.selectAll("*").remove();

        const xScale = d3.scaleLinear()
            .domain([22.3, 100])  
            .range([marginLeft, width - marginBottom]);

        const yScale = d3.scaleLinear()
            .domain([3, 100])  
            .range([height - marginBottom, marginLeft]);

        const xAxis = d3.axisBottom(xScale)
            .tickValues([30, 40, 50, 60, 70, 80, 90])  
            .tickSize(10)  
            .tickPadding(8);  

        const yAxis = d3.axisLeft(yScale)
            .tickValues([10, 20, 30, 40, 50, 60, 70, 80, 90])  
            .tickSize(10)  
            .tickPadding(8);  

        svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(xAxis)
            .selectAll("line")
            .attr("stroke", "black");  

        svg.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(yAxis)
            .selectAll("line")
            .attr("stroke", "black");  

        const points = svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", d => xScale(d[0]))
            .attr("cy", d => yScale(d[1]))
            .attr("r", 2.1)
            .attr("fill", "black");

        const brush = d3.brush()
            .extent([[marginLeft, marginLeft], [width - marginBottom, height - marginBottom]])
            .on("brush end", (event) => {
                const selection = event.selection;
                
                if (!selection) {
                    points.attr("fill", "black");
                    onBrush([]);
                    return;
                }

                const [[x0, y0], [x1, y1]] = selection;

                const selectedIndices = data.map((d, i) => {
                    const x = xScale(d[0]);
                    const y = yScale(d[1]);
                    return x >= x0 && x <= x1 && y >= y0 && y <= y1 ? i : null;
                }).filter(i => i !== null);

                points.attr("fill", (d, i) => selectedIndices.includes(i) ? "red" : "black");

                onBrush(selectedIndices);
            });

        svg.append("g").call(brush);

        d3.select("body").on("click", function(event) {
            if (!event.target.closest("svg")) {
                points.attr("fill", "black");
                onBrush([]);
            }
        });

    }, [data, onBrush]);

    return <svg ref={svgRef}></svg>;
};

export default DinoPlot;
