import React, { Component } from "react";
import "./style.css"

class DasboardPayslipCard extends Component {
    render() {
        return (
            <div className="dashboardCard card mr-5 cardBackground">
                <div className="card-body">
                    <h4 className="card-subtitle mb-2">Payslips</h4>
                    <p className="card-text">No payslips currently</p>
                    <a href="/payslips" className="card-link bottomLink">More details</a>
                </div>
            </div>
        );
    }
}

export default DasboardPayslipCard;