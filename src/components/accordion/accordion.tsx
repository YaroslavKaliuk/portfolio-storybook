import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface tem {
  id?: string;
  title?: string;
  content?: string;
  isDisabled?: boolean;
}

export interface AccordionProps {
  items?: Item[];
}

export const Accordion: FC<AccordionProps> = ({ items, ...props }) => {
  return (
    <div className={cn(styles.accordion)}>
      {items?.map((item, index) => (
        <div className={styles.accordion__item} key={index}>
          <input
            type="checkbox"
            name="checkbox"
            id={item.id}
            defaultChecked={false}
            disabled={item.isDisabled}
            {...props}
          />
          <label className={styles.accordion__header} htmlFor={item.id}>
            <span className={styles.accordion__title}>{item.title}</span>
            <span className={styles.accordion__icon}></span>
          </label>
          <div className={styles.accordion__main}>
            <div className={styles.accordion__content}>{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
