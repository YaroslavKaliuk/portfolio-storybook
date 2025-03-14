import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface RangeProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isVertical?: boolean;
}

export const Range: FC<RangeProps> = ({ isVertical, ...props }) => {
  return (
    <div className={cn(styles.range, isVertical && styles.range__isVertical)}>
      <input type="range" {...props} />
    </div>
  );
};
