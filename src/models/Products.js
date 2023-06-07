import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String},
        definition: {type: String},
        quantity: {type: Number}
    }
);

const products = mongoose.model("products", productSchema)

export default products;