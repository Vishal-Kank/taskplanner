import { lazy } from "react";
import { Route, Routes } from "react-router";
const Dashboard = lazy(() => import("./pages/dashboard"));
const Header = lazy(() => import("./pages/header"));
// import Footer from "./pages/footer";
const TaskDetails = lazy(() => import("./pages/task_details"));
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      height={"100vh"}
      width={"100vw"}
      sx={{ backgroundColor: "#EEE", overflowY: "auto" }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/*http://localhost:3000/task_details/123*/}
        <Route path="/task_details/:taskID" element={<TaskDetails />} />
      </Routes>
      {/* <Footer /> */}
    </Box>
  );
}

export default App;
