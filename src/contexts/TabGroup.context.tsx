import React from "react";

export interface ITabGroupContext {
  tabGroupId?: string;
  value: string | number;
  onChange: (value: string | number, e: React.MouseEvent<HTMLElement>) => void;
  orientation?: "horizontal" | "vertical";
}

export const TabGroupContext =
  React.createContext<ITabGroupContext | null>(null);

export const useTabGroupContext = () => React.useContext(TabGroupContext);
