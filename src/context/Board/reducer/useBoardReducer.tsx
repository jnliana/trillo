import { useCallback, useReducer } from "react";
import { BoardAction, TBoardCard, TBoards } from "../BoardContext.type";
import { mocksCard } from "../../../mocks/card-mocks";

const INITIAL_STATE: TBoards = mocksCard;
//const INITIAL_STATE: TBoards = { boards: [] };

function BoardReducer(state: TBoards, action: BoardAction) {
  const { type, payload } = action;

  switch (type) {
    case "add":
      console.log("llamadron add");
      return state;
    case "remove":
      return state;

    default:
      return state;
  }
  return state;
}

export const useBoardReducer = () => {
  const [state, dispath] = useReducer(BoardReducer, INITIAL_STATE);
  console.log("state", state);
  const addCard = useCallback(
    (cardData: TBoardCard) =>
      dispath({
        type: "add",
        payload: cardData,
      }),
    []
  );

  const removeCard = useCallback(
    (cardData: TBoardCard) => dispath({ type: "remove", payload: cardData }),
    []
  );

  return {
    boardsData: state,
    addCard,
    removeCard,
  };
};
