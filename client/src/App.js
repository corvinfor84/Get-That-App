import React, { Component } from 'react';
import Logo from "./components/LogoButton";
import "./App.css";

class App extends Component {
    goTo(route) {
      this.props.history.replace(`/${route}`)
    }
  
    login() {
      this.props.auth.login();
    }
  
    logout() {
      this.props.auth.logout();
    }
  
    render() {
      const { isAuthenticated } = this.props.auth;

      return (
        <div className="container">
        {
			!isAuthenticated() && (
			    <div className="login-platform" onClick={this.login.bind(this)}>
                    <Logo className="login-logo"
                    />
            </div>)
		} 
        </div>);
    }
  
      
}

  
export default App;