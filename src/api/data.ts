export type CardListType = {
  type: string;
  list: {
    id: string;
    status: string;
    title: string;
    creationDate: string;
    description: string;
  }[];
};

export const cardList: CardListType[] = [
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

export type CardDetailsType = {
  date: string;
  status: string;
  title: string;
  description: string;
  imgURL: string;
  attachmentsURL: string;
};
export const cardDetails: CardDetailsType = {
  date: "10/June/2025",
  status: "in progress",
  title: "Create data model for Card List",
  description:
    "creating a dummy details for a given task to replicate mostly all the required functionalities and test them.",
  imgURL: "",
  attachmentsURL: "",
};
