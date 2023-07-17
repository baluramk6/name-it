import React from "react";
import './ResultCard.css'

const ResultCard = ({ name }) => {

    function copyText(e) {
        console.log(e);
    }

    return <a href={`https://www.namecheap.com/domains/registration/results/?domain=${name}`} rel="noreferrer" target="_blank">
        <div className="result-name-card">
            <p className="result-name">{name}</p>
        </div>
    </a>
}

export default ResultCard;