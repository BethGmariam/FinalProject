const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

router.route("/login")
    .post(usersController.loginFn);

router.route("/registration")
    .post(usersController.create);

router.route("/logout")
    .post(usersController.logout);


// Matches with "/api/users/:id"
router.route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
