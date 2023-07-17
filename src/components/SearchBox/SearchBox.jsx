import React, { useState } from "react";
import "./SearchBox.css"

const SearchBox = ({ handleInputChange }) => {

    return <div className="search-container">
        <input type="text" placeholder="Type any keyword..." className="search-input" onChange={(events) => handleInputChange(events.target.value)} />
    </div>
}

export default SearchBox;