import { Route, Routes } from "react-router";
import Dashboard from "./pages/dashboard";
import Header from "./pages/header";
import Footer from "./pages/footer";
import TaskDetails from "./pages/task_details";

function App() {
  return (
    <>
      <h1>TASK PLANNER</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/*http://localhost:3000/task_details/123*/}
        <Route path="/task_details/:taskID" element={<TaskDetails />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
