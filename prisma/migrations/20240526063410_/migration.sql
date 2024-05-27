/*
  Warnings:

  - You are about to drop the column `markets` on the `Waypoint` table. All the data in the column will be lost.
  - You are about to drop the column `ships` on the `Waypoint` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Waypoint" DROP COLUMN "markets",
DROP COLUMN "ships";

-- CreateTable
CREATE TABLE "Market" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "waypointId" INTEGER NOT NULL,
    "goods" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Market_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Market" ADD CONSTRAINT "Market_waypointId_fkey" FOREIGN KEY ("waypointId") REFERENCES "Waypoint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
