Objective: To use Auth0 React's documentation using our personal Auth0 account to implement in the Get-That Application in order to have users login and save their personal login and password. Once logged in, users can search desired items through Amazon web scraper and save to a unique user wih list.

# Auth0 React Login

This Auth0 Login will add authentication to the GetThat application specifically tailored for React. GetThat Auth0's hosted login page which provides centralized authentication. We used create-react-app.

## Getting Started

We created a specific Client ID and Domain. To launch using the create-react-app, the URL is `http://localhost:3000/callback`.

Per Auth0 documentation, just clone the repo or download it from the React quickstart page in Auth0's documentation. Install create-react-app globally and the dependencies for the app. For example,

```bash
npm install -g create-react-app
cd 01-Login
npm install
```

## Run the Application

The GetThat Mongodb server can be used to serve the application.

```bash
npm start
```

The application will be served at `http://localhost:3000`.


## How will Auth0 help authenticate GetThat?

Auth0 will help us to add authentication for our application using social media accunts or personals e-mail accounts such as: Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce,etc. 

We will also have access to analytics of how, when and where users are logging in so that we can save their information based on their Amazon searches and add this to their saved wish list.

## Author

[Auth0](https://auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.
