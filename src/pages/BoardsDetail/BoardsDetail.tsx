import { Board } from '../../components/Board';
import { CardForm } from '../../components/CardForm';
import './BoardsDetail.css';

export const BoardsDetail = () => {
  return (
    <div className='board-detail-container'>
      <Board />
      <CardForm />
    </div>
  );
};
