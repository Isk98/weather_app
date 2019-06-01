import React from "react";
import WeatherListItem from "./WeatherListItem";
import "./Component.css"

class WeeklyWeather extends React.Component{
    
    render(){
        
      return(


          <div className="ww-div">
            <div className="first-row">
              <div className="item0">
            <WeatherListItem temperature={this.props.week_data[0].temperature}
                     day={this.props.week_data[0].weekday}
                     humidity={this.props.week_data[0].humidity}
                     description={this.props.week_data[0].description}/> <br />
                     </div>
                     <div className="item1">
              <WeatherListItem temperature={this.props.week_data[1].temperature}
                     day={this.props.week_data[1].weekday}
                     humidity={this.props.week_data[1].humidity}
                     description={this.props.week_data[1].description}/> <br />
                     </div>
                     <div className="item2">
              <WeatherListItem temperature={this.props.week_data[2].temperature} 
                     day={this.props.week_data[2].weekday}
                     humidity={this.props.week_data[2].humidity}
                     description={this.props.week_data[2].description}/> <br />
                     </div>
                     <div className="item3">
              <WeatherListItem temperature={this.props.week_data[3].temperature}
                     day={this.props.week_data[3].weekday}
                     humidity={this.props.week_data[3].humidity}
                     description={this.props.week_data[3].description} /> <br />
                     </div>
              </div>
              <div className="second-row">
                <div className="item4">
              <WeatherListItem temperature={this.props.week_data[4].temperature}
                     day={this.props.week_data[4].weekday}
                     humidity={this.props.week_data[4].humidity}
                     description={this.props.week_data[4].description}/> <br />
                     </div>
                     <div className="item5">
              <WeatherListItem temperature={this.props.week_data[5].temperature}
                     day={this.props.week_data[5].weekday}
                     humidity={this.props.week_data[5].humidity}
                     description={this.props.week_data[5].description}/> <br />
                     </div>
                     <div className="item6">
              <WeatherListItem temperature={this.props.week_data[6].temperature}
                     day={this.props.week_data[6].weekday}
                     humidity={this.props.week_data[6].humidity}
                     description={this.props.week_data[6].description}/> <br />
                     </div>
              </div>
            
            </div>
          
        
        
      );
    }
};

export default WeeklyWeather;
