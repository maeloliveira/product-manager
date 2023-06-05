import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        author: {type: String, required: true},
        title: {type: String, required: true},
        genre: {type: String, required: true},
        price: {type: Number, required: true},
        available: {type: Boolean, default: true}
    }
);
const books = mongoose.model("books", bookSchema)

export default books;