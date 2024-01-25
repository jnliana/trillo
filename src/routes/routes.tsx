import { Route, Routes } from 'react-router-dom';
import { Boards } from '../pages/Boards/Boards';
import { BoardsDetail } from '../pages/BoardsDetail';

export const RouteDefinition = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Boards />}
      />
      <Route
        path='/board-detail/:boardId'
        element={<BoardsDetail />}
      />
    </Routes>
  );
};
