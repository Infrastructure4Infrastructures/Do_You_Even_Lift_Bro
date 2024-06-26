const { ServerError } = require("../errors");
const prisma = require("../prisma");
const jwt = require("./auth/jwt");

const router = require("express").Router();
module.exports = router;

// Attaches user to res.locals if token is valid
router.use(async (req, res, next) => {
  // Check for token
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1]; // "Bearer <token>"
  if (!authHeader || !token) {
    return next();
  }

  // Get user from token
  try {
    const { id } = jwt.verify(token);
    const user = await prisma.user.findUniqueOrThrow({ where: { id } });
    res.locals.user = user;
    next();
  } catch (err) {
    console.error(err);
    next(new ServerError(401, "Invalid token."));
  }
});

router.use("/auth", require("./auth"));
router.use("/users", require("./users"));
router.use("/workouts", require("./workouts"));
router.use("/exercises", require("./exercises"));
router.use("/workout_exercises", require("./workout_exercises"));
router.use("/meal", require("./meal"));
router.use("/food_item", require("./food_item"));
router.use("/meal_food_items", require("./meal_food_items"));
router.use("/journal", require("./journal"));
router.use("/journal_entry", require("./journal_entry"));
router.use("/user_exercises", require("./user_exercises"));
