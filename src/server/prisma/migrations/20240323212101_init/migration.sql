/*
  Warnings:

  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "User_username_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Task";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Workouts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Workouts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Exercises" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Workout_Exercises" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "setsGoals" INTEGER NOT NULL,
    "repsGoals" INTEGER NOT NULL,
    "mySets" INTEGER NOT NULL,
    "myReps" INTEGER NOT NULL,
    "workoutsId" INTEGER NOT NULL,
    "exercisesId" INTEGER NOT NULL,
    CONSTRAINT "Workout_Exercises_workoutsId_fkey" FOREIGN KEY ("workoutsId") REFERENCES "Workouts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Workout_Exercises_exercisesId_fkey" FOREIGN KEY ("exercisesId") REFERENCES "Exercises" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Meal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Meal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Food_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "calories" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Meal_Food_Items" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mealId" INTEGER NOT NULL,
    "food_ItemId" INTEGER NOT NULL,
    CONSTRAINT "Meal_Food_Items_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Meal_Food_Items_food_ItemId_fkey" FOREIGN KEY ("food_ItemId") REFERENCES "Food_Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Journal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Journal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Journal_Entry" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "note" TEXT NOT NULL,
    "journalId" INTEGER NOT NULL,
    "workoutsId" INTEGER,
    "exercisesId" INTEGER,
    "mealId" INTEGER,
    "food_ItemId" INTEGER,
    CONSTRAINT "Journal_Entry_journalId_fkey" FOREIGN KEY ("journalId") REFERENCES "Journal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Journal_Entry_workoutsId_fkey" FOREIGN KEY ("workoutsId") REFERENCES "Workouts" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Journal_Entry_exercisesId_fkey" FOREIGN KEY ("exercisesId") REFERENCES "Exercises" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Journal_Entry_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Journal_Entry_food_ItemId_fkey" FOREIGN KEY ("food_ItemId") REFERENCES "Food_Item" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
