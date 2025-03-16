import React, { useState, useEffect } from "react";
import DinoPlot from "./components/DinoPlot";
import BarChart from "./components/BarChart";
import ScatterplotGroup from "./components/ScatterplotGroup";
import "./App.css";

const App = () => {
    const [dinoData, setDinoData] = useState([]);
    const [datasets, setDatasets] = useState([]);
    const [selectedIndices, setSelectedIndices] = useState([]);

    useEffect(() => {
        fetch("/datasaurus.json")
            .then(response => response.json())
            .then(data => {
                const formattedData = Object.entries(data).map(([key, set]) => ({
                    name: key,
                    data: set.map(d => [+d[0], +d[1]])
                }));

                setDinoData(formattedData[0].data);
                setDatasets(formattedData.slice(1));
            })
            .catch(error => console.error("Error loading JSON:", error));
    }, []);

    return (
        <div className="app-container">
            {/* Main Plot */}
            <div className="main-plot">
                <DinoPlot data={dinoData} onBrush={setSelectedIndices} />
                <BarChart data={selectedIndices.length ? selectedIndices.map(i => dinoData[i]) : dinoData} />
            </div>

            {/* Scatterplot Group */}
            <ScatterplotGroup datasets={datasets} highlightedIndices={selectedIndices} />
        </div>
    );
};

export default App;
