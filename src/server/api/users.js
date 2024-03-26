const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** User must be logged in to access tasks. */
router.use((req, res, next) => {
  if (!res.locals.user) {
    return next(new ServerError(401, "You must be logged in."));
  }
  next();
});

/** Sends all users */
router.get("/", async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, username: true }
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

/** Gets single user by id */
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const user = await prisma.user.findUnique({
      where: { id },
      select: { id: true, username: true }
      // Include other data you may want to send back
    });
    // validateJournal(res.locals.user, users);

    res.json(user);
  } catch (err) {
    next(err);
  }
});

/** Edits single user by id */
// This would be if you forgot your password
router.patch("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { username, password } = req.body;

    // Check to see if a user with that username exists...

    const users = await prisma.user.update({
      where: { id },
      data: { username, password }
    });
    // validateJournal(res.locals.user, users);

    res.json(users);
  } catch (err) {
    next(err);
  }
});

/** Deletes single user by id */
// Check if the user is admin, or the user who is deleting the account is the logged in user
router.delete("/:id", async (req, res, next) => {
  try {
    const userId = +req.params.id;

    await prisma.user.delete({ where: { id: userId } });
    // validateJournal(res.locals.user, users);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

/** Checks if meal exists and belongs to given user */
const validateMeal = (user, meal) => {
  if (!meal) {
    throw new ServerError(404, "Meal entry not found.");
  }

  if (meal.userId !== user.id) {
    throw new ServerError(403, "This meal does not belong to you.");
  }
};

/** Gets All Meals for a specific user */
router.get("/:userId/meal", async (req, res, next) => {
  try {
    const userId = +req.params.userId;

    const meals = await prisma.meal.findMany({
      where: { userId }
    });
    // validateJournal(res.locals.user, users);

    res.json(meals);
  } catch (err) {
    next(err);
  }
});

/** Checks if journal exists and belongs to given user */
const validateJournal = (user, journal) => {
  if (!journal) {
    throw new ServerError(404, "Journal not found.");
  }

  if (journal.userId !== user.id) {
    throw new ServerError(403, "This journal does not belong to you.");
  }
};

/** Get the user's journal */
// Use the table relations to join data you may need (journal entries)
router.get("/:userId/journal", async (req, res, next) => {
  try {
    const userId = +req.params.userId;
    // The userId could potentially come from the req.locals....

    const journals = await prisma.journal.findUnique({
      where: { id: userId },
      include: {
        Journal_Entry: true
      }
    });
    // validateJournal(res.locals.user, journals);

    res.json(journals);
  } catch (err) {
    next(err);
  }
});

/** Checks if workouts exists and belongs to given user */
const validateWorkouts = (user, workouts) => {
  if (!workouts) {
    throw new ServerError(404, "Workout not found.");
  }

  if (workouts.userId !== user.id) {
    throw new ServerError(403, "This workout does not belong to you.");
  }
};

/** Sends single workout entry by id */
// include exercises with the workouts
router.get("/:userId/workouts", async (req, res, next) => {
  try {
    const id = +req.params.userId;

    const workout = await prisma.workouts.findUnique({
      where: { id },
      include: {
        Workout_Exercises: {
          include: {
            exercises: true
          }
        }
      }
    });
    // validateWorkouts(res.locals.user, workout);

    res.json(workout);
  } catch (err) {
    next(err);
  }
});
