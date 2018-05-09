 <script src="https://cdn.auth0.com/js/lock/11.x/lock.min.js"></script>
 <script src="https://cdn.auth0.com/js/lock/11.x.y/lock.min.js"></script>
 <script src="https://cdn.auth0.com/js/lock/11.6.1/lock.min.js"></script>
 
 var lock = new Auth0Lock('_2oPGXvDfGddGTC9jLOHHccUNdXcl69L', 'learnesh.auth0.com', {
    auth: {
      redirectUrl: 'https://YOUR_APP/callback',
      responseType: 'code',
      params: {
        scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
      }
    }
  });
</script>
<button onclick="lock.show();">Login</button>
