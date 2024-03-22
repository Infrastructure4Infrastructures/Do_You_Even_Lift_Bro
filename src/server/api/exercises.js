const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Gets list of all exercises*/
router.get("/exercises", async (req, res, next) => {
  try {
    const exercises = req.body.exercise;

    const exercise = await prisma.exercises.findUnique({ where: { exercises } });
    validateWorkouts(res.locals.exercises, exercise);

    res.json(exercise);
  } catch (err) {
    next(err);
  }
});

/** Adds a exercises*/
router.post("/exercise", async (req, res, next) => {
    const exercises = req.body.exercises;
    const name = req.body.name;
    const description = req.body.description;
    const category = req.body.category;
  
    try {
      const { name, description} = req.body;
      if (!name) {
        throw new ServerError(400, "Name required.");
      }
  
      const exercise = await prisma.exercise.create({
        data: {
          name,
          difficulty,
          category,
          //user: { connect: { id: res.locals.user.id } },
        },
      });
      res.json(workout);
    } catch (err) {
      next(err);
    }
  });

  /** Gets single exercises by id */
router.get("/exercises/:id", async (req, res, next) => {
    try {
      const id = +req.params.id;
  
      const exercises = await prisma.exercise.findUnique({ where: { id } });
      validateExcerise(res.locals.exercise, exercises);
  
      res.json(exercises);
    } catch (err) {
      next(err);
    }
  });

  /** Edit exercise  */
router.patch("/exercises/:id", async (req, res, next) => {
    try {
      const id = +req.params.id;
      const { exercise. id } = req.body;
  
      const exercises = await prisma.exercise.findUnique({ where: { id } });
      validateExercise(res.locals.exercise, exercises);
  
      const updatedExercises = await prisma.exercises.update({
        where: { id },
        data: { exercise, id },
      });
      res.json(updatedExercises);
    } catch (err) {
      next(err);
    }
  });
  
  /** Deletes exercises user by id */
router.delete("/exercises/:id", async (req, res, next) => {
    try {
      const id = +req.params.id;
  
      const exercises = await prisma.exercise.findUnique({ where: { id } });
      validateExercise(res.locals.exercise, exercise);
  
      await prisma.exercise.delete({ where: { id } });
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  });