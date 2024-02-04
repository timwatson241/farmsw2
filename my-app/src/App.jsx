import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your custom theme
import DateAndLogoWrapper from './components/DateAndLogoWrapper'; // Import DateAndLogoWrapper
import DateViewCard from './components/DateViewCard'; // Import DateViewCard

function App() {
  // Use an effect to set the body's background color
  useEffect(() => {
    // Set the body's background color to match the theme's default background
    document.body.style.backgroundColor = theme.palette.background.default;
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <ThemeProvider theme={theme}> {/* Apply the theme */}
      <div className="App">
        <DateAndLogoWrapper> {/* Add DateAndLogoWrapper */}
          <DateViewCard /> {/* Add DateViewCard inside the wrapper */}
        </DateAndLogoWrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;