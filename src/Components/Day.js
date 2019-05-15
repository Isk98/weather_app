import React, { Component } from 'react';

class Day extends React.Component{
    render(){
        return(
         <div> 
       
           <p>  Day:{this.props.day} </p>
           <p>  Temperature:{this.props.temperature} </p>
           <p>  Humidity:{this.props.humidity} </p>
           <p>  Description:{this.props.description} </p>
         </div>


        );
    }
};

export default Day;