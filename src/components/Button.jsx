import React from "react";
import "./Button.scss";
import classNames from "classnames";

const Button = ({ children, size, color, outline, fullWidth, ...rest }) => {
  return (
    <button
      className={classNames("Button", size, color, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "midium",
  color: "blue",
};

export default Button;
