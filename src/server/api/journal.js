// const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Gets all journals */
// Is this some sort of admin route?
router.get("/", async (req, res, next) => {
  try {
    const journals = await prisma.journal.findMany({
      include: { Journal_Entry: true }
    });
    // validateJournal(res.locals.user, journals);

    res.json(journals);
  } catch (err) {
    next(err);
  }
});

/** Gets entries of a single journal by journalID */
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    // const { date, note } = req.params;

    const journals = await prisma.journal.findUnique({
      where: { id },
      include: { Journal_Entry: true }
    });
    // validateJournal(res.locals.user, journals);

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
        user: { connect: { id: +userId } }
      }
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
      where: { id }
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
