import React from "react";
import {  Link } from "react-router-dom";
class Form extends React.Component{
    getDay=()=>{
        const ditet = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
        let now = new Date();
        let dita = ditet[now.getDay()];
        let ditet2=[];
        var poz=0;
        var poz1;
        for (var i=0; i<ditet.length;i++){
            if (ditet[i]===dita)
            {
                 poz=i-1;
                 poz1=poz;
                 for(var k=poz;k<7;k++)
                 {
                     ditet2.push(ditet[poz]);
                     poz++;
                 }
                 for (var j=0;j<poz1;j++){
                    ditet2.push(ditet[j]);
                } 
            }
        }
             
     
                 return ditet2;
               
     }
    

    render(){
        let ditaa= [];
        ditaa=this.getDay();
        
    
        return(
             <div className="dropdown">
                 <button className="dropbtn">Select</button>
                   <div className="dropdown-content">
                    
                    <Link to={{pathname: `/weather/${ditaa[0]}`}} onClick={()=> this.props.weather_weekday(ditaa[0].slice(0,3))}>{ditaa[0]}</Link>
                    <Link to={{pathname: `/weather/${ditaa[1]}`}}onClick={()=>{this.props.weather_weekday(ditaa[1].slice(0,3))}}>{ditaa[1]}</Link>
                    <Link to={{pathname: `/weather/${ditaa[2]}`}}onClick={()=>{this.props.weather_weekday(ditaa[2].slice(0,3))}}>{ditaa[2]}</Link>
                    <Link to={{pathname: `/weather/${ditaa[3]}`}} onClick={()=>{this.props.weather_weekday(ditaa[3].slice(0,3))}}>{ditaa[3]}</Link>
                    <Link to={{pathname: `/weather/${ditaa[4]}`}} onClick={()=>{this.props.weather_weekday(ditaa[4].slice(0,3))}}>{ditaa[4]}</Link>
                    <Link to={{pathname: `/weather/${ditaa[5]}`}}onClick={()=>{this.props.weather_weekday(ditaa[5].slice(0,3))}}>{ditaa[5]}</Link>
                    <Link to={{pathname: `/weather/${ditaa[6]}`}} onClick={()=>{this.props.weather_weekday(ditaa[6].slice(0,3))}}>{ditaa[6]}</Link>
                    <Link to ="/weather/week" onClick={()=>this.props.weather_week()}>All week </Link>
                </div>
            </div>
           
            
        );
    }

};
export default Form;