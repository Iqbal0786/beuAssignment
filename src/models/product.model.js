
const mongoose= require("mongoose");

// [{productId:123,quantity:10,operation:”add”},

//     {productId:143,quantity:14,operation:”add”},
    
//     {productId:193,quantity:17,operation:”subtract”}]
    
const productSchema= new mongoose.Schema({
    productId:{type:Number, required:true},
    quantity:{type:Number, required:true},
    operation:{type:String, required:true}

},{
    timestamps:true,
    versionKey:false
})

module.exports= mongoose.model("product",productSchema);