import React, { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface ITitleProps {
  children: ReactNode;
}

export const Title: FC<ITitleProps> = ({ children }) => {
  return <hgroup className={cn(styles.title)}>{children}</hgroup>;
};

export default Title;
