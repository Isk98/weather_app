import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Form extends React.Component{

    render(){
        return(
             <div className="dropdown">
                 <button className="dropbtn">Select</button>
                   <div className="dropdown-content">
                    
                    <Link to="/weather/monday"onClick={()=> this.props.weather_weekday('Mon')}>monday</Link>
                    <Link to="/weather/tuesday"onClick={()=>{this.props.weather_weekday('Tue')}}>tuesday</Link>
                    <Link to="/weather/wednesday"onClick={()=>{this.props.weather_weekday('Wed')}}>wednesday</Link>
                    <Link to="/weather/thursday" onClick={()=>{this.props.weather_weekday('Thur')}}>thursday</Link>
                    <Link to="/weather/friday" onClick={()=>{this.props.weather_weekday('Fri')}}>friday</Link>
                    <Link to="/weather/saturday" onClick={()=>{this.props.weather_weekday('Sat')}}>saturday</Link>
                    <Link to="/weather/sunday" onClick={()=>{this.props.weather_weekday('Sun')}}>sunday</Link>
                   
                </div>
                </div>
           
            
        );
    }

};
export default Form;