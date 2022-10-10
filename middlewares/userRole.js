function userRole(minRole) {
  return (req, res, next) => {
    if (req.user.role.code >= minRole) {
      next();
    } else {
      res.redirect("/");
    }
  };
}

module.exports = userRole;
