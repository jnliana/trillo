import { TBoardCard } from "../../context/Board/BoardContext.type";

export type ColumnType = "Pending" | "Doing" | "Done";

export type TLabel = {
  id: string;
  label: string;
};

export type TCard = {
  id: string;
  name: string;
  number: number;
  description: string;
  assigned: string;
  column: ColumnType;
  labels?: TLabel[];
};

export type TCardProps = {
  card: TCard;
  removeCard: (data: TBoardCard) => void;
};
