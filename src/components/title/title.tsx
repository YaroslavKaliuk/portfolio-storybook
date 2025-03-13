import React, { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface TitleProps {
  children: ReactNode;
}

export const Title: FC<TitleProps> = ({ children }) => {
  return <hgroup className={cn(styles.title)}>{children}</hgroup>;
};
