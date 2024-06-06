import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  try {
    await prisma.system.create({
      data: {
        name: "Alpha Centauri",
        xCoordinate: 11,
        yCoordinate: 25,
        faction: "Federation",
      },
    });

    await prisma.system.create({
      data: {
        name: "Beta Proxima",
        xCoordinate: 50,
        yCoordinate: 61.9,
        faction: "Illuminate",
      },
    });

    await prisma.system.create({
      data: {
        name: "Gamma Hercules",
        xCoordinate: 24.5,
        yCoordinate: 32.9,
        faction: "Federation",
      },
    });

    console.log("Systems seeded successfully.");
  } catch (err) {
    console.error("Error seeding systems:", err);
  } finally {
    await prisma.$disconnect();
    process.exit(0);
  }
};

main();
