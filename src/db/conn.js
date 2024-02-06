const mongoose = require('mongoose');

// const url ="mongodb://127.0.0.1:27017/ayushDynamic";

const url = "mongodb+srv://userdb:userpwd@cluster0.xxzcvsv.mongodb.net/?retryWrites=true&w=majority";

// Creating a database
mongoose.connect(url).then(() => {

    console.log("connection successful");

}).catch((error) => {

    console.log(error);
    
})
