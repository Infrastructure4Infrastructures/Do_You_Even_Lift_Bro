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

/** Gets list of all users */
router.get("/users", async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      where: { userId: res.locals.user.id },
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

/** Gets single user by id */
router.get("/users/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const users = await prisma.user.findUnique({ where: { id } });
    validateUser(res.locals.user, users);

    res.json(users);
  } catch (err) {
    next(err);
  }
});

/** Edit single user by id */
router.patch("/users/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { username, password } = req.body;

    const users = await prisma.user.findUnique({ where: { id } });
    validateUser(res.locals.user, users);

    const updatedUser = await prisma.user.update({
      where: { id },
      data: { username, password },
    });
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});

/** Deletes single user by id */
router.delete("/users/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const users = await prisma.user.findUnique({ where: { id } });
    validateUser(res.locals.user, users);

    await prisma.user.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

/** Gets user meals by id */
router.get("/users/:id/meals", async (req, res, next) => {
  try {
    const id = +req.params.users.id;

    const meals = await prisma.meal.findUnique({ where: { id } });
    validateMeal(res.locals.user, meals);

    res.json(meals);
  } catch (err) {
    next(err);
  }
});

/** Gets user journal by id */
router.get("/users/:id/journal", async (req, res, next) => {
  try {
    const id = +req.params.users.id;

    const journal = await prisma.journal.findUnique({ where: { id } });
    validateJournal(res.locals.user, journal);

    res.json(journal);
  } catch (err) {
    next(err);
  }
});

/** Gets user workouts by id */
router.get("/users/:id/workouts", async (req, res, next) => {
  try {
    const id = +req.params.users.id;

    const workouts = await prisma.workouts.findUnique({ where: { id } });
    validateWorkouts(res.locals.user, workouts);

    res.json(workouts);
  } catch (err) {
    next(err);
  }
});

/** Creates new task and sends it */
router.post("/:userId/journal_entry", async (req, res, next) => {
  const userId = +req.params.userId;
  const exerciseName = req.body.userId;
  const exerciseSets = req.body.userId;
  const foodEntry = req.body.userId;
  const calories = +req.body.userId;
  const totalCalories = +req.body.userId;

  try {
    const { description, done } = req.body;
    if (!description) {
      throw new ServerError(400, "Description required.");
    }

    const user = await prisma.user.create({
      data: {
        date,
        exerciseName,
        exerciseSets,
        foodEntry,
        calories,
        totalCalories,
        userId,
        done: done ?? false,
        user: { connect: { id: res.locals.user.id } },
      },
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

/** Checks if task exists and belongs to given user */
const validateJournal = (user, journal) => {
  if (!journal) {
    throw new ServerError(404, "Journal entry not found.");
  }

  if (journal.userId !== user.id) {
    throw new ServerError(403, "This journal does not belong to you.");
  }
};

/** Updates single task by id */
router.put("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { description, done } = req.body;

    const task = await prisma.task.findUnique({ where: { id } });
    validateTask(res.locals.user, task);

    const updatedTask = await prisma.task.update({
      where: { id },
      data: { description, done },
    });
    res.json(updatedTask);
  } catch (err) {
    next(err);
  }
});

/** Deletes single task by id */
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const task = await prisma.task.findUnique({ where: { id } });
    validateTask(res.locals.user, task);

    await prisma.task.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
