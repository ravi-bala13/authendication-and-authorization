# authendication-and-authorization
create authentication and authorization by unsing jsonwebtoken and bcryptjs packages
Create a user model and have these fields :-
  name ( required )
  email ( required )
  password ( required )
  timestamps
create a signup and a signin route for registering and logging in users
have validations in sign up for name, email and password
have validations in sign in for email and password

Create a Post model with following fields
  title ( required )
  body ( required )
  user ( references the user collection and is required )
Create a route for /posts
  If user is authenticated only then he should be able to check all posts
