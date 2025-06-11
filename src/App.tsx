import { lazy } from "react";
import { Route, Routes } from "react-router";
const Dashboard = lazy(() => import("./pages/dashboard"));
const Header = lazy(() => import("./pages/header"));
// import Footer from "./pages/footer";
const TaskDetails = lazy(() => import("./pages/task_details"));
import { Box } from "@mui/material";

function App() {
  return (
    // NEED TO CREATE LAYOUT HERE..........
    <Box
      height={"100vh"}
      width={"100vw"}
      sx={{ backgroundColor: "#EEE", overflowY: "auto" }}
    >
      <Header />

      <Box padding={"16px 24px"}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/*http://localhost:3000/task_details/123*/}
          <Route
            path="/task_details/:taskID/:status"
            element={<TaskDetails />}
          />
        </Routes>
      </Box>
      {/* <Footer /> */}
    </Box>
  );
}

export default App;
