import './Column.css';
import { Card } from '../Card';
import { TCard } from '../Card/Card.type';
import { useBoard } from '../../hooks/useBoard';

type TColumnProps = {
  title: string;
  cards: TCard[];
};
export const Column = ({ title, cards }: TColumnProps) => {
  const { removeCard } = useBoard();
  return (
    <div className="column">
      <div className="column-header">{title}</div>
      <div className="column-body">
        {cards.map((item) => (
          <Card
            key={item.id}
            card={item}
            removeCard={removeCard}
          />
        ))}
      </div>
      <div className="column-footer"></div>
    </div>
  );
};
