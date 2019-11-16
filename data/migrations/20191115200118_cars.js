exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("VIN")
      .unique()
      .notNullable();
    tbl.string("MAKE").notNullable();
    tbl.string("MODEL").notNullable();
    tbl.integer("MILEAGE").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
