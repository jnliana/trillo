import './Column.css';
import { Card } from '../Card';
import { TCard } from '../Card/Card.type';
import { useBoard } from '../../hooks/useBoard';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

type TColumnProps = {
  title: string;
  cards: TCard[];
};
export const Column = ({ title, cards }: TColumnProps) => {
  const { removeCard } = useBoard();
  return (
    <div className='column'>
      <div className='column-header'>{title}</div>
      <div className='column-body'>
        <SortableContext
          items={cards}
          strategy={verticalListSortingStrategy}
        >
          {cards.map((item) => (
            <Card
              key={item.id}
              card={item}
              removeCard={removeCard}
            />
          ))}
        </SortableContext>
      </div>
      <div className='column-footer'></div>
    </div>
  );
};
