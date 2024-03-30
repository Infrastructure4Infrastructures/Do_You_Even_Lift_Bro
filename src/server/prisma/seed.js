const prisma = require("../prisma");
const { faker } = require("@faker-js/faker");

const {
  beginnerExercises,
  intermediateExercises,
  advancedExercises,
} = require("./exercise_Data");

const seed = async () => {
  const randomUserName = faker.internet.userName();
  const randomPassword = faker.internet.password();

  const random = (n) => Math.floor(Math.random() * n) + 1;

  for (let i = 0; i < beginnerExercises.length; i++) {
    const { category, description, video } = beginnerExercises[i];
    await prisma.exercises.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        name: "Beginner Workout",
        description,
        category,
        video,
      },
    });
  }
  for (let i = 0; i < beginnerExercises.length; i++) {
    const { setsGoals, repsGoals } = beginnerExercises[i];
    await prisma.workout_Exercises.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        setsGoals: +setsGoals,
        repsGoals: +repsGoals,
      },
    });
  }
  for (let i = 0; i < beginnerExercises.length; i++) {
    const { name } = beginnerExercises[i];
    await prisma.workouts.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        name,
        difficulty: "Beginner",
      },
    });
  }
  for (let i = 0; i < intermediateExercises.length; i++) {
    const { category, description, video } = intermediateExercises[i];
    await prisma.exercises.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        name: "Intermediate Workout",
        description,
        category,
        video,
      },
    });
  }
  for (let i = 0; i < intermediateExercises.length; i++) {
    const { setsGoals, repsGoals } = intermediateExercises[i];
    await prisma.workout_Exercises.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        setsGoals: +setsGoals,
        repsGoals: +repsGoals,
      },
    });
  }
  for (let i = 0; i < intermediateExercises.length; i++) {
    const { name } = intermediateExercises[i];
    await prisma.workouts.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        name,
        difficulty: "Intermediate",
      },
    });
  }
  for (let i = 0; i < advancedExercises.length; i++) {
    const { category, description, video } = advancedExercises[i];
    await prisma.exercises.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        name: "Advanced Workout",
        description,
        category,
        video,
      },
    });
  }
  for (let i = 0; i < advancedExercises.length; i++) {
    const { setsGoals, repsGoals } = advancedExercises[i];
    await prisma.workout_Exercises.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        setsGoals: +setsGoals,
        repsGoals: +repsGoals,
      },
    });
  }
  for (let i = 0; i < advancedExercises.length; i++) {
    const { name } = advancedExercises[i];
    await prisma.workouts.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        name,
        difficulty: "Advanced",
      },
    });
  }
  for (let i = 0; i < 15; i++) {
    await prisma.user.upsert({
      connectOrCreate: {
        where: { id: i + 1 },
        update: {},
        create: {
          username: randomUserName,
          password: randomPassword,
        },
      },
    });
  }

  for (let i = 1; i <= 10; i++) {
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
  for (let i = 1; i <= 10; i++) {
    await prisma.meal.upsert({
      where: { id: i },
      update: {},
      create: {
        mealNum: random(200),
        userId: i,
      },
    });
  }

  for (let i = 1; i <= 10; i++) {
    await prisma.meal_Food_Items.upsert({
      where: { id: i },
      update: {},
      create: {
        mealId: random(10),
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
