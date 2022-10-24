import { IBaseProps } from "../../baseProps";
import { ITabGroupContext, useTabGroupContext } from "../../contexts";
import cn from "classnames";
import "./Tab.scss";

export interface ITabProps extends IBaseProps {
  value: string | number;
}

export const Tab = ({ value, className, children }: ITabProps) => {
  const { value: currentValue, onChange }: ITabGroupContext =
    useTabGroupContext()!;
  const isActive = value === currentValue;
  const classNames = cn(
    "tab",
    {
      "tab--active": isActive,
    },
    className
  );
  return (
    <button
      role="tab"
      className={classNames}
      onClick={(e) => onChange(value, e)}
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
    >
      {children}
    </button>
  );
};
