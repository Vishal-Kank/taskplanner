import { InputBase, styled } from "@mui/material";

type InputStyledProp = {
  variant?: "outlined" | "filled" | "standard";
};

const Input = styled(InputBase, {
  shouldForwardProp: (prop) => prop !== "variant",
})<InputStyledProp>(({ variant }) => ({
  border: "none",
  borderRadius: "8px",
  position: "relative",
  padding: "0.2rem 0.8rem",
  "&::before": {
    display: "none", // remove default underline
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
    background: "#DDD",
    color: "#000",
  }),
  ...(variant === "standard" && {
    borderBottom: "2px solid #DDD",
    borderRadius: 0,
    padding: "0.2rem 0",
  }),
}));

export default Input;
