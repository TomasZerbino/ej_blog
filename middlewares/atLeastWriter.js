function atLeastWriter(req, res, next) {
  if (req.user.role.code >= 20) {
    next();
  } else {
    res.redirect("/");
  }
}

module.exports = atLeastWriter;
