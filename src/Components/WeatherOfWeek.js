import React from "react";
import Weather from "./Weather";
import "./Component.css"

class WeatherOfWeek extends React.Component{
    
    render(){
        
          const weatherItems=this.props.week_data.map((weatherItem) => <Weather key={weatherItem.weekday}
                                                                                temperature={weatherItem.temperature}
                                                                                day={weatherItem.weekday}
                                                                                humidity={weatherItem.humidity}
                                                                                description={weatherItem.description}
                                                                                className="all_week" />)
    
      
       
       return(


          <div className="ww-div">
            {weatherItems}
            </div>
          
        
        
      );
    }
};

export default WeatherOfWeek;
