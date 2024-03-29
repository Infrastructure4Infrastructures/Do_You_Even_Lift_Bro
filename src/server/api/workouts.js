const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Checks if workout exists and belongs to given user */
const validateWorkouts = (user, workout) => {
  if (!workout) {
    throw new ServerError(404, "Workout not found.");
  }

  if (workout.userId !== user.id) {
    throw new ServerError(403, "This workout does not belong to you.");
  }
};

/** Gets all workouts*/
router.get("/", async (req, res, next) => {
  try {
    const workouts = await prisma.workouts.findMany({
      include: { Workout_Exercises: { include: { exercises: true } } },
    });

    res.json(workouts);
  } catch (err) {
    next(err);
  }
});

/** Gets user workouts by difficulty (beginner)*/
router.get("/beginner", async (req, res, next) => {
  try {
    const workout = await prisma.workouts.findMany({
      where: { difficulty: "beginner" },
      include: { Workout_Exercises: { include: { exercises: true } } },
    });

    res.json(workout);
  } catch (err) {
    next(err);
  }
});

/** Gets user workouts by difficulty (intermediate)*/
router.get("/intermediate", async (req, res, next) => {
  try {
    const workouts = await prisma.workouts.findMany({
      where: { difficulty: "intermediate" },
      include: { Workout_Exercises: { include: { exercises: true } } },
    });

    res.json(workouts);
  } catch (err) {
    next(err);
  }
});

/** Gets user workouts by difficulty (advanced)*/
router.get("/advanced", async (req, res, next) => {
  try {
    const workouts = await prisma.workouts.findMany({
      where: { difficulty: "advanced" },
      include: { Workout_Exercises: { include: { exercises: true } } },
    });

    res.json(workouts);
  } catch (err) {
    next(err);
  }
});

/** Gets a single workout*/
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const workout = await prisma.workouts.findUnique({
      where: { id },
      include: { Workout_Exercises: { include: { exercises: true } } },
    });

    res.json(workout);
  } catch (err) {
    next(err);
  }
});

/** Edit workout by wokroutID  */
router.patch("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { name, description, category } = req.body;

    // const exercises = await prisma.exercises.findUnique({ where: { id } });
    // validateExercise(res.locals.exercise, exercises);

    const updatedExercise = await prisma.exercises.update({
      where: { id },
      data: { name, description, category },
    });

    res.json(updatedExercise);
  } catch (err) {
    next(err);
  }
});

/** Creates new workout and sends it */
router.post("/", async (req, res, next) => {
  try {
    const { name, difficulty } = req.body;

    const workout = await prisma.workouts.create({
      data: {
        name,
        difficulty,
        user: { connect: { id: res.locals.user.id } },
      },
    });
    res.json(workout);
  } catch (err) {
    next(err);
  }
});

/** Deletes exercises user by id */
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    await prisma.workouts.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
