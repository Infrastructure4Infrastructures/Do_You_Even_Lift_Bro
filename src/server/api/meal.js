// const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Gets list of all meals*/
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const meals = await prisma.meal.findMany({
      // where: { userId: res.locals.user.id },
      where: { id },
    });

    res.json(meals);
  } catch (err) {
    next(err);
  }
});

/** Add meal entry  */
router.post("/:id", async (req, res, next) => {
  try {
    const userId = +req.params.userId;
    // const id = +req.params.id;
    const mealNum = +req.body.mealNum;

    const meals = await prisma.meal.create({
      where: { id },
      data: {
        mealNum,
        userId,
        //   user: { connect: { id } },
      },
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
      data: { mealNum },
    });
    res.json(meals);
  } catch (err) {
    next(err);
  }
});

/** Deletes meal entry by id */
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    // const exercises = await prisma.exercises.findUnique({ where: { id } });
    // validateExercise(res.locals.user, exercises);

    await prisma.meal.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
