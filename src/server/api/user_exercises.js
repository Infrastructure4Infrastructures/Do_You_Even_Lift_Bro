const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Gets sets and reps to a users workout*/
router.get("/", async (req, res, next) => {
  try {
    const user_exercises = await prisma.user_Exercises.findMany({});

    res.json(user_exercises);
  } catch (err) {
    next(err);
  }
});

/** Gets sets and reps to a users workout*/
router.get("/:userId/:exerciseId", async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user_exercises = await prisma.user_Exercises.findUnique({
      where: { id: +userId },
    });

    res.json(user_exercises);
  } catch (err) {
    next(err);
  }
});

/** Adds sets and reps to a users workout*/
router.post("/:userId/:exerciseId", async (req, res, next) => {
  try {
    const { userId, exerciseId } = req.params;
    const { mySets, myReps } = req.body;

    const user_exercises = await prisma.user_Exercises.create({
      //   where: { id: +userId },
      data: {
        mySets: +mySets,
        myReps: +myReps,
        userId: +userId,
        exercisesId: +exerciseId,
        // user: { connect: { id: res.locals.user.id } },
        // exercises: {
        //   create: {
        //     mySets: +mySets,
        //     myReps: +myReps,
        //   },
        // },
      },
    });

    res.json(user_exercises);
  } catch (err) {
    next(err);
  }
});

/** Edit sets and reps in a users workout */
router.patch("/:userId/:exerciseId", async (req, res, next) => {
  try {
    const { userId, exerciseId } = req.params;
    const { mySets, myReps } = req.body;
    // if any values coming in from the body are null, we do NOT
    // want to send those values to the DB
    const dataToSendToDB = {};
    if (mySets) {
      dataToSendToDB.mySets = +mySets;
    }
    if (myReps) {
      dataToSendToDB.myReps = +myReps;
    }
    // Keep writing if statements for each property coming in through the BODY

    const user_exercises = await prisma.user_Exercises.findFirst({
      where: {
        userId: +userId,
        AND: { exercisesId: +exerciseId },
      },
    });
    const updated_user_exercises = await prisma.user_Exercises.update({
      where: { id: user_exercises.id },
      data: dataToSendToDB,
    });
    res.json(updated_user_exercises);
  } catch (err) {
    next(err);
  }
});

/** Deletes an exercise from a users workout*/
router.delete("/:userId/:exerciseId", async (req, res, next) => {
  try {
    // const id = +req.params.id;
    const { userId, exerciseId } = req.params;
    // const exercises = await prisma.exercises.findUnique({ where: { id } });
    // validateExercise(res.locals.user, exercises);
    const user_exercises = await prisma.user_Exercises.findFirst({
      where: {
        userId: +userId,
        AND: { exercisesId: +exerciseId },
      },
    });
    const deleted_user_exercises = await prisma.user_Exercises.delete({
      where: { id: user_exercises.id },
      // data: { setsGoals, repsGoals, mySets, myReps },
    });
    res.json(deleted_user_exercises);
  } catch (err) {
    next(err);
  }
});
