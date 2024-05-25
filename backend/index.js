const express=require('express');
const cors=require('cors');
require('./db/config');
const User=require('./db/user');
const Products=require('./db/Products');
const Jwt=require('jsonwebtoken');
const jwttoken='e-comm';
const app=express();
app.use(express.json());
app.use(cors()); 
app.post('/register',async(req,resp)=>
{
   
    let user=new User(req.body);
    let result=await user.save();
    result=result.toObject();
    delete result.password;
    resp.send(result);
})

app.post('/login',async(req,resp)=>
{
    console.log(req.body);
    if(req.body.password && req.body.email)
    {
        let user=await User.findOne(req.body).select('-password');
        if(user)
        {
            resp.send(user);
        }
        else{
            resp.send({result:"no user found"});
        }
    }
    else{
        resp.send({result:"no user found"});
    }
})

app.post('/add-product',async(req,resp)=>
{
    let product=new Products(req.body);
    let result=await product.save();
    resp.send(result);
})

app.get("/products",async(req,resp)=>
{
    let data=await Products.find();
    if(data.length>0)
    {
        resp.send(data);
    }
    else
    {
        resp.send({data:"No result found"});
    }
})
app.delete("/delete/:id",async(req,resp)=>
{
    const result=await Products.deleteOne({_id:req.params.id});
    resp.send(result);
})

app.get("/product/:id",async(req,resp)=>
{
    let result=await Products.findOne({_id:req.params.id});
    if(result)
    {
        resp.send(result);
    }
    else
    {
        resp.send({result:"no data"});
    }
})

app.put("/produc/:id",async(req,resp)=>
{
    let result=await Products.updateOne({_id:req.params.id},{$set:req.body});
    resp.send(result);
})
app.get("/search/:key",async(req,resp)=>
{
    let result=await Products.find({
        "$or":[
            { name: { $regex: req.params.key}},
            { category :{ $regex: req.params.key}},
            { company :{ $regex: req.params.key}}
        ]
    });
    resp.send(result);
})
app.listen(5000);

// const ConnectDb=async()=>
// {
//     mongoose.connect('mongodb://localhost:27017/e-commerce');
//     const productSchema=new mongoose.Schema({});
//     const product=mongoose.model('products',productSchema);
//     const data=await product.find();
//     console.log(data);
// }
// ConnectDb();