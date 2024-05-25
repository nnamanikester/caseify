import * as React from "react";

interface BoxProps extends React.HTMLAttributes<any> {
  Element?: React.ElementType;
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ Element = "div", ...props }) => {
  return <Element {...props}>{props.children}</Element>;
};

export { Box };
