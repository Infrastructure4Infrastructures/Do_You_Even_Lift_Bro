/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `video` to the `Exercises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "isAdmin" BOOLEAN;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Exercises" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "video" TEXT NOT NULL
);
INSERT INTO "new_Exercises" ("category", "description", "id", "name") SELECT "category", "description", "id", "name" FROM "Exercises";
DROP TABLE "Exercises";
ALTER TABLE "new_Exercises" RENAME TO "Exercises";
CREATE TABLE "new_Workout_Exercises" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "setsGoals" INTEGER,
    "repsGoals" INTEGER,
    "mySets" INTEGER,
    "myReps" INTEGER,
    "workoutsId" INTEGER NOT NULL,
    "exercisesId" INTEGER NOT NULL,
    CONSTRAINT "Workout_Exercises_workoutsId_fkey" FOREIGN KEY ("workoutsId") REFERENCES "Workouts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Workout_Exercises_exercisesId_fkey" FOREIGN KEY ("exercisesId") REFERENCES "Exercises" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Workout_Exercises" ("exercisesId", "id", "myReps", "mySets", "repsGoals", "setsGoals", "workoutsId") SELECT "exercisesId", "id", "myReps", "mySets", "repsGoals", "setsGoals", "workoutsId" FROM "Workout_Exercises";
DROP TABLE "Workout_Exercises";
ALTER TABLE "new_Workout_Exercises" RENAME TO "Workout_Exercises";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
