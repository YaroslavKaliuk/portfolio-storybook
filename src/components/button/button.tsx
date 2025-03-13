import React, {
  FC,
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title?: string;
  htmlFor?: string;
  isLabel?: boolean;
  onClick?: () => void;
  variant?: "Primary" | "Secondary";
}

export const Button: FC<ButtonProps> = ({
  onClick,
  title,
  htmlFor,
  isLabel,
  variant = "Primary",
  ...props
}) => {
  return (
    <>
      {isLabel ? (
        <label
          className={cn(styles.button)}
          htmlFor={htmlFor}
          role="button"
          tabIndex={0}
        >
          {title}
        </label>
      ) : (
        <button
          className={cn(styles.button, styles.button + variant)}
          onClick={onClick}
          {...props}
        >
          {title}
        </button>
      )}
    </>
  );
};

export default Button;
