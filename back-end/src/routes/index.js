const express = require("express");

const router = express.Router();

// outras rotas...

const database = require("../config/database");

const restaurantsController = require("../controllers/restaurantsController");

router.post("/restaurants/create", restaurantsController.postCreateRestaurant);

router.get("/restaurants", restaurantsController.getRestaurants);

router.get("/", (request, response) => {
  response.status(200).send({
    message: "Rota acessada com sucesso!",
  });
});

module.exports = router;
