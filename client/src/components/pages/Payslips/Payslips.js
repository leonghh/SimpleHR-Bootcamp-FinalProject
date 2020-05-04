import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar"

class Payslips extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <div className="row">
                    <Sidebar />
                    <div>
                        <p>Payslips Working</p>
                    </div>
                </div>
            </div>
        );
    } 
}

export default Payslips;