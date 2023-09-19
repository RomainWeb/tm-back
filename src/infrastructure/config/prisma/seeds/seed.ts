import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const timeSlot1 = await prisma.timeSlots.create({
    data: {
      startDate: new Date(2023, 4, 4, 14, 0),
      endDate: new Date(2023, 4, 4, 15, 30),
      description: 'description 1',
      status: 0,
    },
  });

  const timeSlot2 = await prisma.timeSlots.create({
    data: {
      startDate: new Date(2023, 4, 4, 15, 30),
      endDate: new Date(2023, 4, 4, 17, 0),
      description: 'description 2',
      status: 0,
    },
  });

  const timeSlot3 = await prisma.timeSlots.create({
    data: {
      startDate: new Date(2023, 4, 4, 17, 0),
      endDate: new Date(2023, 4, 4, 18, 30),
      description: 'description 3',
      status: 0,
    },
  });

  console.log({ timeSlot1, timeSlot2, timeSlot3 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
