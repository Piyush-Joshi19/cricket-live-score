import React from "react";
import { NavLink } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import SportsCricketIcon from '@material-ui/icons/SportsCricket';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">

                    <nav className="navbar navbar-expand-lg navbar-light bg-dark">

                        <div className="container-fluid">
                            
                            <NavLink  className="navbar-brand" to="/"><SportsCricketIcon style = {{color: "white"}} /> Live Score  </NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <NavLink style = {{color: "white"}} activeClassName = "menu_active" exact className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink style = {{color: "white"}} activeClassName = "menu_active" exact className="nav-link" to="/match">Matches</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink style = {{color: "white"}} activeClassName = "menu_active" exact className="nav-link" to="/news">News</NavLink>
                                    </li>
                                   
                                </ul>

                            </div>
                        
                     </nav>
                 </div>
          </div>




        </>
    )

}

export default Navbar;




