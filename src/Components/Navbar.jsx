import React from "react";
import "./Navbarstyles.css"; 
import { MenuItems } from "./MenuItems";

import { Link, NavLink } from "react-router-dom";

class Navbar extends React.Component {
    state={clicked:false};
    handleClick=()=>
    {
        this.setState({clicked:!this.state.clicked});
    }
    render(){
        return(
            
                <nav className="NavbarItems">
                    <h1 className="navbar-logo">TravelUp!</h1>
                    <div className="menu-icons" onClick={this.handleClick}>
                        <i className={this.state.clicked? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                    </div>
                    <ul className={this.state.clicked? "nav-menu active" : "nav-menu"}>
                        {MenuItems.map((item,index) => {
                            return(
                                <li key={index}>
                                    <Link className={item.cname} to={item.url}><i className={item.icon}></i>{item.title}</Link>
                                </li>
                                
                            )
                        })}
                        <NavLink to={'/signup'}><button>Sign Up</button></NavLink>
                        <NavLink to={'/login'}><button>Login</button></NavLink>
                    </ul>
                </nav>
            
        )
    }
}

export default Navbar

