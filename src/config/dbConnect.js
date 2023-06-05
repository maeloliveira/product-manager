import mongoose from "mongoose"

mongoose.connect("");
//adjust mongo connection on github

let db = mongoose.connection;

export default db;
