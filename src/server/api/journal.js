// const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Gets all journals */
router.get("/", async (req, res, next) => {
  try {
    // const id = +req.params.id;

    const journals = await prisma.journal.findMany({
      include: { Journal_Entry: true },
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
      include: { Journal_Entry: true },
    });
    // validateJournal(res.locals.user, journals);

    res.json(journals);
  } catch (err) {
    next(err);
  }
});
