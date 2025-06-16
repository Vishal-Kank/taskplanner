import { CardDetailsType } from "@api/data";
import { Box, Button, Typography } from "@mui/material";

type TaskDetailsContainerPropsType = {
  details?: CardDetailsType;
};

const TaskDetailsContainer = (props: TaskDetailsContainerPropsType) => {
  const { details } = props;
  return (
    <Box>
      <Typography variant="body2">{details?.date}</Typography>
      <Typography variant="body2" textTransform={"uppercase"} marginY={1}>
        {details?.status}
      </Typography>

      <Typography variant="h5">{details?.title}</Typography>

      <Typography variant="h6" marginTop={2}>
        Description
      </Typography>
      <Typography variant="caption">{details?.description}</Typography>

      <Button variant="outlined" size="small" fullWidth>
        Update Details
      </Button>
    </Box>
  );
};

export default TaskDetailsContainer;
