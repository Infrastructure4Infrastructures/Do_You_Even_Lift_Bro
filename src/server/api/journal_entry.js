const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Gets list of all exercises*/
router.get("/", async (req, res, next) => {
  try {
    const journalEntry = await prisma.journal_Entry.findMany({
      // where: { userId: res.locals.user.id },
    });

    res.json(journalEntry);
  } catch (err) {
    next(err);
  }
});

/** Adds a note to the journal entry*/
router.post("/:id", async (req, res, next) => {
  try {
    const { note } = req.body;
    if (!note) {
      throw new ServerError(400, "Note required.");
    }

    const journal_entry = await prisma.journal_Entry.create({
      data: {
        note,
        user: { connect: { id: res.locals.user.id } },
      },
    });
    res.json(journal_entry);
  } catch (err) {
    next(err);
  }
});

/** Edit Journal Entry, specifically, note  */
router.patch("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    // ?????? date ????? string or dateTime
    const { date, note, workoutsId, exercisesId, mealId, food_ItemId } =
      req.body;

    //const journal_entry = await prisma.journal_entry.findUnique({ where: { id } });
    // validateExercise(res.locals.user, exercises);

    const updated_journal_entry = await prisma.journal_Entry.update({
      where: { id },
      // ?????? date ????? string or dateTime
      data: { date, note, workoutsId, exercisesId, mealId, food_ItemId },
    });
    res.json(updated_journal_entry);
  } catch (err) {
    next(err);
  }
});

/** Deletes journal_entry by id */
router.delete("/journal_entry/:journal_entryId", async (req, res, next) => {
  try {
    const id = +req.params.id;

    // const exercises = await prisma.exercises.findUnique({ where: { id } });
    // validateExercise(res.locals.user, exercises);

    await prisma.journal_Entry.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
