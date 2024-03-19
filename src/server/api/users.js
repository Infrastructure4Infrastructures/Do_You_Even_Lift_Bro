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

/** Sends all tasks */
router.get("/", async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      where: { userId: res.locals.user.id },
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

/** Creates new task and sends it */
router.post("/:userId/journal", async (req, res, next) => {
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

/** Sends single journal entry by id */
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const journal = await prisma.journal.findUnique({ where: { id } });
    validateJournal(res.locals.user, journal);

    res.json(journal);
  } catch (err) {
    next(err);
  }
});

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
