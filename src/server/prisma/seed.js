const { faker } = require("@faker-js/faker");

const prisma = require("../prisma");

const seed = async () => {
  for (let i = 1; i <= 10; i++) {
    const randomUserName = faker.internet.userName();
    const randomPassword = faker.internet.password();

    await prisma.user.upsert({
      where: { id: i },
      update: {},
      create: {
        username: randomUserName,
        password: randomPassword,
      },
    });
  }

  for (let i = 1; i <= 10; i++) {
    const randomName = faker.lorem.words();
    const randomExercise = faker.lorem.word();
    const randomCategory = faker.lorem.word();

    await prisma.exercises.upsert({
      where: { id: i },
      update: {},
      create: {
        name: randomName,
        description: randomExercise,
        category: randomCategory,
        // workout_exercises: {
        //   create: [
        //     {
        //       setsGoals: random(5),
        //       repsGoals: random(20),
        //       mySets: random(5),
        //       myReps: random(20),
        //       workoutsId: i,
        //       exercisesId: i,
        //       workouts: {
        //         create: {
        //           name: randomName,
        //           difficulty: randomWorkout,
        //           userId: i,
        //         },
        //       },
        //     },
        //   ],
        // },
      },
    });
  }

  for (let i = 1; i <= 10; i++) {
    const randomName = faker.lorem.words();
    const randomWorkout = faker.lorem.word();

    await prisma.workouts.upsert({
      where: { id: i },
      update: {},
      create: {
        name: randomName,
        difficulty: randomWorkout,
        userId: i,
      },
    });
  }

  for (let i = 1; i <= 10; i++) {
    const random = (n) => Math.floor(Math.random() * n) + 1;

    await prisma.workout_Exercises.upsert({
      where: { id: i },
      update: {},
      create: {
        setsGoals: random(5),
        repsGoals: random(20),
        mySets: random(5),
        myReps: random(20),
        workoutsId: i,
        exercisesId: i,
      },
    });
  }

  for (let i = 1; i <= 10; i++) {
    const randomFoodItem = faker.animal.type();
    const randomDescription = faker.lorem.word();

    const random = (n) => Math.floor(Math.random() * n) + 1;

    await prisma.food_Item.upsert({
      where: { id: i },
      update: {},
      create: {
        name: randomFoodItem,
        description: randomDescription,
        calories: random(2500),
        // create: [
        //   {
        //     mealId: i,
        //     food_ItemId: i,
        //     meal: {
        //       create: {
        //         category: randomMealCategory,
        //         userId: i,
        //       },
        //     },
        //   },
        // ],
      },
    });
  }

  for (let i = 1; i <= 10; i++) {
    await prisma.meal.upsert({
      where: { id: i },
      update: {},
      create: {
        mealNum: i,
        userId: i,
      },
    });
  }

  for (let i = 1; i <= 10; i++) {
    await prisma.meal_Food_Items.upsert({
      where: { id: i },
      update: {},
      create: {
        mealId: i,
        food_ItemId: i,
      },
    });
  }

  for (let i = 1; i <= 10; i++) {
    await prisma.journal.upsert({
      where: { id: i },
      update: {},
      create: {
        userId: i,
      },
    });
  }

  for (let i = 1; i <= 10; i++) {
    const randomJournalEntry = faker.lorem.words();
    const randomDate = faker.date.anytime();

    await prisma.journal_Entry.upsert({
      where: { id: i },
      update: {},
      create: {
        date: randomDate,
        note: randomJournalEntry,
        journalId: i,
        /**journal: {
          connect: i,
        },
        workoutsId: i,
        workouts: {
          connect: i,
        },
        exercisesId: i,
        exercises: {
          connect: i,
        },
        mealId: i,
        meal: {
          connect: i,
        },
        food_ItemId: i,
        food_Item: {
          connect: i,
        },*/
      },
    });
  }
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
