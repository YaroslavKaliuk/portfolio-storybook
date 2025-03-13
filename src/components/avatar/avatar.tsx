import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface IAvatarProps {
  href?: string;
  imgSrc?: string;
}

export const Avatar: FC<IAvatarProps> = ({ href, imgSrc }) => {
  const Component = href ? "a" : "div";
  const props = href ? { href: `${href}` } : {};
  return (
    <Component className={cn(styles.avatar)} {...props}>
      {imgSrc && <img src={imgSrc} alt="image" loading="lazy" />}
      YK
    </Component>
  );
};

export default Avatar;
