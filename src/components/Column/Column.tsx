import { ReactNode } from "react";
import "./Column.css";

type TColumnProps = {
  title: string;
  children: ReactNode;
};
export const Column = ({ title, children }: TColumnProps) => (
  <div className="column">
    <div className="column-header">{title}</div>
    <div className="column-body">{children}</div>
    <div className="column-footer"></div>
  </div>
);
