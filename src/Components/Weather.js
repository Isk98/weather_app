import React from "react";
import "./Component.css"


class Weather extends React.Component {
    
      render(){
       
         return(
          
                  <div className="dailyWeather-div">
                         {this.props.img&&<p> {this.props.img}</p>}
                         {this.props.day&&<p>{this.props.day}</p>}
                         {this.props.temperature&&<h1 className="temp">{this.props.temperature}°C</h1>}
                         {this.props.humidity&&<p>Humidity: {this.props.humidity}%</p>}
                         {this.props.description&&<p>Description: {this.props.description}</p>}
                         
                  </div>
    
                  
               
            );
     }
  
}

export default Weather;