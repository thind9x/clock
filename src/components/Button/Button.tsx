import React, { FunctionComponent } from "react";
import styles from "./Button.module.scss";
interface ButtonProps {
  type: "button" | "submit" | "reset";
  onClick?: (data: any) => void;
  text: string;
  background?: "green" | "palevioletred" | "greenyellow";
  disabled?: boolean;
  title?:string;
}

const Button: FunctionComponent<ButtonProps> = ({
  type,
  onClick,
  text,
  background,
  disabled,
    title
}) => {
  return (
    <>
      <button
        style={{ background: disabled?"red":background, color: "white", borderRadius: "8px" }}
        type={type}
        onClick={onClick}
        className={styles?.button}
        disabled={disabled}
        title={title}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
