/*
  Warnings:

  - Added the required column `description` to the `Market` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Market" ADD COLUMN     "description" TEXT NOT NULL;
