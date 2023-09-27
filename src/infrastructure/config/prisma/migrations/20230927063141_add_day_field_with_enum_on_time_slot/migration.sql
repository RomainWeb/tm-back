/*
  Warnings:

  - Added the required column `day` to the `time_slots` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "days_enum" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

-- AlterTable
ALTER TABLE "time_slots" ADD COLUMN     "day" "days_enum" NOT NULL;
