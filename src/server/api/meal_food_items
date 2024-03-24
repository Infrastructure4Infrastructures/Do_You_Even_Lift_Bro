const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Add food with food data to a meal number entry */
router.post("/meal_food_items/:mealId/:foodId", async (req, res, next) => {
  try {
    const { mealId, foodId } = req.body;

    const meal_food_item = await prisma.meal_Food_Items.create({
      data: {
        mealId,
        foodId,
        user: { connect: { id: res.locals.user.id } },
      },
    });
    res.json(meal_food_item);
  } catch (err) {
    next(err);
  }
});

//delete a food item from a meal number
router.delete("/meal_food_items/:mealid/:foodId", async (req, res, next) => {
  try {
    const id = +req.params.id;

    // const exercises = await prisma.exercises.findUnique({ where: { id } });
    // validateExercise(res.locals.user, exercises);

    await prisma.meal_Food_Items.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
