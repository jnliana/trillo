import { produce } from 'immer';
import { BoardAction, TBoards } from '../BoardContext.type';
import { v4 as uuidv4 } from 'uuid';

export function BoardReducer(state: TBoards, action: BoardAction) {
  const { type, payload } = action;

  const boardIndex = state.boards.findIndex((board) => board.id === payload.id);
  const existsBoard = boardIndex !== -1;

  const board = state.boards[boardIndex];

  const addCard = () => {
    if (!existsBoard || !payload.card) return state;
    const totalCard = board.data.length;
    const newCard = { ...payload.card, number: totalCard + 1, id: uuidv4() };
    return produce(state, (draft) => {
      draft.boards[boardIndex].data.push(newCard);
    });
  };

  const removeCard = () => {
    if (!existsBoard || !payload.card) return state;

    const getCardIndex = board.data.findIndex(
      (card) => card.id === payload?.card?.id
    );
    return produce(state, (draft) => {
      draft.boards[boardIndex].data.splice(getCardIndex, 1);
    });
  };

  const updateOrder = () => {
    if (!existsBoard) return state;
    return produce(state, (draft) => {
      if (!payload.cards) return state;
      draft.boards[boardIndex].data = payload.cards;
    });
  };

  switch (type) {
    case 'add':
      return addCard();
    case 'remove':
      return removeCard();
    case 'updateOrder':
      return updateOrder();
    default:
      return state;
  }
}
