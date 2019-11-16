exports.seed = function(knex) {
  return knex("cars")
    .del()
    .then(function() {
      return knex("cars").insert([
        {
          id: 1,
          VIN: "MYV1NNUM83R",
          MAKE: "Tesla",
          MODEL: "test model",
          MILEAGE: "300,000"
        },
        {
          id: 2,
          VIN: "2MYV1NNUM83R",
          MAKE: "2Tesla",
          MODEL: "2test model",
          MILEAGE: "2300,000"
        }
      ]);
    });
};
