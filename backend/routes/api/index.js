const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const currentUserRouter = require("./current-user.js");
const reviewRouter = require("./reviews.js");
const spotsRouter = require("./spots.js");

const { restoreUser } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
// If current user session is valid, set req.user to the user in the database
// If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use("/session", sessionRouter);
router.use("/user", currentUserRouter);
router.use("/reviews", reviewRouter);
router.use("/users", usersRouter);
router.use("/spots", spotsRouter);

module.exports = router;
