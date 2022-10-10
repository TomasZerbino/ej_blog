const { Role } = require("../models");

module.exports = async () => {
  const rols = [];

  rols.push(
    { name: "reader", code: 10 },
    { name: "writer", code: 20 },
    { name: "editor", code: 30 },
    { name: "admin", code: 40 },
  );

  await Role.bulkCreate(rols);
  console.log("[Database] Se corrió el seeder de Rols.");
};
