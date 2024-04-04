// const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Gets list of all food items*/
router.get("/", async (req, res, next) => {
  try {
    const food_items = await prisma.food_Item.findMany({});

    res.json(food_items);
  } catch (err) {
    next(err);
  }
});

/** Edit food_item by id */
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const food_items = await prisma.food_Item.findUnique({
      where: { id },
    });
    res.json(food_items);
  } catch (err) {
    next(err);
  }
});

/** Add food_item */
router.post("/", async (req, res, next) => {
  try {
    // Possible only create a food item related to a meal...
    const { name, description, calories } = req.body;

    const food_items = await prisma.food_Item.create({
      data: {
        name,
        description,
        calories: +calories,
        // user: { connect: { id: res.locals.user.id } },
      },
    });
    res.json(food_items);
  } catch (err) {
    next(err);
  }
});

/** Edit food_item entry by id */
router.patch("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { name, description, calories } = req.body;

    //const food_item = await prisma.food_item.findUnique({ where: { id } });
    // validateExercise(res.locals.user, exercises);

    const food_items = await prisma.food_Item.update({
      where: { id },
      data: { name, description, calories: +calories },
    });
    res.json(food_items);
  } catch (err) {
    next(err);
  }
});

/** Deletes food_item by id */
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params.id;
    // const { name, description, calories } = req.body;
    const food_item = await prisma.food_Item.findUnique({
      where: { id },
    });

    if (!food_item) {
      return res.status(404);
    }
    // validateExercise(res.locals.user, exercises);

    await prisma.food_Item.delete({ where: { id: +id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
