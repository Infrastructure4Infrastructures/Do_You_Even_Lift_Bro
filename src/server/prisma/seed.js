const prisma = require("../prisma");
const { faker } = require("@faker-js/faker");

const { exampleExercises } = require("./exercise_Data");

const seed = async () => {
  const random = (n) => Math.floor(Math.random() * n) + 1;
  const storedUserIds = [];

  for (let i = 0; i < exampleExercises.length; i++) {
    const randomUserName = faker.internet.userName();
    const randomPassword = faker.internet.password();

    const user = await prisma.user.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        username: randomUserName,
        password: randomPassword,
      },
    });
    storedUserIds.push(user.id);
  }

  for (let i = 0; i < exampleExercises.length; i++) {
    const {
      setsGoals,
      repsGoals,
      name,
      category,
      description,
      video,
      difficulty,
    } = exampleExercises[i];

    await prisma.workout_Exercises.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        setsGoals: +setsGoals,
        repsGoals: +repsGoals | repsGoals,
        workouts: {
          create: {
            name,
            difficulty,
            user: { connect: { id: storedUserIds[i] } },
          },
        },
        exercises: {
          create: {
            name,
            description,
            category,
            video,
          },
        },
      },
    });
    await prisma.user_Exercises.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        mySets: random(5),
        myReps: random(20),
        user: { connect: { id: storedUserIds[i] } },
        exercises: {
          create: {
            name,
            description,
            category,
            video,
          },
        },
      },
    });
  }

  for (let i = 1; i <= exampleExercises.length; i++) {
    const randomFoodItem = faker.animal.type();
    const randomDescription = faker.lorem.word();

    await prisma.food_Item.upsert({
      where: { id: i },
      update: {},
      create: {
        name: randomFoodItem,
        description: randomDescription,
        calories: random(2500),
      },
    });
  }
  for (let i = 1; i <= exampleExercises.length; i++) {
    const randomDate = faker.date.anytime();
    await prisma.meal.upsert({
      where: { id: i },
      update: {},
      create: {
        date: randomDate,
        mealNum: random(200),
        user: { connect: { id: i } },
      },
    });
  }

  for (let i = 1; i <= exampleExercises.length; i++) {
    await prisma.meal_Food_Items.upsert({
      where: { id: i },
      update: {},
      create: {
        mealId: random(10),
        food_ItemId: i,
      },
    });
  }

  for (let i = 1; i <= exampleExercises.length; i++) {
    await prisma.journal.upsert({
      where: { id: i },
      update: {},
      create: {
        userId: i,
      },
    });
  }

  for (let i = 1; i <= exampleExercises.length; i++) {
    const randomJournalEntry = faker.lorem.words();
    const randomDate = faker.date.anytime();

    await prisma.journal_Entry.upsert({
      where: { id: i },
      update: {},
      create: {
        date: randomDate,
        note: randomJournalEntry,
        journalId: i,
        // workoutsId: random(10),
        // exercisesId: random(10),
        // mealId: random(10),
        // food_ItemId: random(10),
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

// const { faker } = require("@faker-js/faker");

// const prisma = require("../prisma");

// const seed = async () => {
//   const random = (n) => Math.floor(Math.random() * n) + 1;

//   for (let i = 1; i <= 10; i++) {
//     const randomUserName = faker.internet.userName();
//     const randomPassword = faker.internet.password();

//     await prisma.user.upsert({
//       where: { id: i },
//       update: {},
//       create: {
//         username: randomUserName,
//         password: randomPassword,
//       },
//     });
//   }

//   for (let i = 1; i <= 10; i++) {
//     const randomName = faker.lorem.words();
//     const randomExercise = faker.lorem.word();
//     const randomCategory = faker.lorem.word();

//     await prisma.exercises.upsert({
//       where: { id: i },
//       update: {},
//       create: {
//         name: randomName,
//         description: randomExercise,
//         category: randomCategory,
//         // workout_exercises: {
//         //   create: [
//         //     {
//         //       setsGoals: random(5),
//         //       repsGoals: random(20),
//         //       mySets: random(5),
//         //       myReps: random(20),
//         //       workoutsId: i,
//         //       exercisesId: i,
//         //       workouts: {
//         //         create: {
//         //           name: randomName,
//         //           difficulty: randomWorkout,
//         //           userId: i,
//         //         },
//         //       },
//         //     },
//         //   ],
//         // },
//       },
//     });
//   }

//   for (let i = 1; i <= 10; i++) {
//     const randomName = faker.lorem.words();
//     // const randomWorkout = faker.lorem.word();

//     const array = ["beginner", "intermediate", "advanced"];

//     const result = randomDifficulty(array);

//     function randomDifficulty(arr) {
//       // get random index value
//       const randomIndex = Math.floor(Math.random() * arr.length);

//       // get random item
//       const item = arr[randomIndex];

//       return item;
//     }
//     await prisma.workouts.upsert({
//       where: { id: i },
//       update: {},
//       create: {
//         name: randomName,
//         difficulty: result,
//         userId: i,
//       },
//     });
//   }

//   for (let i = 1; i <= 10; i++) {
//     await prisma.workout_Exercises.upsert({
//       where: { id: i },
//       update: {},
//       create: {
//         setsGoals: random(5),
//         repsGoals: random(20),
//         mySets: random(5),
//         myReps: random(20),
//         workoutsId: i,
//         exercisesId: i,
//       },
//     });
//   }

//   for (let i = 1; i <= 10; i++) {
//     const randomFoodItem = faker.animal.type();
//     const randomDescription = faker.lorem.word();

//     await prisma.food_Item.upsert({
//       where: { id: i },
//       update: {},
//       create: {
//         name: randomFoodItem,
//         description: randomDescription,
//         calories: random(2500),
//         // create: [
//         //   {
//         //     mealId: i,
//         //     food_ItemId: i,
//         //     meal: {
//         //       create: {
//         //         category: randomMealCategory,
//         //         userId: i,
//         //       },
//         //     },
//         //   },
//         // ],
//       },
//     });
//   }

//   for (let i = 1; i <= 10; i++) {
//     await prisma.meal.upsert({
//       where: { id: i },
//       update: {},
//       create: {
//         mealNum: random(200),
//         userId: i,
//       },
//     });
//   }

//   for (let i = 1; i <= 10; i++) {
//     await prisma.meal_Food_Items.upsert({
//       where: { id: i },
//       update: {},
//       create: {
//         mealId: random(10),
//         food_ItemId: i,
//       },
//     });
//   }

//   for (let i = 1; i <= 10; i++) {
//     await prisma.journal.upsert({
//       where: { id: i },
//       update: {},
//       create: {
//         userId: i,
//       },
//     });
//   }

//   for (let i = 1; i <= 10; i++) {
//     const randomJournalEntry = faker.lorem.words();
//     const randomDate = faker.date.anytime();

//     await prisma.journal_Entry.upsert({
//       where: { id: i },
//       update: {},
//       create: {
//         date: randomDate,
//         note: randomJournalEntry,
//         journalId: i,
//         workoutsId: random(10),
//         exercisesId: random(10),
//         mealId: random(10),
//         food_ItemId: random(10),
//       },
//     });
//   }
// };

// seed()
//   .then(async () => await prisma.$disconnect())
//   .catch(async (err) => {
//     console.error(err);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
