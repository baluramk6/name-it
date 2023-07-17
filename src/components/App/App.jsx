import React from "react";
import "./App.css"
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import name from "@rstacruz/startup-name-generator"
// const name = require('@rstacruz/startup-name-generator')


// function App() {
//     return (
//         <div>
//             <h1>This is a function component</h1>
//         </div>
//     )
// }


class App extends React.Component {
    state = {
        headerText: "Name It!",
        headerExpanded: true,
        suggestedNames: []
    }
    //Old way
    // constructor() {
    //     super()
    //     this.state = {
    //         headerText: "Name itss..."
    //     }
    // }

    handleInputChange = (inputValue) => {
        this.setState({
            headerExpanded: !inputValue,
            suggestedNames: inputValue ? name(inputValue) : []
        })
    }


    render() {
        return <div>
            <Header headerExpanded={this.state.headerExpanded} headText={this.state} />
            <SearchBox handleInputChange={this.handleInputChange} />
            <ResultsContainer suggestedNames={this.state.suggestedNames} />
        </div>
    }
}

export default App;