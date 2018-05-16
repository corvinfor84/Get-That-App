import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
// import Sidebar from "./components/Navbar/Navbar";
// import Trails from "./components/Wrapper/Wrapper";
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  renewToken() {
    this.props.auth.renewToken();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <nav className="navbar navbar-expand-lg py-3 fixed-top navbar-dark bg-dark">

              <a onClick={this.goTo.bind(this, 'home')}>
                <img src="//images/GTA-Logo.svg" className="d-inline-block align-top logo" width="100%" alt="GetThat logo"></img>
              </a>

              <button
                type="button"
                className="navbar-toggler btn-warning"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={this.goTo.bind(this, 'home')}
              >
                <span className="navbar-toggler-icon"></span>
                Home
            </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link" href="/">Home</a>
                  <a className="nav-item nav-link"  onClick={this.goTo.bind(this, 'menu')}>Menu</a>
                  <a className="nav-item nav-link" href="/">Contact</a>
                  {/*<a className="nav-item nav-link" href="/">Login/Register</a>
                    <a className="nav-item nav-link" href="/">Register</a>*/}

                  {!isAuthenticated() &&
                    <Button
                      bsStyle="warning"
                      className="btn-margin"
                      onClick={this.login.bind(this)}
                    >
                      Log In
              </Button>}
                  {isAuthenticated() &&
                    <Button
                      bsStyle="warning"
                      className="btn-margin"
                      onClick={this.goTo.bind(this, 'profile')}
                    >
                      Profile
              </Button>}
                  {/*{isAuthenticated() &&
              <Button
                bsStyle="warning"
                className="btn-margin"
                onClick={this.renewToken.bind(this)}
              >
                Renew Token
            </Button>}*/}
                  {isAuthenticated() &&
                    <Button
                      bsStyle="warning"
                      className="btn-margin"
                      onClick={this.logout.bind(this)}
                    >
                      Log Out
              </Button>}
                </div>
              </div>
            </nav>
          </Navbar.Header>
        </Navbar>
        {/*<Menu />*/}
        {/*<Dashboard />*/}
        <Footer />
      </div>
    );
  }
}

export default App;
