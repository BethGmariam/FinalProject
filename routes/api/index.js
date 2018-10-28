const router = require("express").Router();
const itemsRoutes = require("./items");
const usersRoutes = require("./users");


// Item routes
router.use("/items", itemsRoutes);

// User routes
router.use("/users", usersRoutes);


module.exports = router;