const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Adds a new journal entry*/
router.post("/journal_entry", async (req, res, next) => {

    try {
      const { note } = req.body;
      if (!note) {
        throw new ServerError(400, "Note required.");
      }
  
      const journal_entry = await prisma.journal_entry.create({
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
router.patch("/journal_entry/:journal_entryId", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { note } = req.body;

    //const journal_entry = await prisma.journal_entry.findUnique({ where: { id } });
    // validateExercise(res.locals.user, exercises);

    const updated_journal_entry = await prisma.journal_entry.update({
      where: { id },
      data: { note },
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

    await prisma.journal_entry.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
