import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface ISwitchProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Switch: FC<ISwitchProps> = ({ ...props }) => {
  return (
    <label className={cn(styles.switch)}>
      <input type="checkbox" defaultChecked={false} {...props} />
    </label>
  );
};

export default Switch;
