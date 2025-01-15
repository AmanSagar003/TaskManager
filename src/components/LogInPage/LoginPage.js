import React, { useState, useContext  } from "react";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./userSlice";
import { AlertContext } from "./AlertContext"; // Import AlertContext

export const LoginPage = () => {
    const [states, setStates] = useState({
        name: "",
        email: "",
        password: "",
        Gender: "",
        Address: "",
        mobNo: "",
        submit:""
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { showAlert } = useContext(AlertContext); // Use the context
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;  // Destructuring 
        setStates(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUser(states));
        showAlert("User logged in!"); // Show the alert
        navigate(`/`);

        // navigate(`/WelcomePage/${states.name}/${states.email}/${states.password}/${states.Gender}/${states.Address}/${states.MobNo}`);  // Template Literals
        // Template Literals which allows embedding variables directly within the string. 
        // ${expression}: The expressions inside ${} are evaluated and their values are inserted into the string.
        // `/WelcomePage/`: The base part of the URL.
        // `${states.name}`: The value of states.name is inserted here.

    };



    console.log('states: ', states);
    return (
        <>
         <div style={{ marginTop: '2rem' }}>
            <Typography gutterBottom variant="h2">Login Form</Typography>
            <Grid container direction={"column"} spacing={1}  >
                <Box component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off">

                    <Grid columns={{ xs: 4, md: 12 }}>
                        <TextField id="name" name="name" label="Name" variant="outlined" value={states.name} onChange={handleInputChange} type="text"></TextField>
                    </Grid>

                    <Grid columns={{ xs: 4, md: 12 }}>
                        <TextField id="email" name="email" label="Email" variant="outlined" type="email" value={states.email} onChange={handleInputChange}></TextField>
                    </Grid>
                    <Grid columns={{ xs: 4, md: 12 }}>
                        <TextField id="mobNo" name="mobNo" label="Mob. No." variant="outlined" value={states.MobNo} onChange={handleInputChange}></TextField>
                    </Grid>

                    <Grid columns={{ xs: 4, md: 12 }}>

                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                name="Gender"
                                sx={{ minWidth: 215 }}
                                label="Gender" value={states.Gender} onChange={handleInputChange}>
                                <MenuItem value={"Male"} >Male</MenuItem>
                                <MenuItem value={"Female"}>Female</MenuItem>
                                <MenuItem value={"Others"}>Others</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid columns={{ xs: 4, md: 12 }}>
                        <TextField id="Address" name="Address" label="Address" variant="outlined" type="text" value={states.Address} onChange={handleInputChange}></TextField>
                    </Grid>
                    <Grid columns={{ xs: 4, md: 12 }}>
                        <TextField id="password" name="password" label="Password" variant="outlined" type="password" value={states.password} onChange={handleInputChange}></TextField>
                    </Grid>

                    <Button variant="outlined" name="submit" onClick={handleSubmit} >Submit</Button>
                </Box>
            </Grid>
         </div>
        </>
    );
};

export default LoginPage;
