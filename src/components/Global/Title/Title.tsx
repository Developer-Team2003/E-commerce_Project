import classNames from "classnames";
import React, { Children } from "react";
type titleProps = {
  title?: string;
  subtitle?: string;
  classTitle?: string;
  classSubTitle?: string;
  classnameParent?: string;
  children?: any;
};
const Title = ({
  title,
  subtitle,
  classTitle,
  classSubTitle,
  classnameParent,
  children,
}: titleProps) => {
  return (
    <div className={classnameParent}>
      <span className={classNames(classTitle)}>{title}</span>

      {subtitle && (
        <p className={classNames("text-gray-500", classSubTitle)}>{subtitle}</p>
      )}
      {children}
    </div>
  );
};

export default Title;
