import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Icon from "@/icons";

export interface I_BlankProps {}

export const _Blank: FC<I_BlankProps> = () => {
  return (
    <div className={cn(styles.)}>
      <div className={styles.}></div>
    </div>
  );
};

export default _Blank;
