- Create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json
- Install express
- Create a server 
- Listen to port 7777
- write request handlers for /test, /hello
- Install nodemon and update scripts inside package.json

-initialize git
- .gitignore
- Create a remote repo on github
- Push all code to remote origin
- Play with routes and route extensions ex. /hello, / , hello/2, /xyz
- Order of the routes matter a lot 
- Install Postman app and make a workspace/collection test API call
- Write logic to handle GET, POST, PATCH, DELETE Api Calls and test them on postman  
- Explore routing and use of ?, +, (), * in the routes
- Use of regex in routes /a/, /.*fly$/
- Reading the query params in the routes
- Reading the dynamic routes

- Multiple Route Handlers - Play with the code
- next()
- next function and error along with res.send()
- app.use("/route", rh, [rh2, rh3], rh4, rh5)
- write a dummy auth middleware for admin
- write a dummy auth middleware for all user routes, expect /user/login
- Error Handling using app.use("/", (err, req ,res , next)={})
- Create a free cluster on mongoDB  offical website (mongo Atlas)
- Install mongoose library
- Connect your application to the Database  "Connection-url"/devTinder
- Call the connectDB function and connect to database before starting application on 7777
- Create a userSchema & user Model


- Create a free cluster on mongoDB offical website (Mongo Atlas)
- Install mongoose library
- Connect your application to the Database "Connection-url"/devTinder
- Call the connectDB function and connect database before starting application on 7777
- Create a userSchema and user model
- Create a /signup documents using API calls from postman
- Error Handling using try, catch 
- Difference between js and json
- Add the express.json middleware to your app
- Make your API dynamic to recieve data from end user
- User.findOne with duplicate email ids, which object returned
- API- Get user by email
- API- Feed API - GET /feed - get all the users from the database
- API- Get user by ID
- Create a delete user API  
- Difference between PATCH and PUT
- API - Update a user
- Explore the Mongoose Documentation for model methods
- What are options in a Model.findOneAndUpdate method, explore more about it.
- API - update the user with emailID

- Explore schematype options from the documentation
- add required, unique, lowercase, min, maxlength, trim,
- add default,
- Create a custom validate function for gender
- Improve the DB schema PUT all appropiate validations on each field in Schema
- Add timestamps to the userSchema
- Add API level validation on patch request & Signup post api
- Data Sanitizing - Add API validation for each field
- Install validator
- Explore validator library function and use validator functions for password email photoURL
- Never TRUST req.body

- Validate data in signup API
- Install bcrypt package
- Create PasswordHash using bcrypt.hash & save the user with encrypted password
- Create login API
- Compare passwords and throw errors if email or password is invalid

- install cookie-parser
- just send a dummy cookie to user
- create get /profile API and check if you get the cookie back
- install jsonWebToken
- IN login API, after password validation, create a JWT token and send it to user in cookies
- read the cookies inside your profile API and find the logged in user
- userAuth Middleware
- Add the userAuth middleware in profile API and a new sendconnectionRequest API
- Set the expiry of JWT token and cookies to 7 days
- Create UserSchema method to getJWT()
- Create UserSchema method to compare(passwordInputByUser)

- Explore tinder APIs
- Create a list all API you can think of in Dev Tinder
- Read documentation for express.Router
- Create routes folder for managing auth, profile, request routers
- Create authRouters, profileRouters, requestRouters
- Import this routers in app.js
- Create POST /logout API
- Create PATCH /profile/edit
- Create a PATCH /profile/password API => forgot password API
- Make sure you validate all data in every POST, PATCH apis


- Create connection request schema 
- Send Connection Request API
- Proper validation of data
- Think about corner cases
- $or and $and query in mongoose
- Schema.pre("save") function
- Read more about indexs in mongoDB
- why do we need index in DB?
- what is the advantages and disadvantages of creating?
- Read article













 