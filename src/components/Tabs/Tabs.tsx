import React, { useEffect, useRef } from "react";
import { IBaseProps } from "../../baseProps";
import cn from "classnames";
import "./Tabs.scss";

export interface ITabsProps extends IBaseProps {}

export const Tabs = ({ className, children }: ITabsProps) => {
  const tabsRef = useRef<HTMLElement[]>([]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const tabsLength = tabsRef.current.length;
    if (e.key === "ArrowRight") {
      const index = tabsRef.current.findIndex((tab) => tab === e.target);

      index > -1 && index < tabsLength - 1
        ? tabsRef.current[index + 1].focus()
        : tabsRef.current[0].focus();
    }
    if (e.key === "ArrowLeft") {
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
  return (
    <div role="tablist" className={cn("tabs", className)}>
      {React.Children.map(children, (tab: any, index: number) => {
        return React.cloneElement(tab, {
          ref: (el: HTMLElement) => (tabsRef.current[index] = el),
          onKeyDown,
          ariaControls: "tabpanel-" + index,
          id: "tab-" + index,
        });
      })}
    </div>
  );
};
