import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  try {
    const alphaCentauri = await prisma.system.create({
      data: {
        name: "Alpha Centauri",
        xCoordinate: 11,
        yCoordinate: 25,
        faction: "Federation",
      },
    });

    const betaProxima = await prisma.system.create({
      data: {
        name: "Beta Proxima",
        xCoordinate: 50,
        yCoordinate: 61.9,
        faction: "Illuminate",
      },
    });

    const gammaHercules = await prisma.system.create({
      data: {
        name: "Gamma Hercules",
        xCoordinate: 24.5,
        yCoordinate: 32.9,
        faction: "Federation",
      },
    });

    const waypoints = [
      {
        name: "Waypoint 1",
        type: "ASTEROID",
        systemId: alphaCentauri.id,
        xCoordinate: 11.1,
        yCoordinate: 25.1,
      },
      {
        name: "Waypoint 2",
        type: "ASTEROID",
        systemId: alphaCentauri.id,
        xCoordinate: 11.2,
        yCoordinate: 25.2,
      },
      {
        name: "Waypoint 3",
        type: "MARKETPLACE",
        systemId: alphaCentauri.id,
        xCoordinate: 11.3,
        yCoordinate: 25.3,
      },
      {
        name: "Waypoint 4",
        type: "SHIPYARD",
        systemId: alphaCentauri.id,
        xCoordinate: 11.4,
        yCoordinate: 25.4,
      },
      {
        name: "Waypoint 5",
        type: "ASTEROID",
        systemId: alphaCentauri.id,
        xCoordinate: 11.5,
        yCoordinate: 25.5,
      },
      {
        name: "Waypoint 1",
        type: "ASTEROID",
        systemId: betaProxima.id,
        xCoordinate: 11.1,
        yCoordinate: 25.1,
      },
      {
        name: "Waypoint 2",
        type: "SHIPYARD",
        systemId: betaProxima.id,
        xCoordinate: 11.2,
        yCoordinate: 25.2,
      },
      {
        name: "Waypoint 3",
        type: "ASTEROID",
        systemId: betaProxima.id,
        xCoordinate: 11.3,
        yCoordinate: 25.3,
      },
      {
        name: "Waypoint 4",
        type: "ASTEROID",
        systemId: betaProxima.id,
        xCoordinate: 11.4,
        yCoordinate: 25.4,
      },
      {
        name: "Waypoint 5",
        type: "ASTEROID",
        systemId: betaProxima.id,
        xCoordinate: 11.5,
        yCoordinate: 25.5,
      },
      {
        name: "Waypoint 1",
        type: "ASTEROID",
        systemId: gammaHercules.id,
        xCoordinate: 11.1,
        yCoordinate: 25.1,
      },
      {
        name: "Waypoint 2",
        type: "ASTEROID",
        systemId: gammaHercules.id,
        xCoordinate: 11.2,
        yCoordinate: 25.2,
      },
      {
        name: "Waypoint 3",
        type: "ASTEROID",
        systemId: gammaHercules.id,
        xCoordinate: 11.3,
        yCoordinate: 25.3,
      },
      {
        name: "Waypoint 4",
        type: "ASTEROID",
        systemId: gammaHercules.id,
        xCoordinate: 11.4,
        yCoordinate: 25.4,
      },
      {
        name: "Waypoint 5",
        type: "ASTEROID",
        systemId: gammaHercules.id,
        xCoordinate: 11.5,
        yCoordinate: 25.5,
      },
    ];

    for (const waypoint of waypoints) {
      const createdWaypoint = await prisma.waypoint.create({
        data: waypoint,
      });

      if (waypoint.type === "MARKETPLACE") {
        const market = await prisma.market.create({
          data: {
            name: `${waypoint.name} Market`,
            description:
              "A bustling hub for trade goods that are available for purchase which can be viewed",
            xCoordinate: waypoint.xCoordinate,
            yCoordinate: waypoint.yCoordinate,
            waypointId: createdWaypoint.id,
          },
        });

        await prisma.marketItem.create({
          data: {
            name: "Iron Ore",
            price: 50.0,
            quantity: 1000,
            marketId: market.id,
          },
        });
        await prisma.marketItem.create({
          data: {
            name: "Silver Ore",
            price: 500.0,
            quantity: 500,
            marketId: market.id,
          },
        });
        await prisma.marketItem.create({
          data: {
            name: "Gold Ore",
            price: 1000.0,
            quantity: 100,
            marketId: market.id,
          },
        });
        await prisma.marketItem.create({
          data: {
            name: "Platinum Ore",
            price: 2000.0,
            quantity: 50,
            marketId: market.id,
          },
        });
        await prisma.marketItem.create({
          data: {
            name: "Diamond Ore",
            price: 5000.0,
            quantity: 10,
            marketId: market.id,
          },
        });
      } else if (waypoint.type === "SHIPYARD") {
        await prisma.shipyard.create({
          data: {
            name: `${waypoint.name} Shipyard`,
            description:
              "A shipyard where ships within the system are available for purchase",
            xCoordinate: waypoint.xCoordinate,
            yCoordinate: waypoint.yCoordinate,
            waypointId: createdWaypoint.id,
          },
        });
      }
    }

    console.log(
      "Systems, waypoints, markets, and shipyards seeded successfully."
    );
  } catch (err) {
    console.error("Error seeding data:", err);
  } finally {
    await prisma.$disconnect();
    process.exit(0);
  }
};

main();
