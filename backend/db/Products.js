const mongoose=require('mongoose');

const ProductsSchema= new mongoose.Schema({
    name:String,
    prize:String,
    category:String,
    userId:String,
    company:String
});
module.exports=mongoose.model('products',ProductsSchema);