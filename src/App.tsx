import "./App.css";
import { Board } from "./components/Board/Board";
import { BoardContextProvider } from "./context/Board/BoardContext";
export const App = () => {
  return (
    <BoardContextProvider>
      <Board />
    </BoardContextProvider>
  );
};
