// import { cardList, CardListType } from "@api/data";
import { cardList, CardListType } from "../api/data";
import TaskDetailsContainer from "@container/TaskDetailsContainer";
import { useParams } from "react-router";

const TaskDetails = () => {
  const { taskID, status } = useParams();

  console.log(taskID, status);

  const cardListData: CardListType[] = cardList;

  // get the details of task using id and status
  // optimize the function for getting the details

  // if the given id is random or none display a fallback screen to dahboard

  return <TaskDetailsContainer />;
};

export default TaskDetails;
