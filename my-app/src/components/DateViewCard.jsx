import React from 'react';
import { Card } from '@mui/material';

function DateViewCard() {
  return (
    <Card
      sx={(theme) => ({
        minWidth: 800, // Minimum width of the card, adjust as needed
        height: 1067, // Fixed height
        backgroundColor: theme.palette.customColors.cardColorPrimary, // Use custom theme colors
        borderColor: theme.palette.customColors.borderColor, // Use custom theme colors
        borderWidth: 1,
        borderStyle: 'solid',
        margin: 'auto', // Center the card horizontally
        marginTop: 4, // Adjust top margin as needed, using the theme's spacing
        marginLeft: 60, // 60 pixels off the left of the screen, adjust to '60px' if needed
        marginRight: 60, // 60 pixels off the right of the screen, adjust to '60px' if needed
        width: 'calc(100% - 120px)', // Adjust width based on the screen size, keeping the 60px margin on both sides
      })}
    >
      {/* Card content goes here */}
    </Card>
  );
}

export default DateViewCard;