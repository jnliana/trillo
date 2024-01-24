import { produce } from "immer";
import { BoardAction, TBoards } from "../BoardContext.type";
import { v4 as uuidv4 } from "uuid";

export function BoardReducer(state: TBoards, action: BoardAction) {
  const { type, payload } = action;

  const boardIndex = state.boards.findIndex((board) => board.id === payload.id);
  const existsBoard = boardIndex !== -1;

  const addCard = () => {
    if (existsBoard) {
      const totalCard = state.boards[boardIndex].data.length;
      const newCard = { ...payload.card, number: totalCard + 1, id: uuidv4() };
      return produce(state, (draft) => {
        draft.boards[boardIndex].data.push(newCard);
      });
    }
    // No existe el tablero
    return state;
  };

  switch (type) {
    case "add":
      return addCard();
    case "remove":
      return state;

    default:
      return state;
  }
  return state;
}
