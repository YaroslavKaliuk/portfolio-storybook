import React, { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface FooterProps {
  children?: ReactNode;
}

export const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <footer className={cn(styles.footer)}>
      <div className={styles.footer__container}>{children}</div>
    </footer>
  );
};
