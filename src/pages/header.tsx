import { Box, Typography } from "@mui/material";
import Share from "../container/Share";
import Profile from "../container/Profile";
import Search from "../container/Search";

const Header = () => {
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
      <Typography variant={"h4"} flex={1}>
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
