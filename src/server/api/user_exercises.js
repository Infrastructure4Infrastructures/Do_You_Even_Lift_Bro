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
router.get("/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user_exercises = await prisma.user_Exercises.findMany({
      where: { userId: +userId },
    });

    res.json(user_exercises);
  } catch (err) {
    next(err);
  }
});

/** Gets sets and reps to a users workout*/
router.get("/:userId/:exerciseId", async (req, res, next) => {
  try {
    const { userId, exerciseId } = req.params;

    const user_exercises = await prisma.user_Exercises.findUnique({
      where: { id: +res.locals.user.id, exercisesId: +exerciseId },
    });

    res.json(user_exercises);
  } catch (err) {
    next(err);
  }
});

/** Adds sets and reps to a users workout*/
router.post("/:userId/:exerciseId", async (req, res, next) => {
  try {
    const { exerciseId } = req.params;
    const { mySets, myReps } = req.body;

    const user_exercises = await prisma.user_Exercises.create({
      data: {
        mySets: +mySets,
        myReps: +myReps,
        exercises: { connect: { id: +exerciseId } },
        user: { connect: { id: +res.locals.user.id } },
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
    // const userId = res.locals.user.id;

    const { exerciseId } = req.params;
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
        exercisesId: +exerciseId,
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
router.delete("/:exercisesId", async (req, res, next) => {
  try {
    const exercisesId = +req.params.exercisesId;

    const userExerciseToDelete = await prisma.user_Exercises.findFirst({
      where: {
        exercisesId: exercisesId,
      },
    });
    if (!userExerciseToDelete) {
      return res.status(404).json({ error: "User exercise not found" });
    }

    const deleteUserExercise = await prisma.user_Exercises.delete({
      where: { id: userExerciseToDelete.id },
    });
    res.json(deleteUserExercise);
  } catch (error) {
    next(error);
  }
});
