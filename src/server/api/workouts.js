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
router.post("/workouts", async (req, res, next) => {
  const beginner = req.body.beginner;
  const intermediate = req.body.intermediate;
  const advanced = req.body.advanced;
  const name = req.body.name;

  try {
    const { name, difficulty } = req.body;
    if (!difficulty) {
      throw new ServerError(400, "Difficulty required.");
    }

    const workout = await prisma.workout.create({
      data: {
        name,
        difficulty,
        //user: { connect: { id: res.locals.user.id } },
      },
    });
    res.json(workout);
  } catch (err) {
    next(err);
  }
});
