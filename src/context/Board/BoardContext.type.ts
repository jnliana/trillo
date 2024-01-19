import { ReactNode } from "react";
import { TBoard, TCard } from "../../components/Card/Card.type";

export type TBoardContextProviderProps = {
  children: ReactNode;
};

export type TBoardContextProps = {
  boards: TBoard;
  add: (Card: TCard) => void;
  remove: (Card: TCard) => void;
};

export type Actions = "add" | "remove";

export type BoardAction = {
  type: Actions;
  payload: TBoard;
};
