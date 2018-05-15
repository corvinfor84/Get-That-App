import React, { Component } from 'react';
import Featured from "../components/Featured/Featured.js";
// import Footer from "./components/Footer/Footer";

class Home extends Component {
  getExpiryDate() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return JSON.stringify(new Date(expiresAt));
  }
  render() {
    const { isAuthenticated, login } = this.props.auth;
    return (
      <div className="container">
        {isAuthenticated() &&
          <div>
            <h4>You are logged in!</h4>

            <Featured />
          </div>}
        {!isAuthenticated() &&
          <div>
            <h4>
              You are not logged in! Please{' '}
              <a style={{ cursor: 'pointer' }} onClick={login.bind(this)}>
                Log In
              </a>{' '}
              to continue.
            </h4>
            <Featured />
            
          </div>}
          
      </div>
    );
  }
}

export default Home;
