import './Card.css';
import { TCardProps } from './Card.type';

export const Card = ({ card, removeCard }: TCardProps) => {
  const { labels, name, number, assigned } = card;
  return (
    <div className="card">
      <button
        onClick={() =>
          removeCard({
            id: 1,
            card: card,
          })
        }
      >
        x
      </button>
      <div className="header-card">
        {labels?.map((label) => (
          <span key={label.id}>
            {label.id}-{label.label}
          </span>
        ))}
      </div>
      <div className="header-body">
        <p>{name}</p>
      </div>
      <div className="header-footer">
        <span>{number}</span>
        <span className="header-footer-person">{assigned}</span>
      </div>
    </div>
  );
};
