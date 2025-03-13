import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Icon from "@/icons";

export interface BlankProps {}

export const Blank: FC<BlankProps> = () => {
  return (
    <div className={cn(styles.)}>
      <div className={styles.}></div>
    </div>
  );
};
