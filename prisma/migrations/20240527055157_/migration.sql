-- CreateTable
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "resource" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "deadline" TIMESTAMP(3) NOT NULL,
    "onAccepted" INTEGER NOT NULL,
    "onFulfilled" INTEGER NOT NULL,
    "tradeSymbol" TEXT NOT NULL,
    "destinationSymbol" TEXT NOT NULL,
    "unitsRequired" INTEGER NOT NULL,
    "unitsFulfilled" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

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
