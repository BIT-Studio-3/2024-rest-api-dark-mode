-- CreateTable
CREATE TABLE "AgentData" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "accountId" INTEGER NOT NULL,
    "credits" INTEGER NOT NULL,
    "shipCount" INTEGER NOT NULL,
    "startingFaction" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AgentData_pkey" PRIMARY KEY ("id")
);
