import { ReactNode } from 'react';
import { TCard } from '../../components/Card/Card.type';

export type TBoard = {
  id: number;
  name: string;
  data: TCard[];
};

export type TBoards = {
  boards: TBoard[];
};

export type TBoardContextProviderProps = {
  children: ReactNode;
};

export type TBoardCard = {
  id: number;
  card?: TCard;
  cards?: TCard[];
};

export type TBoardContextProps = {
  boardsData: TBoards;
  addCard: (Card: TBoardCard) => void;
  removeCard: (Card: TBoardCard) => void;
  updateOrder: (Cards: TBoardCard) => void;
};

export type Actions = 'add' | 'remove' | 'updateOrder';

export type BoardAction = {
  type: Actions;
  payload: TBoardCard;
};
