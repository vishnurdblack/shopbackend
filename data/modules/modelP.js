const mongoose =require('mongoose');
const schema=new mongoose.Schema
({
    firstname: String,
    lastname: String,
    email: String,
    phonenumber: String,
    streetaddress: String,
    country: String,
    postal: String,
    city: String,
    province: String,
    card: String,
    expiration: String,
    cvv: String,
    id: String,
    date: String,
});
module.exports=mongoose.model("Prod",schema);