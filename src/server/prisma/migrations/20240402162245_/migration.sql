/*
  Warnings:

  - You are about to drop the column `myReps` on the `Workout_Exercises` table. All the data in the column will be lost.
  - You are about to drop the column `mySets` on the `Workout_Exercises` table. All the data in the column will be lost.
  - Made the column `repsGoals` on table `Workout_Exercises` required. This step will fail if there are existing NULL values in that column.
  - Made the column `setsGoals` on table `Workout_Exercises` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "User_Exercises" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mySets" INTEGER NOT NULL,
    "myReps" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "exercisesId" INTEGER NOT NULL,
    CONSTRAINT "User_Exercises_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_Exercises_exercisesId_fkey" FOREIGN KEY ("exercisesId") REFERENCES "Exercises" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Workout_Exercises" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "setsGoals" INTEGER NOT NULL,
    "repsGoals" INTEGER NOT NULL,
    "workoutsId" INTEGER NOT NULL,
    "exercisesId" INTEGER NOT NULL,
    CONSTRAINT "Workout_Exercises_workoutsId_fkey" FOREIGN KEY ("workoutsId") REFERENCES "Workouts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Workout_Exercises_exercisesId_fkey" FOREIGN KEY ("exercisesId") REFERENCES "Exercises" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Workout_Exercises" ("exercisesId", "id", "repsGoals", "setsGoals", "workoutsId") SELECT "exercisesId", "id", "repsGoals", "setsGoals", "workoutsId" FROM "Workout_Exercises";
DROP TABLE "Workout_Exercises";
ALTER TABLE "new_Workout_Exercises" RENAME TO "Workout_Exercises";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
