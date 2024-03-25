// const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Adds sets and reps to a workout*/
router.post("/:workoutId/:exerciseId", async (req, res, next) => {
  try {
    const { workoutId, exerciseId } = req.params;
    // console.log(req.params);
    const workout_exercise = await prisma.workout_Exercises.create({
      data: {
        workoutsId: +workoutId,
        exercisesId: +exerciseId,
      },
    });
    res.json(workout_exercise);
  } catch (err) {
    next(err);
  }
});

//////////// POSSIBLY COMING BACK, NEED TO RESEARCH //////////////////////
// /** Edit sets and reps in a workout */
// router.patch("/:workoutId/:exerciseId", async (req, res, next) => {
//   try {
//     // const id = +req.params.id;
//     const { workoutId, exerciseId } = req.params;

//     const updated_workout_exercise = await prisma.workout_Exercises.update({
//       where: {
//         workoutsId: +workoutId,
//         AND: { exercisesId: +exerciseId },
//       },
//       data: { setsGoals: 2, repsGoals: 12, mySets: 3, myReps: 30 },
//     });
//     res.json(updated_workout_exercise);
//   } catch (err) {
//     next(err);
//   }
// });

//////////////////////////////////////////////////////////////////////////////

//////////// DOUBLE CHECK DELETE THAT IT RETURNS THE NON-DELETED ITEMS ////////////////////////////////

/** Deletes journal_entry by id */
router.delete("/:workoutId/:exerciseId", async (req, res, next) => {
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
});
