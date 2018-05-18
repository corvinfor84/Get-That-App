import React, { Component } from 'react';

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
			    <div className="col-xs-12 jumbotron text-center">
                    <h1>WISHLIST</h1>
                    <p>PLEASE SIGN IN!</p>
                    <a className="btn btn-primary btn-lg btn-login btn-block" onClick={this.login.bind(this)}>Sign In</a>
            </div>)
		} 
        </div>);
    }
  
      
}

  
export default App;