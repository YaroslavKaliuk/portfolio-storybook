import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface AvatarProps {
  href?: string;
  imgSrc?: string;
}

export const Avatar: FC<AvatarProps> = ({ href, imgSrc }) => {
  const Component = href ? "a" : "div";
  const props = href ? { href: `${href}` } : {};
  return (
    <Component className={cn(styles.avatar)} {...props}>
      {imgSrc && <img src={imgSrc} alt="image" loading="lazy" />}
      YK
    </Component>
  );
};
