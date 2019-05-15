import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Titles from "./Components/Titles";
//import Form from "./Components/Form";
import Day from "./Components/Day";
import './App.css';
import PropTypes from 'prop-types';
//import { withRouter } from "react-router";



class App extends React.Component{
  state = {
    temperature :undefined,
    humidity :undefined,
    description :undefined,
    day:undefined,
  };
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }
  componentDidUpdate(prevProps) {
    
    if (this.props.location !== prevProps.location) {
      this.weather_weekday();
    }
  }
   
  weather_weekday = async ({match}) => {      
    const api_call_2 = await fetch ("https://random-weather-api.herokuapp.com/weather")
    const data= await api_call_2.json();
    for (var i=0;i<data.length;i++){
      if(data[i].weekday===match.params.day){
        this.setState({
          day:data[i].weekday,
          temperature:data[i].temperature,
          humidity:data[i].humidity,
          description:data[i].description,
        });
      console.log(this.state); // TODO: Update state*/
       }
    }
  };

  render(){
    
    return (
      <Router>
       <div>
         <Titles/>
         <Day 
               temperature= {this.state.temperature}
               day={this.state.day}
                humidity= {this.state.humidity}
                description = {this.state.description} />
              
       <Route path="/:day" exact strict component= {Day} />
      </div>
     </Router> 
     
    );
    
  }
  
};

 
 export default App;