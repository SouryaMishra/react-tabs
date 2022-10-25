import React from "react";
import { IBaseProps } from "../../baseProps";
import {
  ITabGroupContext,
  TabGroupContext,
} from "../../contexts/TabGroup.context";
import cn from "classnames";
import "./TabGroup.scss";

export interface ITabGroupProps extends IBaseProps, ITabGroupContext {}

export const TabGroup = ({
  value,
  onChange,
  children,
  className,
  alignment = "horizontal",
}: ITabGroupProps) => {
  const [tabs, ...tabpanels] = React.Children.toArray(children);

  const classNames = cn(
    "tabgroup",
    {
      "tabgroup--horizontal": alignment === "horizontal",
      "tabgroup--vertical": alignment === "vertical",
    },
    className
  );
  return (
    <TabGroupContext.Provider
      value={{
        value,
        onChange,
        alignment,
      }}
    >
      <div className={classNames}>
        {tabs}
        {tabpanels.map((tabPanel: any, index: number) =>
          React.cloneElement(tabPanel, {
            key: index,
            ariaLabelledBy: "tab-" + index,
            id: "tabpanel-" + index,
          })
        )}
      </div>
    </TabGroupContext.Provider>
  );
};
