import express from "express";
import books from "./booksRoute.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ title: "Manager Storage" });
  });

  app.use(express.json(), books);
};

export default routes
