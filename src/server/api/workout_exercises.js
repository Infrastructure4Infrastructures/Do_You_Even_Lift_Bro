// const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Adds sets and reps to a workout*/
router.post("/:workoutId/:exerciseId", async (req, res, next) => {
  try {
    const { workoutId, exerciseId } = req.params;
    const { setsGoals, repsGoals, mySets, myReps } = req.body;

    const workout_exercise = await prisma.workout_Exercises.create({
      data: {
        setsGoals: +setsGoals,
        repsGoals: +repsGoals,
        mySets: +mySets,
        myReps: +myReps,
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
    const { workoutId, exerciseId } = req.params;
    const { setsGoals, repsGoals, mySets, myReps } = req.body;
    // if any values coming in from the body are null, we do NOT
    // want to send those values to the DB
    const dataToSendToDB = {};
    if (setsGoals) {
      dataToSendToDB.setsGoals = +setsGoals;
    }
    if (repsGoals) {
      dataToSendToDB.repsGoals = +repsGoals;
    }
    if (mySets) {
      dataToSendToDB.mySets = +mySets;
    }
    if (myReps) {
      dataToSendToDB.myReps = +myReps;
    }
    // Keep writing if statements for each property coming in through the BODY

    const workout_exercise = await prisma.workout_Exercises.findFirst({
      where: {
        workoutsId: +workoutId,
        AND: { exercisesId: +exerciseId },
      },
    });
    const updated_workout_exercise = await prisma.workout_Exercises.update({
      where: { id: workout_exercise.id },
      data: dataToSendToDB,
    });
    res.json(updated_workout_exercise);
  } catch (err) {
    next(err);
  }
});

/** Deletes and exercise from a workout*/
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
