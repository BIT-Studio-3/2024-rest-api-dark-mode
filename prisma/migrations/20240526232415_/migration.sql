-- CreateTable
CREATE TABLE "Shipyard" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "waypointId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Shipyard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Shipyard" ADD CONSTRAINT "Shipyard_waypointId_fkey" FOREIGN KEY ("waypointId") REFERENCES "Waypoint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
