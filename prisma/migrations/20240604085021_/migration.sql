/*
  Warnings:

  - The primary key for the `AgentData` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "AgentData" DROP CONSTRAINT "AgentData_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "AgentData_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "AgentData_id_seq";
