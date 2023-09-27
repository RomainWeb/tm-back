/*
  Warnings:

  - Changed the type of `status` on the `time_slots` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `day` on the `time_slots` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TimeslotStatusEnum" AS ENUM ('Undecided', 'Completed', 'Canceled');

-- CreateEnum
CREATE TYPE "DaysEnum" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

-- AlterTable
ALTER TABLE "time_slots" DROP COLUMN "status",
ADD COLUMN     "status" "TimeslotStatusEnum" NOT NULL,
DROP COLUMN "day",
ADD COLUMN     "day" "DaysEnum" NOT NULL;

-- DropEnum
DROP TYPE "days_enum";
