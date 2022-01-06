import React from 'react';
import {Link} from 'react-router-dom';


export default function Homepage(){
        return (
                <div className="row mt-5 mb-5 mx-2">
                <div className="col-md-3 mt-5 text-center">
                        <h3 className="mt-5">Dollars Bank</h3>
                        <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/Registration" className="btn btn-primary btn-lg active w-50" role="button" aria-pressed="true">Create Account</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Login" className="btn btn-primary btn-lg active w-50" role="button" aria-pressed="true">Login</Link>
                        </li>
                        </ul>
                </div>
                <div className="col-md">
                        <div style={{height: "400px"}} className="row">
                            
                            <div className="bg-image hover-overlay ripple shadow-1-strong rounded w-100 h-100"
                                    data-ripple-color="light">
                            <img className="w-100 h-100" src={require("../Img/hompagehero.jpg")}/>
                        
                        </div>
                        <div className="row">
                            <div className="col-md col-md-offset-2 mt-5 text-center">
                                <p className="lead mx-5">Welcome to Dollars Bank. Rated top in customer satisfaction. We are here to tailor services as per your request and need.</p>
                                <p className="lead mx-5">Enjoy Banking With Us!</p>
                                
                            
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

        );
    }
