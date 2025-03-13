import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface SwitcherProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Switcher: FC<SwitcherProps> = ({ ...props }) => {
  return (
    <label className={cn(styles.switcher)}>
      <input type="checkbox" defaultChecked={false} {...props} />
    </label>
  );
};
