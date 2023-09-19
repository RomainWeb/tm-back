import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  await prisma.users.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Romain',
      email: 'romain.mercier34@gmail.com',
      password: '1234',
      created_at: new Date(),
    },
  });

  await prisma.users.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: 'Yann',
      email: 'yann@gmail.com',
      password: '1234',
      created_at: new Date(),
    },
  });

  await prisma.timeSlots.deleteMany({ where: {} });

  // create two dummy articles
  await prisma.timeSlots.upsert({
    where: { id: 1 },
    update: {},
    create: {
      startDate: new Date(2023, 4, 4, 14, 0),
      endDate: new Date(2023, 4, 4, 15, 30),
      description: 'description 1',
      status: 0,
      user: { connect: { id: 1 } },
    },
  });

  await prisma.timeSlots.upsert({
    where: { id: 2 },
    update: {},
    create: {
      startDate: new Date(2023, 4, 4, 15, 30),
      endDate: new Date(2023, 4, 4, 17, 0),
      description: 'description 2',
      status: 0,
      user: { connect: { id: 1 } },
    },
  });

  await prisma.timeSlots.upsert({
    where: { id: 3 },
    update: {},
    create: {
      startDate: new Date(2023, 4, 4, 17, 0),
      endDate: new Date(2023, 4, 4, 18, 30),
      description: 'description 3',
      status: 0,
      user: { connect: { id: 1 } },
    },
  });

  await prisma.timeSlots.upsert({
    where: { id: 4 },
    update: {},
    create: {
      startDate: new Date(2023, 4, 4, 14, 0),
      endDate: new Date(2023, 4, 4, 15, 30),
      description: 'description 4',
      status: 0,
      user: { connect: { id: 2 } },
    },
  });

  await prisma.timeSlots.upsert({
    where: { id: 5 },
    update: {},
    create: {
      startDate: new Date(2023, 4, 4, 15, 30),
      endDate: new Date(2023, 4, 4, 17, 0),
      description: 'description 5',
      status: 0,
      user: { connect: { id: 2 } },
    },
  });

  await prisma.timeSlots.upsert({
    where: { id: 6 },
    update: {},
    create: {
      startDate: new Date(2023, 4, 4, 17, 0),
      endDate: new Date(2023, 4, 4, 18, 30),
      description: 'description 6',
      status: 0,
      user: { connect: { id: 2 } },
    },
  });
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
