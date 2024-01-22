import "./Column.css";
import { Card } from "../Card";
import { TCard } from "../Card/Card.type";

type TColumnProps = {
  title: string;
  cards: TCard[];
};
export const Column = ({ title, cards }: TColumnProps) => (
  <div className="column">
    <div className="column-header">{title}</div>
    <div className="column-body">
      {cards.map((item) => (
        <Card card={item} />
      ))}
    </div>
    <div className="column-footer"></div>
  </div>
);
