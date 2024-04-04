const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

// Gets entries of a single journal by journalID
router.get("/", async (req, res, next) => {
  try {
    const userId = res.locals.user.id;

    const userJournals = await prisma.journal_Entry.findMany({
      where: {
        journal: {
          userId: userId,
        },
      },
      include: {
        journal: true,
        food_item,
      },
    });

    res.json(userJournals);
  } catch (err) {
    next(err);
  }
});

/** Adds a note to the JournalID*/
router.post("/", async (req, res, next) => {
  try {
    const userId = res.locals.user.id;
    const { date, note, workoutsId, exercisesId, mealId, foodItemId } =
      req.body;

    const journalEntry = await prisma.journal_Entry.create({
      data: {
        date: date || new Date(),
        note,
        journal: { connect: { id: userId } },
        workoutsId: +workoutsId,
        exercisesId: +exercisesId,
        mealId: +mealId,
        food_ItemId: +foodItemId,
      },
    });

    // Respond with the created journal entry
    res.json(journalEntry);
  } catch (err) {
    next(err);
  }
});

/** Edit Journal Entry by journal_entryID (pk) specifically editing only the note field  */
router.patch("/:id", async (req, res, next) => {
  try {
    const journal_entryId = +req.params.id;

    const { note } = req.body;

    //const journal_entry = await prisma.journal_entry.findUnique({ where: { id } });
    // validateExercise(res.locals.user, exercises);

    const update_journal_entry = await prisma.journal_Entry.update({
      where: { id: journal_entryId },
      data: { note },
    });
    res.json(update_journal_entry);
  } catch (err) {
    next(err);
  }
});

/** Deletes journal_entry by journal_entryId */
router.delete("/:id", async (req, res, next) => {
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
