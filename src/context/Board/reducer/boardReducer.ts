import { produce } from "immer";
import { BoardAction, TBoards } from "../BoardContext.type";
import { v4 as uuidv4 } from "uuid";

export function BoardReducer(state: TBoards, action: BoardAction) {
  const { type, payload } = action;

  const boardIndex = state.boards.findIndex((board) => board.id === payload.id);
  const existsBoard = boardIndex !== -1;

  const board = state.boards[boardIndex];

  const addCard = () => {
    if (existsBoard) {
      const totalCard = board.data.length;
      const newCard = { ...payload.card, number: totalCard + 1, id: uuidv4() };
      return produce(state, (draft) => {
        draft.boards[boardIndex].data.push(newCard);
      });
    }
    return state;
  };

  const removeCard = () => {
    if (existsBoard) {
      const getCardIndex = board.data.findIndex(
        (card) => card.id === payload.card.id
      );
      return produce(state, (draft) => {
        draft.boards[boardIndex].data.splice(getCardIndex, 1);
      });
    }
    return state;
  };

  switch (type) {
    case "add":
      return addCard();
    case "remove":
      return removeCard();

    default:
      return state;
  }
}
