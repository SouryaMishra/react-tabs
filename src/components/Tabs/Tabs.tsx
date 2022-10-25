import React, { useRef } from "react";
import { IBaseProps } from "../../baseProps";
import { useTabGroupContext } from "../../contexts";
import cn from "classnames";
import "./Tabs.scss";

export interface ITabsProps extends IBaseProps {}

export const Tabs = ({ className, children }: ITabsProps) => {
  const tabsRef = useRef<HTMLElement[]>([]);
  const { alignment } = useTabGroupContext()!;
  let nextKey = "",
    prevKey = "";

  if (alignment === "vertical") {
    nextKey = "ArrowDown";
    prevKey = "ArrowUp";
  } else {
    nextKey = "ArrowRight";
    prevKey = "ArrowLeft";
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const tabsLength = tabsRef.current.length;
    if (e.key === nextKey) {
      const index = tabsRef.current.findIndex((tab) => tab === e.target);

      index > -1 && index < tabsLength - 1
        ? tabsRef.current[index + 1].focus()
        : tabsRef.current[0].focus();
    }
    if (e.key === prevKey) {
      const index = tabsRef.current.findIndex((tab) => tab === e.target);

      index > -1 && index > 0
        ? tabsRef.current[index - 1].focus()
        : tabsRef.current[tabsLength - 1].focus();
    }
    if (e.key === "Home") {
      e.preventDefault(); // To prevent page from scrolling up
      const index = tabsRef.current.findIndex((tab) => tab === e.target);
      index > -1 && tabsRef.current[0].focus();
    }
    if (e.key === "End") {
      e.preventDefault(); // To prevent page from scrolling down
      const index = tabsRef.current.findIndex((tab) => tab === e.target);
      index > -1 && tabsRef.current[tabsLength - 1].focus();
    }
  };

  console.log(alignment);

  const classNames = cn(
    "tabs",
    {
      "tabs--horizontal": alignment === "horizontal",
      "tabs--vertical": alignment === "vertical",
    },
    className
  );
  return (
    <div role="tablist" className={classNames}>
      {React.Children.map(children, (tab: any, index: number) => {
        return React.cloneElement(tab, {
          ref: (el: HTMLButtonElement) => {
            if (el && !el.disabled) tabsRef.current.push(el);
          },
          onKeyDown,
          ariaControls: "tabpanel-" + index,
          id: "tab-" + index,
        });
      })}
    </div>
  );
};
