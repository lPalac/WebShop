import React, { Component } from 'react'
import axios from "axios";

export default class Weather extends Component {
    constructor() {
        super();
        this.state = {
            weather: "Not yet gotten"
        };
    }

    handleButtonClick = () => {
        axios.get("/getWeather").then(response => {
           this.setState({
               weather: response.data.temp
           });
        });

    };
    render() {
        return (
            <div>
                <button className="margin20" onClick={this.handleButtonClick}>
                    Get temperature
                </button>
                <p>Temperature in Split is: {this.state.weather}</p>
                <span>Ovo vrijeme se dobilo preko apia u backendu</span>
                <br/>
                <br/>
                <span>napravljeno za test</span>

            </div>
        )
    }
}
