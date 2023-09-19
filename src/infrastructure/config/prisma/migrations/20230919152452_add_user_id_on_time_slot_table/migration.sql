-- AlterTable
ALTER TABLE "timeSlots" ADD COLUMN     "userId" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "timeSlots" ADD CONSTRAINT "timeSlots_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
