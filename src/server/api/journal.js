// const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Gets journal entry of user */
router.get("/", async (req, res, next) => {
  try {
    const userId = res.locals.user.id;

    const journals = await prisma.journal.findMany({
      where: { userId: userId },
      include: { Journal_Entry: true },
    });
    res.json(journals);
  } catch (err) {
    next(err);
  }
});

/** Gets journal entry of user */
router.get("/", async (req, res, next) => {
  try {
    const userId = res.locals.user.id;

    const journals = await prisma.journal.findMany({
      where: { userId: userId },
      include: {
        Journal_Entry: {
          select: {
            id: true,
            date: true,
            note: true,
            workouts: true,
            exercises: true,
            meal: true,
            food_item: true,
          },
        },
      },
    });
    res.json(journals);
  } catch (err) {
    next(err);
  }
});

/** Creates new journal for the logged in user */
router.post("/", async (req, res, next) => {
  try {
    const userId = res.locals.user.id;

    const journal = await prisma.journal.create({
      data: {
        user: { connect: { id: +userId } },
      },
    });
    res.json(journal);
  } catch (err) {
    next(err);
  }
});

/** Delete journal */
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    await prisma.journal.delete({
      where: { id },
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
