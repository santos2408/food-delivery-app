const database = require("../config/database");

exports.getRestaurants = async (request, response) => {
  const [rows] = await database.query("SELECT * FROM restaurants");

  console.log(rows);

  response.status(202).send({
    message: "Restaurantes obtidos com sucesso!",
  });
};

exports.postCreateRestaurant = async (request, response) => {
  const { name, description, category, rate, logo, shipping, delivery_time, adress } = request.body;

  await database.query(
    "INSERT INTO restaurants (id, name, description, category, rate, logo, shipping, delivery_time, adress) VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?, ?)",
    [name, description, category, rate, logo, shipping, delivery_time, adress],
  );

  response.status(202).end();
};
