import { useReducer } from "react";
import { TBoard } from "../../../components/Card/Card.type";
import { BoardAction } from "../BoardContext.type";

const INITIAL_STATE = {} as TBoard;

function BoardReducer(state: TBoard, action: BoardAction) {
  const { type, payload } = action;
  switch (type) {
    case "add":
      return state;
    case "remove":
      return state;

    default:
      return state;
  }
  return state;
}

const useBoardReducer = () => {
  const [state, dispath] = useReducer(BoardReducer, INITIAL_STATE);
};
