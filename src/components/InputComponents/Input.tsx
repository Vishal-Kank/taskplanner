import React from "react";
import { InputBase, InputBaseProps, styled } from "@mui/material";

type CustomVariant = "outlined" | "filled" | "standard";

// Extend base props with our own custom variant
interface CustomInputProps extends InputBaseProps {
  variant?: CustomVariant;
}

const InputStyled = styled(InputBase, {
  shouldForwardProp: (prop) => prop !== "variant", // Prevent variant from reaching DOM
})<CustomInputProps>(({ variant = "outlined" }) => ({
  border: "none",
  borderRadius: "8px",
  position: "relative",
  padding: "0.2rem 0.8rem",
  transition: "all 0.3s ease",

  "&::before": {
    display: "none",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "2px",
    width: "100%",
    backgroundColor: "#DDD",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s ease-in-out",
    pointerEvents: "none",
  },

  "&:focus-within::after": {
    transform: "scaleX(1)",
  },

  ...(variant === "outlined" && {
    border: "2px solid #DDD",
  }),
  ...(variant === "filled" && {
    backgroundColor: "#DDD",
    color: "#000",
  }),
  ...(variant === "standard" && {
    borderBottom: "2px solid #DDD",
    borderRadius: 0,
    padding: "0.2rem 0",
  }),
}));

const Input = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ ...props }, ref) => {
    return <InputStyled {...props} inputRef={ref} />;
  }
);

Input.displayName = "Input";

export default Input;
