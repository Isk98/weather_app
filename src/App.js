import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import './App.css';





class App extends React.Component{
  state = {
    temperature :undefined,
    humidity :undefined,
    description :undefined,
    day:undefined,
    img: undefined
  };
 

 
weather_weekday = async (day) => {      
    const api_call_2 = await fetch ("https://random-weather-api.herokuapp.com/weather")
    const data= await api_call_2.json();
   for (var i=0;i<data.length;i++){
      if(data[i].weekday===day){
        this.setState({
          day:data[i].weekday,
          temperature:data[i].temperature,
          humidity:data[i].humidity,
          description:data[i].description,
          img : this.setImage(data[i].description.toLowerCase())
        });
      console.log(this.state); // TODO: Update state
       }
    }
  };

   
 setImage=(description)=>{
    return(
      <span className="image-span">
      <img className="image" src={require(`./assets/images/${description}.png`)} alt="" />
      </span>
    )
   
  }

  render(){
    
    return (
      <Router>
       
         <Titles/>
         <Form weather_weekday={this.weather_weekday}/>
         <Weather
               temperature= {this.state.temperature}
               day={this.state.day}
                humidity= {this.state.humidity}
                description = {this.state.description}
                img = {this.state.img} />
              
       <Route path="/:day" exact strict component= {Weather} />
     
     </Router> 
     
    );
    
  }
  
};

 
 export default App;