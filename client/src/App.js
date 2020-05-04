import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/pages/Landing/Landing";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Roster from "./components/pages/Roster/Roster";
import Payslips from "./components/pages/Payslips/Payslips";
import Profile from "./components/Profile/profile";

import "./App.css";

import StartUp from './components/pages/StartUp/startUp';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
        return (
                <Router>
                    <div className="container-fluid pl-0 pr-0 m-0">
                        <Navbar />
                        <Route exact path="/" component={Landing} />
                        <div className='container-fluid m-0 p-0'>
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/profile" component={Profile} />
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route exact path="/roster" component={Roster} />
                            <Route exact path="/payslips" component={Payslips} />
                            <Route exact path="/startUp" component={StartUp} />
                        </div>
                    </div>
                </Router>
        );
    }
}
export default App;
