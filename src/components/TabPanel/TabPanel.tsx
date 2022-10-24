import { IBaseProps } from "../../baseProps";
import { ITabGroupContext, useTabGroupContext } from "../../contexts";
import cn from "classnames";
import "./TabPanel.scss";

export interface ITabPanelProps extends IBaseProps {
  value: string | number;
}

interface IClonedTabPanelProps {
  ariaLabelledBy?: string;
  id?: string;
}

export const TabPanel = ({
  value,
  children,
  className,
  ariaLabelledBy,
  id,
}: ITabPanelProps & IClonedTabPanelProps) => {
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
    <div
      id={id}
      className={classNames}
      aria-hidden={!isActive}
      aria-labelledby={ariaLabelledBy || undefined}
    >
      {children}
    </div>
  );
};
