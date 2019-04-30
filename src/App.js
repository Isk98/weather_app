import React from 'react';
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

class App extends React.Component{
  state = {
    temperature :undefined,
    city :undefined,
    country :undefined,
    humidity :undefined,
    description :undefined,
  };


  getWeather = async (e)=>{
    e.preventDefault();
    
   
    const api_call= await fetch("http://api.openweathermap.org/data/2.5/weather?q={this.state.city},{this.state.country}&appid=9ddad1106126f78a603385086f9e4bf1")
   const data = await api_call.json();
   console.log(data);
 };


    render(){ 
      return (
        <div>
          <Titles/>
          <Form getWeather={this.getWeather}
                getInputValue={this.getInputValue}
               />
          <Weather temperature= {this.state.temperature}
                    city =  {this.state.city}
                      country=   {this.state.country} 
                     humidity= {this.state.humidity}
                     description = {this.state.description}

          />
        </div>
      );
        
            
         }
  };
 
  export default App;