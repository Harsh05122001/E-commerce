const mongoose  =require("mongoose");

const CartSchema = new mongoose.Schema(
    {
    userId: { type:String,required:true},
    products: [
        {
            productId:{
                type:String
            },
            quantity:{
                type:Number,
                default:1,

            },
        },
    ],  
},
{timestamps: true}
);
var CartS = mongoose.model("Cart",CartSchema);
module.exports = CartS;