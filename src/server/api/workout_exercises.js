// const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Adds sets and reps to a workout*/
router.post("/:workoutId/:exerciseId", async (req, res, next) => {
  try {
    const { workoutId, exerciseId } = req.params;

    const workout_exercise = await prisma.workout_Exercises.create({
      data: {
        setsGoals: 3,
        repsGoals: 3,
        mySets: 1,
        myReps: 3,
        workoutsId: +workoutId,
        exercisesId: +exerciseId,
      },
    });

    res.json(workout_exercise);
  } catch (err) {
    next(err);
  }
});

/** Edit sets and reps in a workout */
router.patch("/:workoutId/:exerciseId", async (req, res, next) => {
  try {
    // const id = +req.params.id;
    const { workoutId, exerciseId } = req.params;
    const workout_exercise = await prisma.workout_Exercises.findFirst({
      where: {
        workoutsId: +workoutId,
        AND: { exercisesId: +exerciseId },
      },
    });
    const updated_workout_exercise = await prisma.workout_Exercises.update({
      where: { id: workout_exercise.id },
      data: { setsGoals: 5, repsGoals: 12, mySets: 3, myReps: 30 },
    });
    res.json(updated_workout_exercise);
  } catch (err) {
    next(err);
  }
});

/** Deletes journal_entry by id */
router.delete("/:workoutId/:exerciseId", async (req, res, next) => {
  try {
    // const id = +req.params.id;
    const { workoutId, exerciseId } = req.params;
    // const exercises = await prisma.exercises.findUnique({ where: { id } });
    // validateExercise(res.locals.user, exercises);
    const workout_exercise = await prisma.workout_Exercises.findFirst({
      where: {
        workoutsId: +workoutId,
        AND: { exercisesId: +exerciseId },
      },
    });
    const deleted_workout_exercises = await prisma.workout_Exercises.delete({
      where: { id: workout_exercise.id },
      // data: { setsGoals, repsGoals, mySets, myReps },
    });
    res.json(deleted_workout_exercises);
  } catch (err) {
    next(err);
  }
});
