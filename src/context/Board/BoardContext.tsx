import { createContext } from "react";
import {
  TBoardContextProps,
  TBoardContextProviderProps,
} from "./BoardContext.type";
import { useBoardReducer } from "./reducer/useBoardReducer";
import { Outlet } from "react-router-dom";

export const BoardContext = createContext({} as TBoardContextProps);
export const BoardContextProvider = ({
  children,
}: TBoardContextProviderProps) => {
  const { boardsData, addCard, removeCard } = useBoardReducer();
  return (
    <BoardContext.Provider value={{ boardsData, addCard, removeCard }}>
      {children}
      <Outlet />
    </BoardContext.Provider>
  );
};
