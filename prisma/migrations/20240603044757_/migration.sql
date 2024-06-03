-- CreateTable
CREATE TABLE "Ship" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "shipyardId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ship_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ship" ADD CONSTRAINT "Ship_shipyardId_fkey" FOREIGN KEY ("shipyardId") REFERENCES "Shipyard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
