import { Link } from 'react-router-dom';
import { useBoard } from '../../hooks/useBoard';
import './Boards.css';

export const Boards = () => {
  const { getBoards } = useBoard();
  const boardsList = getBoards();
  return (
    <div className='board-wrapper'>
      <h1>My Boards</h1>
      <div className='board-container'>
        {boardsList.map((board) => (
          <Link
            key={board.id}
            className='board-card'
            to={`board-detail/${board.id}`}
          >
            {board.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
