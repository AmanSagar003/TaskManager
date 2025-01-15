import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; 
import Menu from '@mui/material/Menu'; 
import MenuItem from '@mui/material/MenuItem'; 
import IconButton from '@mui/material/IconButton'; 
import MenuIcon from '@mui/icons-material/Menu'; 
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  const [anchor, setAnchor] = useState(null); // State to manage the anchor element for the menu
  const navigate = useNavigate(); // Hook to get the navigate function for changing routes

  // Function to handle clicking the menu button
  const handleMenuClick = (event) => {
    setAnchor(event.currentTarget); // Set the anchor element to the button that was clicked
  };

  // Function to handle closing the menu
  const handleMenuClose = () => {
    setAnchor(null); // Reset the anchor to null to close the menu
  };

  // Function to handle clicking a menu item and navigating to a new path
  const handleMenuItemClick = (path) => {
    return () => {
      navigate(path); // Navigate to the specified path
      handleMenuClose(); // Close the menu
    };
  };

  // Function to handle clicking the login button
  const handleLoginClick = () => {
    navigate('/LogInPage'); // Navigate to the login page
  };

  const open = Boolean(anchor); // Convert the anchor to a boolean to determine if the menu is open

  return (
    <Box sx={{ flexGrow: 1 }}> {/* Box component for layout, with flexGrow to make it take available space */}
      <AppBar position="static"> {/* AppBar component to create a fixed position top bar */}
        <Toolbar> {/* Toolbar component to ensure proper spacing and alignment */}
          
          {/* IconButton component for the menu button */}
          <IconButton
            edge="start" // Position the button at the start (left) edge of the toolbar
            color="inherit" // Set the color to inherit from the AppBar, ensuring it matches the AppBar's color
            aria-label="menu" // Provide an accessible label for the button, useful for screen readers
            aria-controls={open ? 'basic-menu' : undefined} // Link the button to the menu for accessibility purposes
            aria-haspopup="true" // Indicate that the button opens a menu, which helps with accessibility
            aria-expanded={open ? 'true' : undefined} // Set the 'aria-expanded' attribute to true if the menu is open
            onClick={handleMenuClick} // Attach the click event handler to open the menu when the button is clicked
          >
            <MenuIcon /> {/* The MenuIcon component, which displays the hamburger icon (three horizontal lines) */}
          </IconButton>

          {/* Menu component to display the dropdown menu */}
          <Menu
            id="basic-menu" // Set the ID for the menu
            anchorEl={anchor} // Position the menu relative to the anchor element
            open={open} // Determine if the menu should be open
            onClose={handleMenuClose} // Handle menu close event
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {/* Menu items with click handlers to navigate to different pages */}
            <MenuItem onClick={handleMenuItemClick('/ToDoList')}>To Do List</MenuItem>
            <MenuItem onClick={handleMenuItemClick('/')}>Home Page</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem> {/* Just closes the menu for now */}
          </Menu>
          
          {/* Box component for centering the Task Manager heading */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Button
              color="inherit" // Set the color to inherit from the AppBar
              component={Link} // Use the Link component for navigation
              to="/" // Set the path to navigate to
              sx={{
                textTransform: 'none', // Disable automatic uppercase transformation
                marginX: 'auto', // Center the button horizontally
                backgroundColor: 'transparent', // Make the background transparent
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Change background on hover
                },
              }}
            >
              <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
                Task Manager {/* Displayed text */}
              </Typography>
            </Button>
          </Box>
          
          {/* Button component for the login button */}
          <Button
            color="inherit" // Set the color to inherit from the AppBar
            onClick={handleLoginClick} // Attach the click event handler to navigate to the login page
            sx={{
              textTransform: 'none', // Disable automatic uppercase transformation
              marginLeft: 'auto', // Push the button to the right side
              backgroundColor: 'transparent', // Make the background transparent
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Change background on hover
              },
            }}
          >
            Login {/* Displayed text */}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

//COMPLETE