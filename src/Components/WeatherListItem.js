import React from "react";
import "./Component.css"


class WeatherListItem extends React.Component{

    render(){
        return(
            <div className="weather-list-item">
            {this.props.img&&<p> {this.props.img}</p>}
            {this.props.day&&<p>{this.props.day}</p>}
            {this.props.temperature&&<h1 className="temp">{this.props.temperature}°C</h1>}
            {this.props.humidity&&<p>Humidity: {this.props.humidity}%</p>}
            {this.props.description&&<p>Description: {this.props.description}</p>}
            
     </div>
        );
    }
}
export default WeatherListItem;