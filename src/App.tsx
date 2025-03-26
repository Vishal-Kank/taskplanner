import { Route, Routes } from "react-router";
import Dashboard from "./pages/dashboard";
import Header from "./pages/header";
// import Footer from "./pages/footer";
import TaskDetails from "./pages/task_details";
import { Box } from "@mui/material";

function App() {
  return (
    <Box height={'100vh'} width={'100vw'} sx={{backgroundColor: '#EEE'}}>
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
