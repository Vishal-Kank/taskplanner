import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// import { BrowserRouter } from "react-router";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});
// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ThemeProvider>
//   </StrictMode>
// );
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </ThemeProvider> */}
  </StrictMode>
);
