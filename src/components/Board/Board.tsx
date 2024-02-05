import { useCallback } from 'react';
import { ColumnType, TCard } from '../Card/Card.type';
import { Column } from '../Column';
import { useBoard } from '../../hooks/useBoard';
import { useParams } from 'react-router-dom';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';

import './Board.css';
import { arrayMove } from '@dnd-kit/sortable';

export const Board = () => {
  const { boardId } = useParams();
  const boardIdFormatted = Number(boardId);
  const { getBoard, updateOrder } = useBoard();
  const boardsData = getBoard(boardIdFormatted);
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

  const handleDrag = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    const oldPositionCard = cards.findIndex((card) => card.id === active.id);
    const newPositionCard = cards.findIndex((card) => card.id === over.id);
    updateOrder({
      id: boardIdFormatted,
      cards: arrayMove(cards, oldPositionCard, newPositionCard),
    });
  };

  return (
    <div className='board'>
      <h1>{name}</h1>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDrag}
      >
        <div className='container'>
          {columns.map((column) => (
            <Column
              key={column}
              title={column}
              cards={getCardsByColumnType(column)}
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
};
