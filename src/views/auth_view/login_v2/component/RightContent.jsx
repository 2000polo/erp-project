import { Box, Grid, Paper, Typography, styled } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';
import landingPage from '../../../../assets/landingPageimage.png'

const RightContent = () => {
    const StyledPaper = styled(Paper)(({ theme }) => ({
        backgroundImage: 'linear-gradient(rgb(13 71 161), rgb(111 106 248))',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: 'whitesmoke',
        height: '96vh',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingBottom: '70px',
        // backgroundImage: `url(${landingPage})`,
        width: '100%'
        // width: 'auto'
    }));

    return <>
        <StyledPaper >
            <Grid sx={{minWidth: '370px'}} >
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
                <Grid mt={2} item>
                    <img width={'100%'} src={landingPage} alt="" />
                </Grid>
            </Grid>
        </StyledPaper>
    </>
}

export default RightContent;