import { PrismaClient } from '@prisma/client/';

const prisma = new PrismaClient();

async function main() {
  console.log('===========clearing data===========');

  await prisma.user.deleteMany({});
  console.log('===========Creating users===========');
  console.log(new Date('2023-05-01'));
  const company = await prisma.user.create({
    data: {
      challenges: {
        create: [
          {
            description: 'desc 2ewdsa',
            videoUrl: 'video3',
            tags: ['tag1', 'tag2', 'tag3'],
            endDate: new Date('2023/05/01'),
            // endDate: new Date('1922-02-02'),
          },
        ],
      },
      Post: {
        create: [
          {
            description: 'usedsadasdas',
            imageUrls: ['image1', 'image2', 'image3'],
            tags: ['tag1', 'tag2', 'tag3'],
          },
        ],
      },
      email: 'comp@gmail.com',
      type: 'COMPANY',
      hash: 'password',
      username: 'comp',
      phone: '3434535',
      address: 'dskdljaskdj',
      field: 'IT',
      ice: '987987987',
      country: 'morocco',
    },
    include: {
      Post: true,
    },
  });
  const normal_user = await prisma.user.create({
    data: {
      email: 'osm@gmail.com',
      hash: 'password',
      type: 'NORMAL',
      username: 'osmrgh',
      firstName: 'oussama',
      lastName: 'reghay',
      sex: 'MALE',
      age: 24,
      phone: '3434535',
      country: 'morocco',
      city: 'tangier',
    },
  });
  const findChallenge = await prisma.challenge.findFirst();
  const find_normal_user = await prisma.user.findFirst({
    where: {
      type: 'NORMAL',
    },
  });
  await prisma.like.create({
    data: {
      challengeId: findChallenge.id,
      userId: find_normal_user.id,
    },
  });
  console.log(findChallenge);
  console.log(find_normal_user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
