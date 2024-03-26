const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Add food with food data to a meal number entry */
router.post("/:mealId/:food_ItemId", async (req, res, next) => {
  try {
    const { mealId, food_ItemId } = req.params;

    const meal_food_item = await prisma.meal_Food_Items.create({
      data: {
        mealId: +mealId,
        food_ItemId: +food_ItemId,
      },
    });
    res.json(meal_food_item);
  } catch (err) {
    next(err);
  }
});

//delete a food item from a meal number
router.delete("/:mealid/:foodId", async (req, res, next) => {
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
