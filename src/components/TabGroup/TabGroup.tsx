import React, { useMemo } from "react";
import { IBaseProps } from "../../baseProps";
import {
  ITabGroupContext,
  TabGroupContext,
} from "../../contexts/TabGroup.context";
import cn from "classnames";
import "./TabGroup.scss";
import { nanoid } from "nanoid";

export interface ITabGroupProps extends IBaseProps, ITabGroupContext {
  id?: string;
}

export const TabGroup = ({
  id,
  value,
  onChange,
  children,
  className,
  orientation = "horizontal",
}: ITabGroupProps) => {
  const [tabs, ...tabpanels] = React.Children.toArray(children);

  const classNames = cn(
    "tabgroup",
    {
      "tabgroup--horizontal": orientation === "horizontal",
      "tabgroup--vertical": orientation === "vertical",
    },
    className
  );

  const tabGroupId = useMemo(() => id || nanoid(5), [id]);

  return (
    <TabGroupContext.Provider
      value={{
        tabGroupId,
        value,
        onChange,
        orientation,
      }}
    >
      <div className={classNames}>
        {tabs}
        {tabpanels.map((tabPanel: any, index: number) =>
          React.cloneElement(tabPanel, {
            key: index,
            ariaLabelledBy: tabGroupId + "-tab-" + index,
            id: tabGroupId + "-tabpanel-" + index,
          })
        )}
      </div>
    </TabGroupContext.Provider>
  );
};
