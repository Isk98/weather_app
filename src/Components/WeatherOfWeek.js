import React from "react";
import Weather from "./Weather";
import "./Component.css"

class WeatherOfWeek extends React.Component{
    
    render(){
        
      const data= [];
       
        return(
            <div >
                <div className="first-row">
                <div className="ww-div">
              <Weather className="ww" temperature={this.props.week_data[0].temperature}
                                       day={this.props.week_data[0].weekday}
                                       humidity={this.props.week_data[0].humidity}
                                       description={this.props.week_data[0].description}/> 
                </div>
              <div className="ww-div">
              <Weather className="ww" temperature={this.props.week_data[1].temperature}
                                       day={this.props.week_data[1].weekday}
                                       humidity={this.props.week_data[1].humidity}
                                       description={this.props.week_data[1].description}/>
              </div>
             
                <div className="ww-div">
              <Weather className="ww" temperature={this.props.week_data[2].temperature}
                                       day={this.props.week_data[2].weekday}
                                       humidity={this.props.week_data[2].humidity}
                                       description={this.props.week_data[2].description}/>
                </div>
                <div className="ww-div">
              <Weather className="ww" temperature={this.props.week_data[3].temperature}
                                       day={this.props.week_data[3].weekday}
                                       humidity={this.props.week_data[3].humidity}
                                       description={this.props.week_data[3].description}/>
                </div>
              </div>
              <div className="second-row">
             <div className="ww-div">
              <Weather className="ww" temperature={this.props.week_data[3].temperature}
                                       day={this.props.week_data[4].weekday}
                                       humidity={this.props.week_data[4].humidity}
                                       description={this.props.week_data[4].description}/>
                </div>
            <div className="ww-div">
              <Weather className="ww" temperature={this.props.week_data[5].temperature}
                                       day={this.props.week_data[5].weekday}
                                       humidity={this.props.week_data[5].humidity}
                                       description={this.props.week_data[5].description}/>
                </div>
                <div className="ww-div">
              <Weather className="ww" temperature={this.props.week_data[6].temperature}
                                       day={this.props.week_data[6].weekday}
                                       humidity={this.props.week_data[6].humidity}
                                       description={this.props.week_data[6].description}/>
               </div>
           </div>
         </div>
            

        );
    }
};

export default WeatherOfWeek;
