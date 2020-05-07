import React, { Component } from "react";


class LandingJumbo extends Component {
    render() {
        return (
            <div className="jumbotron mt-5">
                <div className='col-sm-8 mx-auto jumboText'>
                    <h1 className='d-flex justify-content-center companyName'>
                        <div className="sidebar-brand-icon rotate-n-15 mr-2">
                            <i className="far fa-user-circle" />
                        </div> 
                        <div>SimpleHR</div>
                    </h1>
                    <h2 className='text-center companySlogan'>Rostering Made Easy.</h2>
                </div>
            </div>
        );
    } 
}

export default LandingJumbo;