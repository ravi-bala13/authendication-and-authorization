const mongoose = require("mongoose");

// step 1
const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/authen_autheri_assign");
}

module.exports = connect;