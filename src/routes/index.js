import express from "express";
import books from "./booksRoute.js";
import products from "./productsRoute.js";
import cars from "./carsRoute.js";
import users from "./usersRoute.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ title: "Product Manager" });
  });

  app.use(express.json(), books, products, cars, users);
};

export default routes
