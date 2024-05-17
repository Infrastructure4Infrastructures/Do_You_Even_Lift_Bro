-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_Exercises" (
    "id" SERIAL NOT NULL,
    "mySets" INTEGER NOT NULL,
    "myReps" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "exercisesId" INTEGER NOT NULL,

    CONSTRAINT "User_Exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workouts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Workouts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercises" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "video" TEXT NOT NULL,

    CONSTRAINT "Exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workout_Exercises" (
    "id" SERIAL NOT NULL,
    "setsGoals" INTEGER NOT NULL,
    "repsGoals" INTEGER NOT NULL,
    "workoutsId" INTEGER NOT NULL,
    "exercisesId" INTEGER NOT NULL,

    CONSTRAINT "Workout_Exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meal" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "mealNum" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Food_Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "calories" INTEGER NOT NULL,

    CONSTRAINT "Food_Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meal_Food_Items" (
    "id" SERIAL NOT NULL,
    "mealId" INTEGER NOT NULL,
    "food_ItemId" INTEGER NOT NULL,

    CONSTRAINT "Meal_Food_Items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Journal" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Journal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Journal_Entry" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "note" TEXT NOT NULL,
    "journalId" INTEGER NOT NULL,
    "workoutsId" INTEGER,
    "exercisesId" INTEGER,
    "mealId" INTEGER,
    "food_ItemId" INTEGER,

    CONSTRAINT "Journal_Entry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "User_Exercises" ADD CONSTRAINT "User_Exercises_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Exercises" ADD CONSTRAINT "User_Exercises_exercisesId_fkey" FOREIGN KEY ("exercisesId") REFERENCES "Exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workouts" ADD CONSTRAINT "Workouts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workout_Exercises" ADD CONSTRAINT "Workout_Exercises_workoutsId_fkey" FOREIGN KEY ("workoutsId") REFERENCES "Workouts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workout_Exercises" ADD CONSTRAINT "Workout_Exercises_exercisesId_fkey" FOREIGN KEY ("exercisesId") REFERENCES "Exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal_Food_Items" ADD CONSTRAINT "Meal_Food_Items_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal_Food_Items" ADD CONSTRAINT "Meal_Food_Items_food_ItemId_fkey" FOREIGN KEY ("food_ItemId") REFERENCES "Food_Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Journal" ADD CONSTRAINT "Journal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Journal_Entry" ADD CONSTRAINT "Journal_Entry_journalId_fkey" FOREIGN KEY ("journalId") REFERENCES "Journal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Journal_Entry" ADD CONSTRAINT "Journal_Entry_workoutsId_fkey" FOREIGN KEY ("workoutsId") REFERENCES "Workouts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Journal_Entry" ADD CONSTRAINT "Journal_Entry_exercisesId_fkey" FOREIGN KEY ("exercisesId") REFERENCES "Exercises"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Journal_Entry" ADD CONSTRAINT "Journal_Entry_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Journal_Entry" ADD CONSTRAINT "Journal_Entry_food_ItemId_fkey" FOREIGN KEY ("food_ItemId") REFERENCES "Food_Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
