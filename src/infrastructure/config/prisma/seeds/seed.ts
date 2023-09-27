import { PrismaClient } from '@prisma/client';
import { UsersListSeed } from './users.seed';
import { UserDataEntity } from '@infrastructure/data/user/entities/userData.entity';
import * as bcrypt from 'bcrypt';
import { TimeSlotListSeed } from './timeSlots.seed';
import { TimeSlotDataEntity } from '@infrastructure/data/time-slot/entities/timeSlot.entity';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const pwd = await bcrypt.hash('123456', 12);

  await Promise.all(
    UsersListSeed.map(async (user: UserDataEntity) =>
      prisma.users.upsert({
        where: { email: user.email },
        update: {},
        create: {
          ...user,
          password: pwd,
          time_slots: {
            create: TimeSlotListSeed,
          },
        },
      }),
    ),
  );
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
