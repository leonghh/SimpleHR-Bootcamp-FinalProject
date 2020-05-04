import React, { Component } from "react";
import Navbar from "../../Navbar/Navbar";

class Landing extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className='col-sm-8 mx-auto'>
                        <h1 className='text-center'>SimpleHR</h1>
                        <h2 className='text-center'> Rostering Made Easy</h2>
                    </div>
                </div>
            </div>
        );
    } 
}

export default Landing;