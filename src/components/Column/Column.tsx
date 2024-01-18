import { ReactNode } from "react";
import "./Column.css";

type TColumnProps = {
  children: ReactNode;
};
export const Column = ({ children }: TColumnProps) => (
  <div className="column">{children}</div>
);
