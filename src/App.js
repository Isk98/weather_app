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
    error: "",
  };


  getWeather = async (city,country)=>{
  
     const baseUrl = "http://api.openweathermap.org/data/2.5/weather"
    const appId = "9ddad1106126f78a603385086f9e4bf1"

    const api_call = await fetch(`${baseUrl}?q=${city},${country}&appid=${appId}`)
    const data = await api_call.json();
    
    if (city&&country){
    console.log(data);
      this.setState({
      temperature: data.main.temp,
      city:data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
    console.log(this.state); // TODO: Update state
  }
  else{
    console.log(data);
     this.setState({
      temperature: undefined,
      city:undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter the value",
    })
    console.log(this.state); // TODO: Update state
  }
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
                     error= {this.state.error}/>
        </div>
      );
        
    }
  };
 
  export default App;