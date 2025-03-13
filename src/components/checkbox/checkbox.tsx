import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface ICheckboxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title?: string;
}

export const Checkbox: FC<ICheckboxProps> = ({ title, ...props }) => {
  return (
    <label className={cn(styles.checkbox)}>
      <input type="checkbox" defaultChecked={false} {...props} />
      {title && <span className={styles.checkbox__title}>{title}</span>}
    </label>
  );
};

export default Checkbox;
