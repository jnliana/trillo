import { createContext } from "react";
import {
  TBoardContextProps,
  TBoardContextProviderProps,
} from "./BoardContext.type";

export const BoardContext = createContext({} as TBoardContextProps);
export const BoardContextProvider = ({
  children,
}: TBoardContextProviderProps) => (
  <BoardContext.Provider value={{}}>{children}</BoardContext.Provider>
);
