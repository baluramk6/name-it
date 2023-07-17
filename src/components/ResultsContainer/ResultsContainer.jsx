import React from "react";
import "./ResultsContainer.css"
import ResultCard from "../ResultCard/ResultCard";


const ResultsContainer = ({ suggestedNames }) => {
    console.log(suggestedNames);
    const suggestedNameJSX = suggestedNames.map((suggestedName) => <ResultCard key={suggestedName} name={suggestedName} />)

    return <div className="results-container">
        {suggestedNameJSX}
    </div>
}

export default ResultsContainer;