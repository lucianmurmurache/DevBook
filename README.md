## DevBook

### [Demo](https://devb00k.herokuapp.com/)

### Summary:
 * A responsive social networking application built using _React_. 
 * Users can register, create a profile and connect with other users, discuss projects they built and like or dislike posts.
 * The application uses [Github API](https://developer.github.com/v3/) to load the 5 most recent repositories.

### Required Dependencies

 * To install all server dependencies, you can simmply run **npm i** from the root directory.
 * To install all client dependencies, navigate to the client folder and run **npm i**.

 * Used dependencies: 
    * axios
    * bcryptjs
    * config
    * express
    * express-validator
    * gravatar
    * jsonwebtoken
    * mongoose
    * normalize-url
    * moment
    * react
    * react-dom
    * react-moment
    * react-redux
    * react-router-dom
    * react-scripts
    * redux
    * redux-devtools-extension
    * redux-thunk
    * uuid
    * dev-dependencies:
        - concurrently
        - nodemon
        - [:shipit:](https://www.youtube.com/watch?v=oHg5SJYRHA0)

 ### Installation instructions

 * If you use Heroku as your PaaS, as you added _default.json_ to be ignored, Heroku actually needs this file.
 * You should also ensure that you [installed](https://devcenter.heroku.com/articles/heroku-cli) Heroku on your machine and are [logged in](https://devcenter.heroku.com/articles/heroku-cli#getting-started) into your Heroku account.
 * In the _.gitignore_ file, add confing/default.json
 * Add a _default.json_ file in the _config_ folder with the following information:
```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "<<our_secret>",
  "githubToken": "<yoursecrectaccesstoken>"
}
```
* At this point, it is assumed that you already have a MongoDB account and a cluster created. If you do not, check out the MongoDB [documentation](https://docs.atlas.mongodb.com/) on how to!
* Install server dependencies from your root directory
```
npm install
```
* Install client dependencies
```
cd client
npm install
```
* Run Express & React **concurrently** from the root directory.
``` 
cd ..
npm run dev 
```
* Test production before deployment:
    - Run the *build* command in the client folder, then navigate to the root directory and run: 
      ```NODE_ENV=production node server.js```
    - Open your browser and access [localhost:5000](http://localhost:5000/)


#### You can follow these steps to avoid pushing sensitive data to Github:
  * Create a new branch, say called ```production``` or similar :
  ```
  git checkout -b production
  ```
  * Add the config file:
  ```
  git add -f config/production.json
  ```
  * It is important __not to__ push the branch to Github!
  * Commit:
  ```
  git commit -m "Ready to deploy to Heroku"
  ```
  * Create your Heroku project:
  ```
  heroku create <app_name>
  ```
  * Push the local production branch to the remote Heroku master branch:
  ```
  git push heroku production:master
  ```
  * After deployment, I suggest that you delete the production brach.

### Images

<img src="devbook-1.png" alt="Login Screenshot" width="1897px">
<img src="devbook-2.png" alt="Posts Screenshot" width="1897px">
<img src="devbook-3.png" alt="Developers Screenshot" width="1897px">
