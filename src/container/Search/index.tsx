import { InputBase, styled } from "@mui/material";

type InputStyledProp = {
  variant?: "outlined" | "filled" | "standard";
};

const InputStyled = styled(InputBase, {
  shouldForwardProp: (prop) => prop !== "variant",
})<InputStyledProp>(({ variant }) => ({
  border: "none",
  position: "relative",
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
    padding: "0.2rem 0.8rem",
    borderRadius: "8px",
  }),
  ...(variant === "filled" && {
    background: "#DDD",
    padding: "0.2rem 0.8rem",
    borderRadius: "8px",
    color: "#000",
  }),
  ...(variant === "standard" && {
    borderBottom: "2px solid #DDD",
    padding: "0.2rem 0",
  }),
}));

const Search = () => {
  return (
    <InputStyled fullWidth variant={"outlined"} placeholder="Search Task" />
  );
};

export default Search;

// Pendding...........
// Apply throttling
// Display results (need to design and think)
// clean the code
// apply state