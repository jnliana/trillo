import { TCard } from '../components/Card/Card.type';
import { faker } from '@faker-js/faker';
import { TBoards } from '../context/Board/BoardContext.type';
import { v4 as uuidv4 } from 'uuid';

const getRandomNumber = () =>
  Math.abs(Math.floor(Math.random() * (1 - 1000 + 1)) + 1);

const generateRandomDataPending = (): TCard => ({
  id: uuidv4(),
  labels: [
    { id: `label-${getRandomNumber()}`, label: `label-${getRandomNumber()}` },
    { id: `label-${getRandomNumber()}`, label: `label-${getRandomNumber()}` },
  ],
  name: faker.person.jobTitle(),
  number: Math.floor(Math.random() * 100),
  description: faker.lorem.lines({ min: 1, max: 3 }),
  assigned: faker.person.fullName(),
  column: 'Pending',
});

const generateRandomDataDoing = (): TCard => ({
  id: uuidv4(),
  labels: [
    { id: `label-${getRandomNumber()}`, label: `label-${getRandomNumber()}` },
  ],
  name: faker.person.jobTitle(),
  number: Math.floor(Math.random() * 100),
  description: faker.lorem.lines({ min: 1, max: 3 }),
  assigned: faker.person.fullName(),
  column: 'Doing',
});

const generateRandomDataDone = (): TCard => ({
  id: uuidv4(),
  labels: [
    { id: `label-${getRandomNumber()}`, label: `label-${getRandomNumber()}` },
    { id: `label-${getRandomNumber()}`, label: `label-${getRandomNumber()}` },
  ],
  name: faker.person.jobTitle(),
  number: Math.floor(Math.random() * 100),
  description: faker.lorem.lines({ min: 1, max: 3 }),
  assigned: faker.person.fullName(),
  column: 'Done',
});

export const mocksCard: TBoards = {
  boards: [
    {
      id: 1,
      name: 'My tablero uno',
      data: [
        generateRandomDataDone(),
        generateRandomDataPending(),
        generateRandomDataDoing(),
        generateRandomDataDoing(),
        generateRandomDataDone(),
        generateRandomDataPending(),
        generateRandomDataDoing(),
      ],
    },
    {
      id: 2,
      name: 'My tablero dos',
      data: [
        generateRandomDataDone(),
        generateRandomDataPending(),
        generateRandomDataDoing(),
      ],
    },
    {
      id: 3,
      name: 'My tablero tres',
      data: [
        generateRandomDataDone(),
        generateRandomDataPending(),
        generateRandomDataDoing(),
      ],
    },
    {
      id: 4,
      name: 'My tablero cuatro',
      data: [
        generateRandomDataDone(),
        generateRandomDataPending(),
        generateRandomDataDoing(),
      ],
    },
    {
      id: 5,
      name: 'My tablero cinco',
      data: [
        generateRandomDataDone(),
        generateRandomDataPending(),
        generateRandomDataDoing(),
      ],
    },
  ],
};
