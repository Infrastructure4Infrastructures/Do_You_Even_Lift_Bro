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
      select: { id: true, username: true },
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
      select: { id: true, username: true },
    });
    // validateJournal(res.locals.user, users);

    res.json(user);
  } catch (err) {
    next(err);
  }
});

// /** Creates new task and sends it */
// router.post("/:userId/journal", async (req, res, next) => {
//   const userId = +req.params.userId;
//   const exerciseName = req.body.userId;
//   const exerciseSets = req.body.userId;
//   const foodEntry = req.body.userId;
//   const calories = +req.body.userId;
//   const totalCalories = +req.body.userId;

//   try {
//     const { description, done } = req.body;
//     if (!description) {
//       throw new ServerError(400, "Description required.");
//     }

//     const user = await prisma.user.create({
//       data: {
//         date,
//         exerciseName,
//         exerciseSets,
//         foodEntry,
//         calories,
//         totalCalories,
//         userId,
//         done: done ?? false,
//         user: { connect: { id: res.locals.user.id } },
//       },
//     });
//     res.json(user);
//   } catch (err) {
//     next(err);
//   }
// });

// /** Edits single user by id */
// router.patch("/:id", async (req, res, next) => {
//   try {
//     const id = +req.params.id;
//     const { username, password } = req.body;

//     const users = await prisma.user.update({
//       where: { id },
//       data: { username, password },
//     });
//     // validateJournal(res.locals.user, users);

//     res.json(users);
//   } catch (err) {
//     next(err);
//   }
// });

/** Edits single user by id */
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    await prisma.user.delete({ where: { id } });
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

/** Gets single user by id */
router.get("/:id/meal", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const meals = await prisma.meal.findUnique({
      where: { id },
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

/** Sends single journal entry by id */
router.get("/:id/journal", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const journals = await prisma.journal.findUnique({ where: { id } });
    validateJournal(res.locals.user, journals);

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
router.get("/:id/workouts", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const workout = await prisma.workouts.findUnique({ where: { id } });
    validateWorkouts(res.locals.user, workout);

    res.json(workout);
  } catch (err) {
    next(err);
  }
});

// /** Updates single task by id */
// router.put("/:id", async (req, res, next) => {
//   try {
//     const id = +req.params.id;
//     const { description, done } = req.body;

//     const task = await prisma.task.findUnique({ where: { id } });
//     validateTask(res.locals.user, task);

//     const updatedTask = await prisma.task.update({
//       where: { id },
//       data: { description, done },
//     });
//     res.json(updatedTask);
//   } catch (err) {
//     next(err);
//   }
// });

// /** Deletes single task by id */
// router.delete("/:id", async (req, res, next) => {
//   try {
//     const id = +req.params.id;

//     const task = await prisma.task.findUnique({ where: { id } });
//     validateTask(res.locals.user, task);

//     await prisma.task.delete({ where: { id } });
//     res.sendStatus(204);
//   } catch (err) {
//     next(err);
//   }
// });
