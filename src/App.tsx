import { Box, Paper, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import DefaultLayout from "./layouts/DefaultLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Register from "./pages/Register";

export function App() {

  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        light: "#63b8ff",
        main: "#0989e3",
        dark: "#005db0",
        contrastText: "#000",
      },
      secondary: {
        main: "#4db6ac",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <GlobalStyles /> */}
      <Box height="100vh"
        display="flex"
        flexDirection="column">
        <Router>
          <Navbar />
          <Paper
            elevation={3}
            sx={{ padding: "1rem", backgroundColor: "secondary.light" }}
          >
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
              <Route element={<ProtectedLayout />}>
                <Route path="/" element={<Home />} />
              </Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </Paper>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export function WrappedApp() {
  return <App />
}
