import React, { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Icon from "@/icons";

export interface DrawerProps {
  id: string;
  title?: string;
  footer?: ReactNode;
  children?: ReactNode;
  isLeftSide?: boolean;
  isLeftButton?: boolean;
  isRightButton?: boolean;
}

export const Drawer: FC<DrawerProps> = ({
  children,
  id,
  title,
  footer,
  isLeftSide,
  isLeftButton,
  isRightButton,
}) => {
  return (
    <div className={cn(styles.drawer, isLeftSide && styles.drawer__isLeftSide)}>
      <input type="checkbox" name="drawer" id={id} hidden />
      <label className={styles.drawer__bg} htmlFor={id}></label>
      <div className={styles.drawer__content}>
        {title && (
          <div className={styles.drawer__header}>
            {isLeftButton && (
              <div className={styles.drawer__headerLeft}>
                <button className={styles.drawer__back}>
                  <Icon.IconAngleLeft />
                </button>
              </div>
            )}
            {isRightButton && (
              <div className={styles.drawer__headerRight}>
                <label
                  className={styles.drawer__close}
                  htmlFor={id}
                  role="button"
                >
                  <Icon.IconXmark />
                </label>
              </div>
            )}
            <div className={styles.drawer__headerCenter}>
              <div className={styles.drawer__title}>{title}</div>
            </div>
          </div>
        )}
        {children && <div className={styles.drawer__main}>{children}</div>}
        {footer && <div className={styles.drawer__footer}>{footer}</div>}
      </div>
    </div>
  );
};
