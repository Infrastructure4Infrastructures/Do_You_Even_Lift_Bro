// const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Gets list of all meals*/
router.get("/", async (req, res, next) => {
  try {
    const meals = await prisma.meal.findMany({
      include: { Meal_Food_Items: { include: { food_item: true } } },
    });

    res.json(meals);
  } catch (err) {
    next(err);
  }
});

/** Gets list of a single meal*/
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const meals = await prisma.meal.findUnique({
      // where: { userId: res.locals.user.id },
      where: { id },
      include: { Meal_Food_Items: { include: { food_item: true } } },
    });

    res.json(meals);
  } catch (err) {
    next(err);
  }
});

/** Edit meal entry by id */
router.patch("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { mealNum } = req.body;

    //const journal_entry = await prisma.journal_entry.findUnique({ where: { id } });
    // validateExercise(res.locals.user, exercises);

    const meals = await prisma.meal.update({
      where: { id },
      data: { mealNum: +mealNum },
    });
    res.json(meals);
  } catch (err) {
    next(err);
  }
});

/** Add meal entry  */
router.post("/:mealId", async (req, res, next) => {
  try {
    const { mealId } = req.params;
    const { mealNum } = req.body;

    const meal = await prisma.meal.create({
      data: {
        mealNum: +mealNum,
        user: { connect: { id: +mealId } },
      },
    });
    res.json(meal);
  } catch (err) {
    next(err);
  }
});

/** Deletes meal entry by id */
router.delete("/:mealId/:userId", async (req, res, next) => {
  try {
    const { mealId } = req.params;

    const meal = await prisma.meal.findFirst({
      where: { userId: +mealId },
    });

    const deleted_meal = await prisma.meal.delete({ where: { id: meal.id } });
    res.json(deleted_meal);
  } catch (err) {
    next(err);
  }
});
