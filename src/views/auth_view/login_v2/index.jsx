import { Grid, Paper, styled } from "@mui/material";
import React from "react";
import LeftContent from "./component/LeftContent";
import RightContent from "./component/RightContent";

const Login = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 'calc(var(--vh, 1vh) * 100)'
    }));

    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    return <>
        <Grid sx={{p: {sx: 1, md: 2}}} container spacing={[2, 2]}>
            <Grid item xs={12} md={6}>
                <LeftContent />
            </Grid>
            <Grid item sx={{ display: {xs: 'none', sm: 'block'}}} xs={12} md={6}>
                <RightContent />
            </Grid>
            
        </Grid>
    </>
}

export default Login;