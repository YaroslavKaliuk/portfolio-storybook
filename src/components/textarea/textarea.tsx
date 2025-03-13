import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface ITextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  title?: string;
  message?: string;
  isError?: boolean;
}

export const Textarea: FC<ITextareaProps> = ({
  title,
  message,
  isError,
  ...props
}) => {
  return (
    <label className={cn(styles.textarea, isError && styles.textareaError)}>
      <textarea {...props} />
      {title && <span className={styles.textarea__title}>{title}</span>}
      {message && <span className={styles.textarea__message}>{message}</span>}
    </label>
  );
};

export default Textarea;
