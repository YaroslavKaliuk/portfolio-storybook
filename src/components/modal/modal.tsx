import React, { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Icon from "@/icons";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface ModalProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  title?: string;
  footer?: ReactNode;
  children?: ReactNode;
}

export const Modal: FC<ModalProps> = ({
  children,
  id,
  title,
  footer,
  ...inputProps
}) => {
  return (
    <div className={cn(styles.modal)}>
      <input type="checkbox" name="modal" id={id} hidden {...inputProps} />
      <label className={styles.modal__bg} htmlFor={id}></label>
      <div className={styles.modal__content}>
        {title && (
          <div className={styles.modal__header}>
            <div className={styles.modal__title}>{title}</div>
            <label className={styles.modal__close} htmlFor={id} role="button">
              <Icon.IconXmark />
            </label>
          </div>
        )}
        {children && <div className={styles.modal__main}>{children}</div>}
        {footer && <div className={styles.modal__footer}>{footer}</div>}
      </div>
    </div>
  );
};
