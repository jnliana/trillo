import { useCallback } from 'react';
import { ColumnType, TCard } from '../Card/Card.type';
import { CardForm } from '../CardForm';
import { Column } from '../Column';
import { useBoard } from '../../hooks/useBoard';
import { useParams } from 'react-router-dom';

export const Board = () => {
  const { boardId } = useParams();
  const { getBoard } = useBoard();
  const boardsData = getBoard(Number(boardId));
  if (!boardsData) return <h2>Tablero sin data</h2>;

  const { data: cards, name } = boardsData;

  const getColumns = useCallback((cards: TCard[]) => {
    return cards.reduce((columns: ColumnType[], card) => {
      if (!columns.includes(card.column)) {
        columns.push(card.column);
      }
      return columns;
    }, []);
  }, []);

  const getCardsByColumnType = useCallback(
    (type: ColumnType) => {
      return cards.filter((card) => card.column === type);
    },
    [cards]
  );

  const columns = getColumns(cards);

  return (
    <div className='board'>
      <h1>{name}</h1>
      <div className='container'>
        {columns.map((column) => (
          <Column
            key={column}
            title={column}
            cards={getCardsByColumnType(column)}
          />
        ))}
        <CardForm />
      </div>
    </div>
  );
};
