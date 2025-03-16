import React, { useEffect, useState } from "react";
import Scatterplot from "./Scatterplot";

const ScatterplotGroup = ({ highlightedIndices }) => {
  const [datasets, setDatasets] = useState({});

  useEffect(() => {
    fetch("/datasaurus.json")
      .then(response => response.json())
      .then(json => setDatasets(json))
      .catch(error => console.error("Error loading datasets:", error));
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
      {Object.keys(datasets).filter(key => key !== "dino").map(datasetKey => (
        <Scatterplot
          key={datasetKey}
          data={datasets[datasetKey]}
          highlightedIndices={highlightedIndices}
          title={datasetKey}
        />
      ))}
    </div>
  );
};

export default ScatterplotGroup;
