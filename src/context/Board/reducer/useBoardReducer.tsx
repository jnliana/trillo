import { useCallback, useReducer } from 'react';
import { TBoardCard, TBoards } from '../BoardContext.type';
import { mocksCard } from '../../../mocks/card-mocks';
import { BoardReducer } from './boardReducer';

const INITIAL_STATE: TBoards = mocksCard;
//const INITIAL_STATE: TBoards = { boards: [] };

export const useBoardReducer = () => {
  const [state, dispath] = useReducer(BoardReducer, INITIAL_STATE);
  const addCard = useCallback(
    (cardData: TBoardCard) =>
      dispath({
        type: 'add',
        payload: cardData,
      }),
    []
  );

  const removeCard = useCallback(
    (cardData: TBoardCard) => dispath({ type: 'remove', payload: cardData }),
    []
  );

  return {
    boardsData: state,
    addCard,
    removeCard,
  };
};
