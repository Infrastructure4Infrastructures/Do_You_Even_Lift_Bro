const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Gets list of all exercises*/
router.get("/", async (req, res, next) => {
  try {
    const exercise = await prisma.exercises.findMany({
      // where: { userId: res.locals.user.id },
    });

    res.json(exercise);
  } catch (err) {
    next(err);
  }
});

/** Gets single exercises by id */
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const exercises = await prisma.exercises.findUnique({ where: { id } });
    // validateExcerise(res.locals.exercise, exercises);

    res.json(exercises);
  } catch (err) {
    next(err);
  }
});

/** Edit exercise  */
router.patch("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const { name, description, category } = req.body;

    // const exercises = await prisma.exercises.findUnique({ where: { id } });
    // validateExercise(res.locals.user, exercises);

    const updatedExercises = await prisma.exercises.update({
      where: { id },
      data: { name, description, category }
    });
    res.json(updatedExercises);
  } catch (err) {
    next(err);
  }
});

/** Adds a exercises*/
router.post("/", async (req, res, next) => {
  try {
    const { name, description, category } = req.body;
    if (!name) {
      throw new ServerError(400, "Name required.");
    }

    const exercise = await prisma.exercises.create({
      data: {
        name,
        description,
        category,
        user: { connect: { id: res.locals.user.id } }
      }
    });
    res.json(exercise);
  } catch (err) {
    next(err);
  }
});

// /** Checks if task exists and belongs to given user */
// const validateExercise = (user, exercise) => {
//   if (!exercise) {
//     throw new ServerError(404, "Exercise not found.");
//   }

//   if (exercise.userId !== prisma.exercises.id) {
//     throw new ServerError(403, "This exercise does not belong to you.");
//   }
// };

/** Deletes exercise by id */
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    await prisma.exercises.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
