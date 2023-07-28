import { Paper, styled } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';

const LoadingView = () => {
    
    const StyledPaper = styled(Paper)(({ theme }) => ({
        backgroundColor: blue[800],
        ...theme.typography.body2,
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: 'whitesmoke',
        height: '100vh',
        borderRadius: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingBottom: '70px',
        // backgroundImage: `url(${landingPage})`,
        width: '100%'
        // width: 'auto'
    }));

    return (
        <>
            <StyledPaper >
                loading
            </StyledPaper>
        </>
    )
}

export default LoadingView;