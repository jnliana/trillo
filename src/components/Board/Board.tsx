import { useCallback } from "react";
import { mocksCard } from "../../mocks/card-mocks";
import { ColumnType, TCard } from "../Card/Card.type";
import { CardForm } from "../CardForm";
import { Column } from "../Column";

export const Board = () => {
  const { data: cards } = mocksCard.boards[0];

  const getColumns = useCallback((cards: TCard[]) => {
    return cards.reduce((columns: ColumnType[], card) => {
      if (!columns.includes(card.column)) {
        columns.push(card.column);
      }
      return columns;
    }, []);
  }, []);

  const getCards = (type: ColumnType) => {
    return cards.filter((card) => card.column === type);
  };

  const columns = getColumns(cards);
  const title = mocksCard.boards[0].name;

  return (
    <div className="board">
      <h1>{title}</h1>
      <div className="container">
        {columns.map((column) => (
          <Column
            title={column}
            cards={getCards(column)}
          />
        ))}
        <CardForm />
      </div>
    </div>
  );
};
