import React from 'react';
import DateAndLogoWrapper from './components/DateAndLogoWrapper'; // Import DateAndLogoWrapper
import DateViewCard from './components/DateViewCard'; // Import DateViewCard
import './App.css'; // Ensure this line is present

function App() {
 
  return (
      <div className="App">
        <DateAndLogoWrapper> {/* Add DateAndLogoWrapper */}
          <DateViewCard /> {/* Add DateViewCard inside the wrapper */}
        </DateAndLogoWrapper>
      </div>
  );
}

export default App;