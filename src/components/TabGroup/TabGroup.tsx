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
        {React.Children.map(children, (child: any) => {
          return child;
        })}
      </div>
    </TabGroupContext.Provider>
  );
};
