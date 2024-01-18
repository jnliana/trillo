import "./Card.css";
type TCard = {
  id: number;
  labels: string[];
  name: string;
  number: number;
  assigned: string;
};

type TCardProps = {
  card: TCard;
};

export const Card = ({ card }: TCardProps) => {
  const { labels, name, number, assigned } = card;
  return (
    <div className="card">
      <div className="header-card">
        {labels.map((label, index) => (
          <span key={index}>{label}</span>
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
