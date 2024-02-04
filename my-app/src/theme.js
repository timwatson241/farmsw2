import { createTheme } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  palette: {
    // Define your color scheme here
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    // Add more customization as needed
  },
  // You can also customize typography, breakpoints, etc.
});

export default theme;
