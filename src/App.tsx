import { lazy } from "react";
// import { Route, Routes } from "react-router";
const DashboardPage = lazy(() => import("./pages/dashboard"));
// const Header = lazy(() => import("./pages/header"));
// // import Footer from "./pages/footer";
// const TaskDetails = lazy(() => import("./pages/task_details"));
// import { Box } from "@mui/material";

// function App() {
//   return (
//     // NEED TO CREATE LAYOUT HERE..........
//     <Box
//       height={"100vh"}
//       width={"100vw"}
//       sx={{ backgroundColor: "#EEE", overflowY: "auto" }}
//     >
//       <Header />

//       <Box padding={"16px 24px"}>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           {/*http://localhost:3000/task_details/123*/}
//           <Route
//             path="/task_details/:taskID/:status"
//             element={<TaskDetails />}
//           />
//         </Routes>
//       </Box>
//       {/* <Footer /> */}
//     </Box>
//   );
// }

// export default App;
import React, { useState, createContext, useContext } from "react";
import {
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Box,
  Avatar,
  Menu,
  MenuItem,
  useTheme,
  ThemeProvider,
  createTheme,
  ListItemIcon,
  Tooltip,
  Breadcrumbs,
  Link as MUILink,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  ChevronLeft,
  ChevronRight,
  Dashboard,
  EventNote,
  AddBox,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

// Auth Context
const AuthContext = createContext<any>(null);
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const login = (username: string) => setUser(username);
  const logout = () => setUser(null);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const RequireAuth = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

// Theme Context
const ColorModeContext = createContext({ toggleColorMode: () => {} });

const drawerWidth = 240;

const Layout = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const navItems = [
    { text: "Dashboard", icon: <Dashboard />, path: "/dashboard" },
    { text: "Upcoming Task", icon: <EventNote />, path: "/upcomingtask" },
    { text: "Create Task", icon: <AddBox />, path: "/createtask" },
  ];

  const breadcrumbs = location.pathname.split("/").filter(Boolean);

  const generateBreadcrumbLabel = (segment: string) => {
    if (!isNaN(Number(segment))) return `ID: ${segment}`;
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <IconButton onClick={handleMenu} color="inherit">
            <Avatar />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                colorMode.toggleColorMode();
                handleClose();
              }}
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7 />
              ) : (
                <Brightness4 />
              )}{" "}
              Theme
            </MenuItem>
            <MenuItem
              onClick={() => {
                logout();
                handleClose();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={drawerOpen}
        sx={{
          width: drawerOpen ? drawerWidth : 60,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          "& .MuiDrawer-paper": {
            width: drawerOpen ? drawerWidth : 60,
            mt: 8,
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            overflowX: "hidden",
            position: "relative",
          },
        }}
      >
        <IconButton
          onClick={() => setDrawerOpen(!drawerOpen)}
          sx={{
            position: "absolute",
            top: 16,
            right: -20,
            backgroundColor: "background.paper",
            borderRadius: "50%",
            boxShadow: 3,
            zIndex: 1301,
          }}
        >
          {drawerOpen ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
        <List>
          {navItems.map(({ text, icon, path }) => {
            const isActive = location.pathname === path;
            return (
              <ListItem
                key={text}
                component="div"
                onClick={() => {
                  if (!drawerOpen) setDrawerOpen(true);
                  navigate(path);
                }}
                selected={isActive}
                sx={{
                  cursor: "pointer",
                  bgcolor: isActive ? "action.selected" : "transparent",
                  "&:hover": {
                    bgcolor: "action.hover",
                  },
                }}
              >
                <Tooltip title={drawerOpen ? "" : text} placement="right">
                  <ListItemIcon
                    sx={{ color: isActive ? "primary.main" : "inherit" }}
                  >
                    {icon}
                  </ListItemIcon>
                </Tooltip>
                {drawerOpen && <ListItemText primary={text} />}
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
          <MUILink
            underline="hover"
            color="inherit"
            onClick={() => navigate("/")}
          >
            Home
          </MUILink>
          {breadcrumbs.map((crumb, index) => (
            <Typography key={index} color="text.primary">
              {generateBreadcrumbLabel(crumb)}
            </Typography>
          ))}
        </Breadcrumbs>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

// const DashboardPage = () => <Typography variant="h4">Dashboard</Typography>;
const UpcomingTask = () => <Typography variant="h4">Upcoming Task</Typography>;
const CreateTask = () => <Typography variant="h4">Create Task</Typography>;

const NotFoundPage = () => (
  <Box sx={{ mt: 10, textAlign: "center" }}>
    <Typography variant="h3" color="error" gutterBottom>
      404 - Page Not Found
    </Typography>
    <Typography variant="body1">
      The page you're looking for doesn't exist.
    </Typography>
    <Box sx={{ mt: 3 }}>
      <button onClick={() => (window.location.href = "/dashboard")}>
        Go to Dashboard
      </button>
    </Box>
  </Box>
);

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login("dummyUser");
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        mt: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">Login</Typography>
      <button onClick={handleLogin}>Login as Dummy User</button>
    </Box>
  );
};

export default function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
  const theme = React.useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<RequireAuth />}>
              <Route element={<Layout />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/upcomingtask" element={<UpcomingTask />} />
                <Route path="/createtask" element={<CreateTask />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
