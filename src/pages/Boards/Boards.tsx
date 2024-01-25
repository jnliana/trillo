import { Link } from 'react-router-dom';
import { useBoard } from '../../hooks/useBoard';

export const Boards = () => {
  const { getBoards } = useBoard();
  const boardsList = getBoards();
  return (
    <>
      <h1>boards</h1>
      {boardsList.map((board) => (
        <div key={board.id}>
          <Link to={`board-detail/${board.id}`}>{board.name}</Link>
        </div>
      ))}
    </>
  );
};
