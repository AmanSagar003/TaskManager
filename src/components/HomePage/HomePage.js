import React, { useContext } from "react";
//import Navbar from './Navbar'
import { Typography } from "@mui/material";
import { AlertContext } from "../LogInPage/AlertContext"; // Import AlertContext

export const HomePage = ({ isLoggedIn }) => {
    const { alert } = useContext(AlertContext); // Use the context

    return(
        <div>
        {/*<Navbar/>*/}
        {isLoggedIn && (
                <div style={{ marginTop: '2rem' }}>
                    <p>Welcome! You are logged in.</p>
                </div>
            )}
            
        <h1>Home Page of Task Manager</h1>
        {alert.show && (
                <div style={{ marginTop: '1rem' }}>
                    <Typography variant="body1" color="primary">{alert.message}</Typography>
                </div>
            )}
        </div>
    )
}