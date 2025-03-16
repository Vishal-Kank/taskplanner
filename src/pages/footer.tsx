import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box bottom={0} paddingY={"16px"} position={"absolute"} width={"100%"}>
      <Typography textAlign={"center"} variant={"subtitle2"} width={"inherit"}>
        Developed by: Vishal Kank
      </Typography>
    </Box>
  );
};

export default Footer;
