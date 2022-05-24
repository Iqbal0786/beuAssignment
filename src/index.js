const express= require("express")
const app= express()
const connect= require("./configs/db")
const productController= require("./controllers/product.controller")
app.use(express.json())

app.use("/products",productController)


app.listen(9999,async ()=>{
     try {
          await  connect()
          console.log("listening port number 9999")
     } catch (error) {
         console.log(error.message)
     }
})