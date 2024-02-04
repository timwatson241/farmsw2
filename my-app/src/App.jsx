import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your custom theme
import MyComponent from './components/MyComponent';

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Apply the theme */}
      <div className="App">
        <MyComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;