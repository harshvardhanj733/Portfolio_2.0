const mongoose = require('mongoose');
const url = "mongodb+srv://harshvardhanj733:Harsh7@cluster0.i7vqlry.mongodb.net/?retryWrites=true&w=majority";

const database = module.exports = ()=>{
    const connectionParams={
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    try {
        mongoose.connect(url, connectionParams)
        console.log("Database Connected Successfully!")
    } catch (error) {
        console.log(error)
        console.log("Database Connection Failed!")
    }
}