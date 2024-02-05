import { useContext } from 'react';
import { BoardContext } from '../../context/Board/BoardContext';
import { TBoard } from '../../context/Board/BoardContext.type';

export const useBoard = () => {
  const { boardsData, addCard, removeCard, updateOrder } =
    useContext(BoardContext);

  const getPeople = (idBoard: number) => {
    const cardboardInfo = boardsData.boards.find(
      (board: TBoard) => board.id === idBoard
    )?.data;
    return cardboardInfo?.reduce((people: string[], person) => {
      if (!people.includes(person.assigned)) {
        people.push(person.assigned);
      }
      return people;
    }, []);
  };

  const getBoards = () => {
    return boardsData.boards.map((board: TBoard) => ({
      id: board.id,
      name: board.name,
    }));
  };

  const getBoard = (id: number) => {
    return boardsData.boards.find((board) => board.id === id);
  };

  return {
    boardsData,
    addCard,
    removeCard,
    updateOrder,
    getPeople,
    getBoards,
    getBoard,
  };
};
