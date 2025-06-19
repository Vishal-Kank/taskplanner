import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import TaskCards from "../../components/Cards/TaskCards";
import { cardList, CardListType } from '@api/data';

const DashboardContainer = () => {
  const theme = useTheme();
  const normalScreen = useMediaQuery(theme.breakpoints.up("md"));

  const cardListData: CardListType[] = cardList;

  return (
    <Grid container gap={3}>
      {cardListData.map((cardGroup: CardListType) => (
        <Grid
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
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardContainer;
