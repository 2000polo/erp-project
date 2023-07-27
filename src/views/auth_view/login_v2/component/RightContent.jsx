import { Box, Grid, Paper, Typography, styled } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';

const RightContent = () => {
    const StyledPaper = styled(Paper)(({ theme }) => ({
        backgroundColor: blue[900],
        ...theme.typography.body2,
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: 'whitesmoke',
        height: '98vh',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '70px',
        // width: 'auto'
    }));

    return <>
        <StyledPaper >
            <Grid sx={{minWidth: '350px'}} >
                <Grid item md={12} >
                    <Typography m={0} variant="h4" gutterBottom>
                        The Simplest way to manage <br/>your workforce
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography mt={1} variant="caption" display="block" gutterBottom>
                        Enter your credentials to access your account
                    </Typography>
                </Grid>
            </Grid>
        </StyledPaper>
    </>
}

export default RightContent;