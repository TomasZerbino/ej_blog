const jwt = require("jsonwebtoken");
const { User, Article } = require("../models");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const { expressjwt: checkJwt } = require("express-jwt");

async function token(req, res) {
  const user = await User.findOne({ where: { email: req.body.email } });
  const storedHash = user.password;
  const checkPassword = await bcrypt.compare(req.body.password, storedHash);

  if (!user) {
    return res.json("credenciales inválidas");
  }

  if (!checkPassword) {
    return res.json("credenciales inválidas");
  }

  const payload = {
    id: user.id,
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  res.json({ token });
}

async function showArticles(req, res) {
  const articles = await Article.findAll();
  res.json({ articles });
}

async function userArticles(req, res) {
  const userArticles = await User.findByPk(req.params.id, { include: Article });
  res.json({ userArticles });
}

async function titleLike(req, res) {
  const articlesMatched = await Article.findAll({
    where: { title: { [Op.like]: `%${req.params.title}%` } },
  });

  res.json({ articlesMatched });
}

async function asd(req, res) {}

module.exports = {
  showArticles,
  token,
  userArticles,
  titleLike,
};

// checkJwt({secret:'', algorithms: ['HS256']})
