const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Add food_item to meal */
router.post("/:mealId/:food_ItemId", async (req, res, next) => {
  try {
    const { mealId, food_ItemId } = req.params;

    const meal_food_item = await prisma.meal_Food_Items.create({
      data: {
        meal: { connect: { id: +mealId } },
        food_item: { connect: { id: +food_ItemId } }
      }
    });
    res.json(meal_food_item);
  } catch (err) {
    next(err);
  }
});

//delete a food item from a meal number
router.delete("/:mealId/:food_ItemId", async (req, res, next) => {
  try {
    // const id = +req.params.id;
    const { mealId, food_ItemId } = req.params;
    // const exercises = await prisma.exercises.findUnique({ where: { id } });
    // validateExercise(res.locals.user, exercises);

    const meal_food_items = await prisma.meal_Food_Items.findFirst({
      where: {
        mealId: +mealId,
        AND: { food_ItemId: +food_ItemId }
      }
    });

    await prisma.meal_Food_Items.delete({ where: { id: meal_food_items.id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
