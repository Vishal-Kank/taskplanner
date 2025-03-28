import {
  Box,
  Button,
  Card,
  Grid2,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

type cardType = {
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
  margin: "14px 0",
  fontSize: "0.8rem",
  textTransform: "capitalize",
});
const CardComponent = (cardProps: cardType) => {
  const { status, title, date, description } = cardProps;
  return (
    <Card
      sx={{
        // width: "100%",
        minWidth: "10rem",
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
        borderRadius: "10px",
        border: "1px solid #DDD",
      }}
    >
      <Status textTransform={"capitalize"} children={status} />

      <Box padding={"8px 12px"}>
        <StartDate children={date} />
        <Title children={title} />

        <Description children={description} />

        <DetailsButton fullWidth variant={"outlined"} size={"small"}>
          Details
        </DetailsButton>
      </Box>
    </Card>
  );
};

const DashboardContainer = () => {
  const theme = useTheme();
  const normalScreen = useMediaQuery(theme.breakpoints.up("lg"));
  console.log(theme.breakpoints.up("lg"), normalScreen);
  return (
    <Grid2 container gap={3}>
      {cardList.map((cardGroup) => (
        <>
          <Grid2
            key={cardGroup.type}
            size={
              (normalScreen && "grow") || { xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }
            }
          >
            {/* CATEGORY OF TASK (Open | In Progress | Done) */}
            <Typography
              border={"1px solid #DDD"}
              borderRadius={"6px"}
              paddingY={"6px"}
              textAlign={"center"}
              textTransform={"uppercase"}
              sx={{ backgroundColor: "#FFF" }}
              children={cardGroup.type}
            />

            {/* LIST OF TASK IN CARDS */}
            <Box
              key={cardGroup.type + "list"}
              // container
              gap={2}
              marginTop={2}
              display={"flex"}
            >
              {cardGroup.list.map((card) => (
                // <Grid2
                //   key={card.id}
                //   size={{ xs: 12, sm: 12, md: 12, lg: 5, xl: 5 }}
                // >
                  <CardComponent
                    status={card.status}
                    title={card.title}
                    date={card.creationDate}
                    description={card.description}
                  />
                // </Grid2>
              ))}
            </Box>
          </Grid2>
        </>
      ))}
    </Grid2>
  );
};

export default DashboardContainer;

type CardListType = {
  type: string;
  list: {
    id: string;
    status: string;
    title: string;
    creationDate: string;
    description: string;
  }[];
};
const cardList: CardListType[] = [
  {
    type: "open",
    list: [
      {
        id: "1",
        status: "open",
        title: "Create create task button",
        creationDate: "22/Mar/2025",
        description:
          "Create a button which will open on create task page. Where we can create a task.",
      },
      {
        id: "2",
        status: "open",
        title: "Design create task page",
        creationDate: "22/Mar/2025",
        description:
          "Create a page which will open on click of create task button. Where we can create a task with all the details.",
      },
    ],
  },
  {
    type: "in progress",
    list: [
      {
        id: "3",
        status: "in progress",
        title: "Create Layout for Dashboard",
        creationDate: "14/Mar/2025",
        description:
          "Create a page which will display task`s in their current status.",
      },
    ],
  },
  {
    type: "done",
    list: [
      {
        id: "4",
        status: "done",
        title: "Create a React Project using Vite",
        creationDate: "07/Mar/2025",
        description: "Create a React JS project using Vite.",
      },
      {
        id: "5",
        status: "done",
        title: "Install required dependencies in project",
        creationDate: "07/Mar/2025",
        description:
          "Install packages like react router, material ui, etc to get started with project.",
      },
    ],
  },
];
