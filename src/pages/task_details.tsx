import { cardDetails, CardDetailsType } from "@api/data";
import TaskDetailsContainer from "@container/TaskDetailsContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const TaskDetails = () => {
  const { taskID, status } = useParams();

  const getCardDetails = (): CardDetailsType => {
    return cardDetails;
  };

  const [details, setDetails] = useState<CardDetailsType>();
  useEffect(() => {
    if (taskID && status) setDetails(getCardDetails());
  }, [taskID, status]);

  // get the details of task using id and status
  // optimize the function for getting the details

  // if the given id is random or none display a fallback screen to dahboard

  return <TaskDetailsContainer details={details} />;
};

export default TaskDetails;
