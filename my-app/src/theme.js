import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#ffffff", // Ensures the background is white
    },
    customColors: {
      // Add custom colors used in your components
      cardColorPrimary: "#f5f5f5", // Example color for the card background
      borderColor: "#cccccc", // Example color for the card border
    },
  },
  // Add more customization as needed
});

export default theme;
