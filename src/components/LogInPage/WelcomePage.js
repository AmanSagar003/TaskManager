import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

export const WelcomePage = () => {
    const user = useSelector((state) => state.user);

    return (
        <Typography>
            Welcome {user.name} {user.email} {user.MobNo} {user.gender} {user.address} {user.password}
        </Typography>
    );
};

export default WelcomePage;