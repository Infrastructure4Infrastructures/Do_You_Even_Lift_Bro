// const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Gets list of all food items*/
router.get("/food_item", async (req, res, next) => {
  try {
    const food_items = await prisma.food_Item.findMany({
      where: { userId: res.locals.user.id },
    });

    res.json(food_items);
  } catch (err) {
    next(err);
  }
});

/** Edit food_item entry by id */
router.get("/food_item/:id", async (req, res, next) => {
    try {
      const id = +req.params.id;
      const { name, description, calories } = req.body;
  
      //const food_item = await prisma.food_item.findUnique({ where: { id } });
      // validateExercise(res.locals.user, exercises);
  
      const food_items = await prisma.food_Item.findUnique({
        where: { id },
        data: { name, description, calories },
      });
      res.json(food_items);
    } catch (err) {
      next(err);
    }
  });

/** Add food_item entry  */
router.post("/food_item", async (req, res, next) => {
  try {
    const { name, description, calories } = req.body;

    const food_items = await prisma.food_Item.create({
      data: {
        name, description, calories,
        user: { connect: { id: res.locals.user.id } },
      },
    });
    res.json(food_items);
  } catch (err) {
    next(err);
  }
});

/** Edit food_item entry by id */
router.patch("/food_item/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { name, description, calories } = req.body;

    //const food_item = await prisma.food_item.findUnique({ where: { id } });
    // validateExercise(res.locals.user, exercises);

    const food_items = await prisma.food_Item.update({
      where: { id },
      data: { name, description, calories },
    });
    res.json(food_items);
  } catch (err) {
    next(err);
  }
});

/** Deletes food_item entry by id */
router.delete("/food_item/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    // const exercises = await prisma.exercises.findUnique({ where: { id } });
    // validateExercise(res.locals.user, exercises);

    await prisma.food_Item.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
