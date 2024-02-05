import { useSortable } from '@dnd-kit/sortable';
import './Card.css';
import { TCardProps } from './Card.type';

export const Card = ({ card, removeCard }: TCardProps) => {
  const { labels, name, number, assigned, id } = card;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
    });

  const dnDStyles = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition,
  };
  return (
    <div
      className='card'
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={dnDStyles}
    >
      <button
        className='card-button'
        onClick={() =>
          removeCard({
            id: 1,
            card: card,
          })
        }
      >
        x
      </button>
      <div className='header-card'>
        {labels?.map((label) => (
          <span key={label.id}>{label.label}</span>
        ))}
      </div>
      <div className='header-body'>
        <p>{name}</p>
      </div>
      <div className='header-footer'>
        <span>Card number: {number}</span>
        <span className='header-footer-person'>{assigned}</span>
      </div>
    </div>
  );
};
