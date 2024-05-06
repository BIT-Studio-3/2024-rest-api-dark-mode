/*
  Warnings:

  - You are about to drop the `Institution` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Institution";

-- CreateTable
CREATE TABLE "agentData" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "accountId" INTEGER NOT NULL,
    "credits" INTEGER NOT NULL,
    "shipCount" INTEGER NOT NULL,
    "startingFaction" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "agentData_pkey" PRIMARY KEY ("id")
);
