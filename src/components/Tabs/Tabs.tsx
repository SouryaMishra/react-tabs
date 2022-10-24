import { IBaseProps } from "../../baseProps";
import cn from "classnames";
import "./Tabs.scss";

export interface ITabsProps extends IBaseProps {}

export const Tabs = ({ className, children }: ITabsProps) => {
  return (
    <div role="tablist" className={cn("tabs", className)}>
      {children}
    </div>
  );
};
