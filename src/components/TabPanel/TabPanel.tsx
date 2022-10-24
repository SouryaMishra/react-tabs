import { IBaseProps } from "../../baseProps";
import { ITabGroupContext, useTabGroupContext } from "../../contexts";
import cn from "classnames";
import "./TabPanel.scss";

export interface ITabPanelProps extends IBaseProps {
  value: string | number;
}

export const TabPanel = ({ value, children, className }: ITabPanelProps) => {
  const { value: currentValue }: ITabGroupContext = useTabGroupContext()!;
  const isActive = value === currentValue;
  const classNames = cn(
    "tabpanel",
    {
      "tabpanel--active": isActive,
    },
    className
  );

  return (
    <div className={classNames} aria-hidden={!isActive}>
      {children}
    </div>
  );
};
