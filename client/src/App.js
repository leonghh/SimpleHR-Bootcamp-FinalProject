import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import RosterPage from './pages/RosterPage';
import PayslipsPage from './pages/PayslipsPage';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      login: {
        title: 'Learning Full Stack',
      },
      home: {
        title: 'Learning Full Stack',
      },
      profile: {
        title: 'About Me'
      },
      roster: {
        title: 'Let\'s Talk'
      },
      payslips: {
        title: 'Let\'s Talk'
      }
    }
  }


  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Link to="/">Login</Link>
          <Link to="/home">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/roster">Roster</Link>
          <Link to="/payslips">Payslips</Link> 

          <Route path="/" exact render={() => <LoginPage title={this.state.login.title} />} />
          <Route path="/home" render={() => <HomePage title={this.state.home.title} />} />
          <Route path="/profile" render={() => <ProfilePage title={this.state.profile.title} />} />
          <Route path="/roster" render={() => <RosterPage title={this.state.roster.title} />} />
          <Route path="/payslips" render={() => <PayslipsPage title={this.state.payslips.title} />} />

        </Container>
      </Router>
    );
  }
}

export default App;
