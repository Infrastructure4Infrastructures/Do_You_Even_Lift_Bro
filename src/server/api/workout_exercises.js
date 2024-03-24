// const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Gets sets and reps for a workout exercise */
router.get(
  "/workout_exercises/:workoutId/:exerciseId",
  async (req, res, next) => {
    try {
      const workout_exercises = await prisma.workout_Exercises.findMany({
        where: { userId: res.locals.user.id },
      });

      res.json(workout_exercises);
    } catch (err) {
      next(err);
    }
  }
);

/** Adds sets and reps to a workout*/
router.post(
  "/workout_exercises/:workoutId/:exerciseId",
  async (req, res, next) => {
    try {
      const { mySets, myReps } = req.body;
      //   if (!note) {
      //     throw new ServerError(400, "Note required.");
      //   }

      const workout_exercise = await prisma.workout_Exercises.create({
        data: {
          mySets,
          myReps,
          user: { connect: { id: res.locals.user.id } },
        },
      });
      res.json(workout_exercise);
    } catch (err) {
      next(err);
    }
  }
);

/** Edit sets and reps in a workout */
router.patch(
  "/workout_exercises/:workoutId/:exerciseId",
  async (req, res, next) => {
    try {
      const id = +req.params.id;
      const { setsGoals, repsGoals, mySets, myReps } = req.body;

      //const journal_entry = await prisma.journal_entry.findUnique({ where: { id } });
      // validateExercise(res.locals.user, exercises);

      const updated_workout_exercise = await prisma.workout_Exercises.update({
        where: { id },
        data: { setsGoals, repsGoals, mySets, myReps },
      });
      res.json(updated_workout_exercise);
    } catch (err) {
      next(err);
    }
  }
);

//////////// DOUBLE CHECK DELETE THAT IT RETURNS THE NON-DELETED ITEMS ////////////////////////////////

/** Deletes journal_entry by id */
router.delete(
  "/workout_exercises/:workoutId/:exerciseId",
  async (req, res, next) => {
    try {
      const id = +req.params.id;

      // const exercises = await prisma.exercises.findUnique({ where: { id } });
      // validateExercise(res.locals.user, exercises);

      const delete_workout_exercise = await prisma.workout_Exercises.delete({
        where: { id },
        data: { setsGoals, repsGoals, mySets, myReps },
      });
      res.json(delete_workout_exercise);
    } catch (err) {
      next(err);
    }
  }
);
