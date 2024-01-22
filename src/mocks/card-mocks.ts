import { TBoards, TCard } from "../components/Card/Card.type";

const getRandomNumber = () => Math.floor(Math.random() * (1 - 1000 + 1)) + 1;

const generateRandomDataPending = (): TCard => ({
  id: getRandomNumber(),
  labels: [
    { id: `label-${getRandomNumber()}`, label: "SomeLabel1" },
    { id: `label-${getRandomNumber()}`, label: "SomeLabel2" },
  ],
  name: "Una frase con más de 30 caracteres para el objeto",
  number: Math.floor(Math.random() * 100),
  assigned: "Nombre de una persona",
  column: "Pending",
});
const generateRandomDataDoing = (): TCard => ({
  id: getRandomNumber(),
  labels: [
    { id: `label-${getRandomNumber()}`, label: "SomeLabel1" },
    { id: `label-${getRandomNumber()}`, label: "SomeLabel2" },
  ],
  name: "Una frase con más de 30 caracteres para el objeto",
  number: Math.floor(Math.random() * 100),
  assigned: "Nombre de una persona",
  column: "Doing",
});
const generateRandomDataDone = (): TCard => ({
  id: getRandomNumber(),
  labels: [
    { id: `label-${getRandomNumber()}`, label: "SomeLabel1" },
    { id: `label-${getRandomNumber()}`, label: "SomeLabel2" },
  ],
  name: "Una frase con más de 30 caracteres para el objeto",
  number: Math.floor(Math.random() * 100),
  assigned: "Nombre de una persona",
  column: "Done",
});

export const mocksCard: TBoards = {
  boards: [
    {
      id: 1,
      name: "My tablero uno",
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
  ],
};
