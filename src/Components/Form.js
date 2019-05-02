import React from "react";

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={(e) => {
                this.props.getWeather(this.state.city, this.state.country) 
                e.preventDefault();}
            }> 
                <input type="text" name ="city" placeholder="city" onChange={(e) => this.setState({city: e.target.value})}/>
                <input type="text" name ="country" placeholder="country" onChange={(e) => this.setState({country: e.target.value})}/>
                <button>Get weather</button>
            </form>
        );
    }

};
export default Form;