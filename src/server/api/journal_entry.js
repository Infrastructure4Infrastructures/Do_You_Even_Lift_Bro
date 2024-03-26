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

// Returns single journal entry by journal_entryID
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const journalEntry = await prisma.journal_Entry.findUnique({
      where: { id },
    });

    res.json(journalEntry);
  } catch (err) {
    next(err);
  }
});

/** Adds a note to the JournalID*/
router.post("/:journalId", async (req, res, next) => {
  try {
    const { journalId } = req.params;
    const { note } = req.body;
    // if (!note) {
    //   throw new ServerError(400, "Note required.");
    // }

    const journal_entry = await prisma.journal_Entry.create({
      data: {
        note: note,
        journalId: +journalId,
        // journal_entryId: +journal_entryId,
      },
    });
    res.json(journal_entry);
  } catch (err) {
    next(err);
  }
});

/** Edit Journal Entry by journal_entryID/JournalID, specifically, note  */
router.patch("/:id/:journalId", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const { journalId } = req.params;
    const { note } = req.body;

    //const journal_entry = await prisma.journal_entry.findUnique({ where: { id } });
    // validateExercise(res.locals.user, exercises);

    const update_journal_entry = await prisma.journal_Entry.update({
      where: { id },
      data: {
        note: note,
        journalId: +journalId,
        // journal_entryId: +journal_entryId,
      },
    });
    res.json(update_journal_entry);
  } catch (err) {
    next(err);
  }
});

/** Deletes journal_entry by id */
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
