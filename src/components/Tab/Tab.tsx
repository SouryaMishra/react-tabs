import React, { forwardRef, useEffect } from "react";
import { IBaseProps } from "../../baseProps";
import { ITabGroupContext, useTabGroupContext } from "../../contexts";
import cn from "classnames";
import "./Tab.scss";

export interface ITabProps extends IBaseProps {
  value: string | number;
  disabled?: boolean;
}

interface IClonedTabProps {
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  ariaControls?: string;
  id?: string;
}

export const Tab = forwardRef<HTMLButtonElement, ITabProps>(
  (
    {
      value,
      className,
      children,
      onKeyDown,
      ariaControls,
      id,
      disabled,
    }: ITabProps & IClonedTabProps,
    ref
  ) => {
    const { value: currentValue, onChange }: ITabGroupContext =
      useTabGroupContext()!;
    const isActive = value === currentValue;
    const classNames = cn(
      "tab",
      {
        "tab--active": !disabled && isActive,
        "tab--disabled": disabled,
      },
      className
    );

    return (
      <button
        id={id}
        ref={ref}
        role="tab"
        className={classNames}
        onClick={(e) => onChange(value, e)}
        aria-selected={isActive}
        aria-controls={ariaControls}
        tabIndex={isActive ? 0 : -1}
        onKeyDown={onKeyDown}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);
