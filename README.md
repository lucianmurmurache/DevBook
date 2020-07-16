## DevBook

### [Demo](https://dev---book.herokuapp.com/)

### Summary:
 * A responsive social application built using _React_. 
 * Users can register, create a profile and connect with other users and discuss projects they built.
 * The application uses [Github APIs](https://developer.github.com/v3/) to load the most recent 5 repositories.

### Required Dependencies

 * To install all dependencies, you can simmply run **npm i** from the root directory.

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
    * request
    * dev-dependencies:
        - concurrently
        - nodemon

 ### Installation instructions
 * Add a default.json file in config folder with the following
```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```
* Install server dependencies
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
npm run dev 
```
* Test production before deploy
    - After running a build in the client folder, cd into the root of the project and run ```NODE_ENV=production node server.js```
    - Open your browser and navigate to http://localhost:5000/

### Images

<img src="devbook-1.png" alt="Login Screenshot" width="1897px">
> Landing page

<img src="devbook-2.png" alt="Posts Screenshot" width="1897px">
> Posts page

<img src="devbook-3.png" alt="Developers Screenshot" width="1897px">
> Developers page
