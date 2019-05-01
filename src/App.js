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
    e.persist();
    this.setState({
      city:e.target.value,
      country:e.target.value,
    })
    console.log(this.state); // TODO: Update state 
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather"
    const appId = "9ddad1106126f78a603385086f9e4bf1"

    const api_call = await fetch(`${baseUrl}?q=${this.state.city},${this.state.country}&appid=${appId}`)
    const data = await api_call.json();
    
    console.log(data);

 };

 
    render(){ 
      return (
        <div>
          <Titles/>
          <Form getWeather={this.getWeather} />
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