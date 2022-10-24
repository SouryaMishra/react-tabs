import React from "react";
import { IBaseProps } from "../../baseProps";
import {
  ITabGroupContext,
  TabGroupContext,
} from "../../contexts/TabGroup.context";

export interface ITabGroupProps extends IBaseProps, ITabGroupContext {}

export const TabGroup = ({ value, onChange, children }: ITabGroupProps) => {
  const [tabs, ...tabpanels] = React.Children.toArray(children);
  return (
    <TabGroupContext.Provider
      value={{
        value,
        onChange,
      }}
    >
      <div>
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
