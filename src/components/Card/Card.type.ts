export type ColumnType = "Pending" | "Doing" | "Done";

export type TLabel = {
  id: string;
  label: string;
};

export type TCard = {
  id: number;
  labels: TLabel[];
  name: string;
  number: number;
  description: string;
  assigned: string;
  column: ColumnType;
};

export type TCardProps = {
  card: TCard;
};
