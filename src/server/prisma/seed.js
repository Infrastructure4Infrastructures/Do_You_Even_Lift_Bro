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
        user_workouts: {
          create: [{ workoutId: i }],
        },
      },
    });
  }
  for (let i = 1; i <= 10; i++) {
    const randomWorkout = faker.lorem.word();
    const randomDescription = faker.lorem.words();

    await prisma.workouts.upsert({
      where: { id: i },
      update: {},
      create: {
        difficulty: randomWorkout,
        description: randomDescription,
        userId: i,
        workout_exercises: {
          create: [{ exerciseId: i }],
        },
      },
    });
  }
  for (let i = 1; i <= 10; i++) {
    const randomFood = faker.animal.type();

    await prisma.food.upsert({
      where: { id: i },
      update: {},
      create: {
        foodEntry: randomFood,
        userId: i,
      },
    });
  }
  for (let i = 1; i <= 10; i++) {
    const randomEntry = faker.lorem.words();

    await prisma.journal.upsert({
      where: { id: i },
      update: {},
      create: {
        exerciseName: randomEntry,
        exerciseSets: i,
        exerciseReps: i,
        foodEntry: randomEntry,
        calories: i,
        totalCalories: i,
        userId: i,
      },
    });
  }
  for (let i = 1; i <= 10; i++) {
    const randomEntry = faker.lorem.words();

    await prisma.exercises.upsert({
      where: { id: i },
      update: {},
      create: {
        description: randomEntry,
        workoutId: i,
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
