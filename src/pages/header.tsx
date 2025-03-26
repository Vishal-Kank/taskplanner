import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box padding={"16px 24px"} borderBottom={'1px solid #DDD'}>
      <Typography variant={"h4"}>Task Planner</Typography>
    </Box>
  );
};

export default Header;
