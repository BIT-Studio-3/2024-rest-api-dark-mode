/*
  Warnings:

  - You are about to drop the column `country` on the `Institution` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Institution` table. All the data in the column will be lost.
  - You are about to drop the column `region` on the `Institution` table. All the data in the column will be lost.
  - Added the required column `deadline` to the `Institution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Institution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Institution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resource` to the `Institution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tpye` to the `Institution` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Institution" DROP COLUMN "country",
DROP COLUMN "name",
DROP COLUMN "region",
ADD COLUMN     "deadline" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "resource" TEXT NOT NULL,
ADD COLUMN     "tpye" TEXT NOT NULL;
