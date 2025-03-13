import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface ISelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  title?: string;
  message?: string;
  isError?: boolean;
}

export const Select: FC<ISelectProps> = ({
  title,
  message,
  isError,
  ...props
}) => {
  return (
    <label className={cn(styles.select, isError && styles.selectError)}>
      <span className={styles.select__selected}>
        <select {...props}>
          <option value="item1">Item1</option>
          <option value="item2">Item2</option>
          <option value="item3">Item3</option>
        </select>
      </span>
      {title && <span className={styles.select__title}>{title}</span>}
      {message && <span className={styles.select__message}>{message}</span>}
    </label>
  );
};

export default Select;
