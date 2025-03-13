import React, { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface IAppProps {
  children?: ReactNode;
}

export const App: FC<IAppProps> = ({ children }) => {
  return <div className={cn(styles.app)}>{children}</div>;
};

export default App;
