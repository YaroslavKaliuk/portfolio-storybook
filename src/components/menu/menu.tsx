import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Icon from "@/icons";

export interface IMenuProps {}

export const Menu: FC<IMenuProps> = () => {
  return (
    <nav className={cn(styles.menu)}>
      <input type="checkbox" name="menu" id="menu" hidden />
      <span className={styles.menu__header}>
        <label className={styles.menu__close} htmlFor="menu">
          <Icon.IconXmark />
        </label>
      </span>
      <ul className={cn(styles.menu__ul, styles.menu__ulFirst)}>
        <li className={cn(styles.menu__li, styles.menu__liFirst)}>
          <a
            className={cn(styles.menu__a, styles.menu__aFirst)}
            href="javascript:void(0);"
          >
            <i>
              <Icon.IconEye />
            </i>
            <bdi>
              <strong>Level-1</strong>
            </bdi>
            <i>
              <Icon.IconAngleDown />
            </i>
          </a>
          <ul className={cn(styles.menu__ul, styles.menu__ulSecond)}>
            <li className={cn(styles.menu__li, styles.menu__liSecond)}>
              <a
                className={cn(styles.menu__a, styles.menu__aSecond)}
                href="javascript:void(0);"
              >
                <i>
                  <Icon.IconEye />
                </i>
                <bdi>
                  <strong>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nulla, praesentium!
                  </strong>
                  <small>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nulla, praesentium!
                  </small>
                </bdi>
                <i>
                  <Icon.IconAngleDown />
                </i>
              </a>
              <ul className={cn(styles.menu__ul, styles.menu__ulThird)}>
                <li className={cn(styles.menu__li, styles.menu__liThird)}>
                  <a
                    className={cn(styles.menu__a, styles.menu__aThird)}
                    href="javascript:void(0);"
                  >
                    <i>
                      <Icon.IconEye />
                    </i>
                    <bdi>
                      <strong>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nulla, praesentium!
                      </strong>
                      <small>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nulla, praesentium!
                      </small>
                    </bdi>
                    <i>
                      <Icon.IconAngleDown />
                    </i>
                  </a>
                </li>
              </ul>
            </li>
            <li className={cn(styles.menu__li, styles.menu__liSecond)}>
              <a
                className={cn(styles.menu__a, styles.menu__aSecond)}
                href="javascript:void(0);"
              >
                <i>
                  <Icon.IconEye />
                </i>
                <bdi>
                  <strong>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nulla, praesentium!
                  </strong>
                  <small>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nulla, praesentium!
                  </small>
                </bdi>
                <i>
                  <Icon.IconAngleDown />
                </i>
              </a>
              <ul className={cn(styles.menu__ul, styles.menu__ulThird)}>
                <li className={cn(styles.menu__li, styles.menu__liThird)}>
                  <a
                    className={cn(styles.menu__a, styles.menu__aThird)}
                    href="javascript:void(0);"
                  >
                    <i>
                      <Icon.IconEye />
                    </i>
                    <bdi>
                      <strong>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nulla, praesentium!
                      </strong>
                      <small>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nulla, praesentium!
                      </small>
                    </bdi>
                    <i>
                      <Icon.IconAngleDown />
                    </i>
                  </a>
                </li>
              </ul>
            </li>
            <li className={cn(styles.menu__li, styles.menu__liSecond)}>
              <a
                className={cn(styles.menu__a, styles.menu__aSecond)}
                href="javascript:void(0);"
              >
                <i>
                  <Icon.IconEye />
                </i>
                <bdi>
                  <strong>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nulla, praesentium!
                  </strong>
                  <small>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nulla, praesentium!
                  </small>
                </bdi>
                <i>
                  <Icon.IconAngleDown />
                </i>
              </a>
              <ul className={cn(styles.menu__ul, styles.menu__ulThird)}>
                <li className={cn(styles.menu__li, styles.menu__liThird)}>
                  <a
                    className={cn(styles.menu__a, styles.menu__aThird)}
                    href="javascript:void(0);"
                  >
                    <i>
                      <Icon.IconEye />
                    </i>
                    <bdi>
                      <strong>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nulla, praesentium!
                      </strong>
                      <small>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nulla, praesentium!
                      </small>
                    </bdi>
                    <i>
                      <Icon.IconAngleDown />
                    </i>
                  </a>
                </li>
                <li className={cn(styles.menu__li, styles.menu__liThird)}>
                  <a
                    className={cn(styles.menu__a, styles.menu__aThird)}
                    href="javascript:void(0);"
                  >
                    <i>
                      <Icon.IconEye />
                    </i>
                    <bdi>
                      <strong>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nulla, praesentium!
                      </strong>
                      <small>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nulla, praesentium!
                      </small>
                    </bdi>
                    <i>
                      <Icon.IconAngleDown />
                    </i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className={cn(styles.menu__li, styles.menu__liFirst)}>
          <a
            className={cn(styles.menu__a, styles.menu__aFirst)}
            href="javascript:void(0);"
          >
            <i>
              <Icon.IconEye />
            </i>
            <bdi>
              <strong>Level-1</strong>
            </bdi>
            <i>
              <Icon.IconAngleDown />
            </i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
