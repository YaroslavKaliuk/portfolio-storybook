import React, { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface IHeaderProps {
  children?: ReactNode;
}

export const Header: FC<IHeaderProps> = ({ children }) => {
  return (
    <header className={cn(styles.header)}>
      <div className={styles.header__container}>{children}</div>
    </header>
  );
};

export default Header;
