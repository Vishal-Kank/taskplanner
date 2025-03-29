import { Box, Button, Card, styled, Typography } from "@mui/material";

type cardType = {
  id: string;
  status: string;
  title: string;
  date: string;
  description: string;
};

const Status = styled(Typography)({
  padding: "8px 0",
  fontWeight: "500",
  fontSize: "0.8rem",
  textAlign: "center",
  borderBottom: "2px dotted #DDD",
});
const Title = styled(Typography)({
  fontSize: "1.25rem",
  fontWeight: 700,
  color: "#3a3a3a",
});
const StartDate = styled(Typography)({
  fontSize: "0.7rem",
  fontWeight: 400,
  color: "#8c8c8c",
});
const Description = styled(Typography)({
  fontSize: "0.85rem",
  lineHeight: "1.25rem",
  fontWeight: 500,
  color: "#525252",
  marginTop: "10px",
});
const DetailsButton = styled(Button)({
  //   margin: "14px 0",
  fontSize: "0.8rem",
  textTransform: "capitalize",
  position: "absolute",
  bottom: "20px",
  left: 0,
  right: 0,
  width: "90%",
  margin: "auto",
});
const CardComponent = (cardProps: cardType) => {
  const { id, status, title, date, description } = cardProps;
  return (
    <Card
      key={id}
      sx={{
        width: "100%",
        maxWidth: "18rem",
        minWidth: "14rem",
        height: "20rem",
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
        borderRadius: "10px",
        border: "1px solid #DDD",
        position: "relative",
      }}
    >
      <Status textTransform={"capitalize"} children={status} />

      <Box padding={"8px 12px"}>
        <StartDate children={date} />
        <Title children={title} />

        <Description children={description} />

        <DetailsButton fullWidth variant={"contained"} size={"small"}>
          Details
        </DetailsButton>
      </Box>
    </Card>
  );
};
export default CardComponent;
