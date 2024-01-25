import './App.css';
import { BoardContextProvider } from './context/Board/BoardContext';
import { Navbar } from './components/Navbar';
import { RouteDefinition } from './routes/routes';
export const App = () => {
  return (
    <>
      <Navbar />
      <BoardContextProvider>
        <RouteDefinition />
      </BoardContextProvider>
    </>
  );
};
