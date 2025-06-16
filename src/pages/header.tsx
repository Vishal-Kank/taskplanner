import { Box, Typography } from "@mui/material";
import Share from "../container/Share";
import Profile from "../container/Profile";
import Search from "../container/Search";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const handleHomeRedirect = () => {
    navigate("/");
  };
  return (
    <Box
      padding={"16px 24px"}
      borderBottom={"1px solid #DDD"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={4}
      sx={{ backgroundColor: "#FFF" }}
    >
      <Typography
        sx={{ fontSize: "1rem", cursor: "pointer" }}
        flex={1}
        onClick={handleHomeRedirect}
      >
        Task Planner
      </Typography>

      <Box flex={3}>
        <Search />
      </Box>

      <Box
        flex={1}
        display={"inline-flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Share />
        <Profile />
      </Box>
    </Box>
  );
};

export default Header;
