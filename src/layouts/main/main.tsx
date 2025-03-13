import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

interface MainProps {
  children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};
