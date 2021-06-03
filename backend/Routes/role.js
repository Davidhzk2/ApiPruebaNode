const express = require("express");
const router = express.Router();

const Role = require("../models/role");
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");
const Admin = require("../middleware/admin");

router.post("/registerRole",Auth, UserAuth, Admin, async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(401).send("Process Failed: Imcomplete Data.");

  const roleExists = await Role.findOne({ name: req.body.name });
  if (roleExists)
    return res.status(401).send("Process Failed: Role already exists!");

  const role = new Role({
    name: req.body.name,
    description: req.body.description,
    status: true,
  });

  const result = await role.save();
  if (!result) return res.status(401).send("Failed to register Role");
  return res.status(200).send({ result });
});

router.get("/listRole", UserAuth, Admin, async (req, res) => {
  const role = await Role.find();
  if (!role) return res.status(401).send("No roles");
  return res.status(200).send({ role });
});

module.exports = router;
