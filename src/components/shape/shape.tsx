import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface IShapeProps {}

export const Shape: FC<IShapeProps> = () => {
  return (
    <div className={cn(styles.shape)}>
      <div className={cn(styles.plus)}></div>
      <div className={cn(styles.minus)}></div>
      <div className={cn(styles.cancel)}></div>
      <div className={cn(styles.check)}></div>
      <div className={cn(styles.grid)}></div>
      <div className={cn(styles.list)}></div>
      <div className={cn(styles.chevron, styles.chevronTop)}></div>
      <div className={cn(styles.chevron, styles.chevronLeft)}></div>
      <div className={cn(styles.chevron, styles.chevronRight)}></div>
      <div className={cn(styles.chevron, styles.chevronBottom)}></div>
      <div className={cn(styles.triangle, styles.triangleUp)}></div>
      <div className={cn(styles.triangle, styles.triangleDown)}></div>
      <div className={cn(styles.triangle, styles.triangleLeft)}></div>
      <div className={cn(styles.triangle, styles.triangleRight)}></div>
      <div className={cn(styles.triangle, styles.triangleTopLeft)}></div>
      <div className={cn(styles.triangle, styles.triangleTopRight)}></div>
      <div className={cn(styles.triangle, styles.triangleBottomLeft)}></div>
      <div className={cn(styles.triangle, styles.triangleBottomRight)}></div>
    </div>
  );
};
export default Shape;
