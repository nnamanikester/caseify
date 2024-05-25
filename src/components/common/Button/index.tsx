import * as React from "react";
import cx from "classnames";
import "./style.scss";

type ContentProps =
  | { text: string; children?: never }
  | { text?: never; children: React.ReactElement };

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "white";
  outline?: boolean;
  className?: string;
}

type Props = ButtonProps & ContentProps;

const Button: React.FC<Props> = (props) => {
  return (
    <>
      <button
        {...props}
        className={cx({ button: true, "button--outline": props.outline })}
      >
        {props.text ?? props.children}
      </button>
    </>
  );
};

export { Button };
