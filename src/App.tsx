import "./App.css";
import { Card } from "./components/Card";
import { Column } from "./components/Column";
import { mocksCard } from "./mocks/card-mocks";
export const App = () => {
  const cards = mocksCard.data;
  return (
    <>
      <div className="container">
        <Column>
          {cards.map((item) => (
            <Card card={item} />
          ))}
        </Column>
        <Column>
          {cards.map((item) => (
            <Card card={item} />
          ))}
        </Column>
        <Column>
          {cards.map((item) => (
            <Card card={item} />
          ))}
        </Column>
      </div>
    </>
  );
};
