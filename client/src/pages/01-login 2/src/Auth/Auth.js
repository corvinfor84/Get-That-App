// src/Auth/Auth.js

import history from '../history';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'learnesh.auth0.com',
    clientID: 'BjMWXfCDbSZpK5GqY6E5VeiiSDkUEzKT',
    redirectUri: 'http://localhost:9000/',
    audience: `https://learnesh.auth0.com/userinfo`,
    responseType: 'token id_token',
    scope: 'openid'
  });

  userProfile;

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

 handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/artists');
      } else if (err) {
        history.replace('/');
        console.log(err);
      }
    });
  }

 setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/');
  }


  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.userProfile = null;
    // navigate to the home route
    history.replace('/');
  }
    getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }

  getProfile(cb) {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}

// import history from '../history';

// // ...
// export default class Auth {
//   // ...
//   constructor() {
//     this.login = this.login.bind(this);
//     this.logout = this.logout.bind(this);
//     this.handleAuthentication = this.handleAuthentication.bind(this);
//     this.isAuthenticated = this.isAuthenticated.bind(this);
//   }

//   handleAuthentication() {
//     this.auth0.parseHash((err, authResult) => {
//       if (authResult && authResult.accessToken && authResult.idToken) {
//         this.setSession(authResult);
//         history.replace('/');
//       } else if (err) {
//         history.replace('/');
//         console.log(err);
//       }
//     });
//   }

//   setSession(authResult) {
//     // Set the time that the Access Token will expire at
//     let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
//     localStorage.setItem('access_token', authResult.accessToken);
//     localStorage.setItem('id_token', authResult.idToken);
//     localStorage.setItem('expires_at', expiresAt);
//     // navigate to the home route
//     history.replace('/home');
//   }

//   logout() {
//     // Clear Access Token and ID Token from local storage
//     localStorage.removeItem('access_token');
//     localStorage.removeItem('id_token');
//     localStorage.removeItem('expires_at');
//     // navigate to the home route
//     history.replace('/home');
//   }

//   isAuthenticated() {
//     // Check whether the current time is past the 
//     // Access Token's expiry time
//     let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
//     return new Date().getTime() < expiresAt;
//   }
// }
