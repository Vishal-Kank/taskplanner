import { Box, Grid2, Typography, useMediaQuery, useTheme } from "@mui/material";
import TaskCards from "../../components/Cards/TaskCards";

const DashboardContainer = () => {
  const theme = useTheme();
  const normalScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid2 container gap={3}>
      {cardList.map((cardGroup) => (
        <Grid2
          key={cardGroup.type}
          size={
            (normalScreen && "grow") || {
              xs: 12,
              sm: 12,
              md: 4,
              lg: 3,
              xl: 3,
            }
          }
        >
          {/* CATEGORY OF TASK (Open | In Progress | Done) */}
          <Typography
            border={"1px solid #DDD"}
            borderRadius={"6px"}
            paddingY={"6px"}
            textAlign={"center"}
            textTransform={"uppercase"}
            fontWeight={500}
            children={cardGroup.type}
            sx={{
              background:
                (cardGroup.type === "open" && "#add8e6") ||
                (cardGroup.type === "in progress" && "#ffd700") ||
                "#90ee90",
            }}
          />

          {/* LIST OF TASK IN CARDS */}
          <Box display={"flex"} flexWrap={"wrap"} gap={1} marginTop={2}>
            {cardGroup.list.map((card) => (
              <TaskCards
                key={card.id}
                id={card.id}
                status={card.status}
                title={card.title}
                date={card.creationDate}
                description={card.description}
              />
            ))}
          </Box>
        </Grid2>
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
      {
        id: "6",
        status: "done",
        title: "Create Card component for task",
        creationDate: "07/Mar/2025",
        description:
          "Create a component which will display cards. Responsive card with info like Status, Title, Description and a Details Button which will open task details to edit or update task.",
      },
    ],
  },
];
