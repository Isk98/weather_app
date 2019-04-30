import React from "react";

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}> 
                <input type="text" name ="city" placeholder="city" onChange={this.props.getInputValue}/>
                <input type="text" name ="country" placeholder="country" onChange={this.props.getInputValue}/>
                <button>Get weather</button>
            </form>
        );
    }
};
export default Form;