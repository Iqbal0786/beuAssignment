
const express= require("express");
 const Prodcut= require("../models/product.model")
const router= express.Router();


router.get("", async(req,res)=>{
    try {
         const products= await Prodcut.find().lean().exec();
         return res.status(200).send(products)
        
    } catch (error) {
        res.status(500).send({message:error.message})
    }

})

router.post("", async(req,res)=>{
       try {
            const product= await Prodcut.create(req.body);
            return res.status(200).send(product)
           
       } catch (error) {
           res.status(500).send({message:error.message})
       }

})
router.patch("/add", async(req,res)=>{
    try {
         if(req.body.operation=="add"){
          const    {id, quantity}= req.query
            const product= await Prodcut.find({productId:req.query.productId});
              product[0].quantity= product[0].quantity+ Number(req.query.quantity)
            console.log(product)

            const updated= await Prodcut.updateOne(product[0])
           return res.status(200).send(updated)
         }
         
        
    } catch (error) {
        res.status(500).send({message:error.message})
    }

})

router.delete("/:id" ,  async(req,res)=>{

    try {
         let product= await Prodcut.findByIdAndDelete(req.params.id);
         return res.status(200).send(product)
        
    } catch (error) {
        res.status(500).send({message:error.message})
    }
})






module.exports=router