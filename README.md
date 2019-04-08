![CF](http://i.imgur.com/7v5ASc8.png) Project - API Server
=================================================

## API Server

### Author: Alexander White

### Links and Resources
* [PR](https://github.com/alex-white-401-advanced-javascript/project-API-Server/pull/1)

* [Heroku](https://alex-api-server.herokuapp.com/)

#### Documentation
* [jsdoc](./docs/index.html)

### Modules
#### `index.js`
* mongoose.connect

#### `/src/app.js`
* module.exports = { server: app, start: }



#### `.src/auth/middleware.js`
* function _authBasic(authString)
* function _authenticate(user)
* function _authError()
* function _authBearer(authString)

#### `/src/auth/router.js`
* authRouter.post('/signup', (req, res, next)
* authRouter.post('/signin', auth, (req, res, next)
* authRouter.post('/key', auth, (req, res, next)

#### `.src/auth/users-model.js`
* users.pre('save', function(next)
* users.statics.createFromOauth = function(email)
* users.statics.authenticateToken = function(token)
* users.statics.authenticateBasic = function(auth)
* users.methods.comparePassword = function(password)
* users.methods.generateToken = function()

#### `/src/auth/router.js`
* authRouter.post('/signup', (req, res, next)
* authRouter.post('/signin', auth, (req, res, next)
* authRouter.post('/key', auth, (req, res, next)


### Setup
* Clone Repo down
* Create .env file in root directory with PORT and MONGODB_URI and a custom SECRET key
* `npm i` 

#### Running the app
* `npm start`
  
#### Tests
* How do you run tests? `npm test`
* What assertions were made? 
* What assertions need to be / should be made? 

#### For Developers
* How do I add models?

* How do I add new OAuth Providers?

* How do I identify an OAUth provider

* How do I setup my .env? How do I set that up remotely?

* What routes are supported?

* How do I call them and what data do they expect?

* What format does data come back?
