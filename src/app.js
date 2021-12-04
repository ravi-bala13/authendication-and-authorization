const express = require("express");

const {body, validationResult} = require("express-validator");

const {register, login} = require("./controllers/auth.controller")

const postController = require("./controllers/post.controller");
// step 1
const connect = require("./configs/db")


// ************************************************

const app = express();

app.use(express.json());

app.post(
    "/register", 
    body("name").isLength({ min: 4 }).withMessage("Name must br 4 characters"), 
    body("email").custom(async (value) => {
        const isEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/.test(value);
        if (!isEmail){
            throw new Error("Please enter a proper email")
        }
        const emailFormat = ["gmail.com", "yahoo.com"]
        const toCheck = value.split("@");
        
        if( !(emailFormat.includes(toCheck[1])) ){
            throw new Error("Please enter a proper domain")
        }
        return true
    }),
    body("password").isLength({ min: 8 }).withMessage("password must be 8 characters"), 
    register
);  
app.post(
    "/login", 
    body("email").custom(async (value) => {
        const isEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/.test(value);
        if (!isEmail){
            throw new Error("Please enter a proper email");
        }
        const emailFormat = ["gmail.com", "yahoo.com"]
        const toCheck = value.split("@");
        
        if( !(emailFormat.includes(toCheck[1])) ){
            throw new Error("Please enter a proper domain")
        }
        return true
    }),
    body("password").isLength({ min: 8 }).withMessage("password must be 8 characters"), 
    login)

app.use("/posts", postController)

app.listen(2351, async ()=> {
    await connect();
    console.log("I am listening 2351")
})