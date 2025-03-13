import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface ILoaderMaterialProps {
  size?: number;
}

export const LoaderMaterial: FC<ILoaderMaterialProps> = ({ size }) => {
  return (
    <div className={cn(styles.loaderMaterial)}>
      <svg
        viewBox="25 25 50 50"
        style={{ width: `${size}rem`, height: `${size}rem` }}
      >
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
  );
};

export default LoaderMaterial;
