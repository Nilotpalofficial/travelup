import "./Destinationstyles.css";
import { Component } from "react";
import Andaman1 from "../assets/andaman1.jpg";
import Andaman2 from "../assets/andaman2.jpg";
import Andaman3 from "../assets/andaman3.jpg";
import Andaman4 from "../assets/andaman4.jpg";

class Destinationdata extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text} </p>
                </div>
                <div className="image">
                    <img alt="andaman" src={this.props.img1}/>
                    <img alt="andaman" src={this.props.img2}/>
                </div>
            </div>
            
        )
    }
    
}

export default Destinationdata