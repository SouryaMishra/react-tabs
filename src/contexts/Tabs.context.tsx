import React from "react";

export const TabsContext = React.createContext(null);

export const useTabsContext = () => React.useContext(TabsContext);
