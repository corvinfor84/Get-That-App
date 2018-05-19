# Deployment

Here I document the steps I needed to take to deploy Get-That-App to Heroku

## Instructions

  * Initialize the project folder as a git repo. (`git init`)

  * Create a Heroku app for the Get-That-App. (`heroku login`, `git remote -v`, `heroku create`)
  
  * Add a MongoLab Addon from the Heroku website.

  * Run `yarn build` from within the project folder.
  
  * Change `Auth.js` callback URI to your heroku app's newly created url, add this url to trusted list in Auth0 (currently Auth0 under Jina's account. if you want to switch to your own account, make sure to signup with Auth0 and select single-page React app)
  
  * Run `yarn build` from within client.
  
  * `git add *`, `git commit -m 'comment'` from project folder
   
  * `git push heroku origin`
  
  * `git add -f 'client\build'`, `git commit -m 'build folder'` (this is needed since heroku ignores the build folder but needs it)
  
  * `git push heroku origin`
  

### Known problems
* app only works with http link, not https - don't know why

* http://serene-plains-92431.herokuapp.com/


