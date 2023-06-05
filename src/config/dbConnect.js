import mongoose from "mongoose"

mongoose.connect("mongodb+srv://mael_db:15952010m@product-manager-store.jrvdfrf.mongodb.net/");

let db = mongoose.connection;

export default db;