// const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Sends single journal entry by id */
router.get("/:userId/journal", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const journals = await prisma.journal.findUnique({ where: { id } });
    validateJournal(res.locals.user, journals);

    res.json(journals);
  } catch (err) {
    next(err);
  }
});
