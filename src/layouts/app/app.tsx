import React, { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface AppProps {
  children?: ReactNode;
}

export const App: FC<AppProps> = ({ children }) => {
  return <div className={cn(styles.app)}>{children}</div>;
};
