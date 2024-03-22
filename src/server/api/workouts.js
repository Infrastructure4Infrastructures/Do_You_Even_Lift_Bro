const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Gets user workouts by difficulty (beginner)*/
router.get("/workouts/beginner", async (req, res, next) => {
  try {
    const workouts = req.body.beginner;

    const workout = await prisma.workouts.findUnique({ where: { workouts } });
    validateWorkouts(res.locals.workouts, workout);

    res.json(workout);
  } catch (err) {
    next(err);
  }
});

/** Gets a single user, one workout, by difficulty (beginner)*/
router.get("/workouts/beginner/:id", async (req, res, next) => {
  try {
    const workouts = +req.params.id;

    const workout = await prisma.workouts.findUnique({ where: { workouts } });
    validateWorkouts(res.locals.workouts.id, workout);

    res.json(workout);
  } catch (err) {
    next(err);
  }
});

/** Gets user workouts by difficulty (intermediate) */
router.get("/workouts/intermediate", async (req, res, next) => {
  try {
    const workouts = req.body.intermediate;

    const workout = await prisma.workouts.findUnique({ where: { workouts } });
    validateWorkouts(res.locals.workouts, workout);

    res.json(workout);
  } catch (err) {
    next(err);
  }
});

/** Gets a single user, one workout, by difficulty (intermediate)*/
router.get("/workouts/intermediate/:id", async (req, res, next) => {
  try {
    const workouts = +req.params.id;

    const workout = await prisma.workouts.findUnique({ where: { workouts } });
    validateWorkouts(res.locals.workouts.id, workout);

    res.json(workout);
  } catch (err) {
    next(err);
  }
});

/** Gets user workouts by difficulty (advanced) */
router.get("/workouts/advanced", async (req, res, next) => {
  try {
    const workouts = req.body.advanced;

    const workout = await prisma.workouts.findUnique({ where: { workouts } });
    validateWorkouts(res.locals.workouts, workout);

    res.json(workout);
  } catch (err) {
    next(err);
  }
});

/** Gets a single user, one workout, by difficulty (advanced)*/
router.get("/workouts/advanced/:id", async (req, res, next) => {
  try {
    const workouts = +req.params.id;

    const workout = await prisma.workouts.findUnique({ where: { workouts } });
    validateWorkouts(res.locals.workouts.id, workout);

    res.json(workout);
  } catch (err) {
    next(err);
  }
});
/** Creates new workout and sends it */
router.post("/:userId/journal_entry", async (req, res, next) => {
  const userId = +req.params.userId;
  const exerciseName = req.body.userId;
  const exerciseSets = req.body.userId;
  const foodEntry = req.body.userId;
  const calories = +req.body.userId;
  const totalCalories = +req.body.userId;

  try {
    const { description, done } = req.body;
    if (!description) {
      throw new ServerError(400, "Description required.");
    }

    const user = await prisma.user.create({
      data: {
        date,
        exerciseName,
        exerciseSets,
        foodEntry,
        calories,
        totalCalories,
        userId,
        done: done ?? false,
        user: { connect: { id: res.locals.user.id } },
      },
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});
