import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface ProgressCircleProps {
  percent?: number;
  colorLine?: string;
  colorProgress?: string;
}

export const ProgressCircle: FC<ProgressCircleProps> = ({
  percent,
  colorLine,
  colorProgress,
}) => {
  return (
    <div
      className={cn(styles.progressCircle)}
      style={{
        backgroundImage: `conic-gradient(${colorProgress} calc(360deg - (360deg / 100 * (100 - ${percent}))), ${colorLine} 0deg)`,
      }}
    >
      <div className={styles.progressCircle__percent}>{percent}%</div>
    </div>
  );
};
