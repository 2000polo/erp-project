import { Badge, Box, Card, Grid, Stack, Typography, alpha, styled, useTheme } from '@mui/material';
import React from 'react'
import MeetingCard from './MeetingCard';

const MeetingsNotifications = () => {

    const theme = useTheme();

    const StyledCard = styled(Card)({
        // maxWidth: '345px',
        // maxHeight: '200px',
        backgroundColor: theme.palette.background.default,
        // background: 'linear-gradient(to top, #396afc, #2948ff);',
        borderRadius: '10px',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        // transition: 'all ease-in 2s',
        padding: '12px',

        // '&:hover':{
        //     // transform: 'scale(1.05)',
        //     background: 'linear-gradient(to top, #396afc, #2948ff);',
        // }
    })
    
    const InnerStyledCard = styled(Card)({
        // maxWidth: '345px',
        // minHeight: '200px',
        backgroundColor: theme.palette.background.default,
        background: '#09090b8c',
        borderRadius: '15px',
        boxShadow: 'none',
        // transition: 'all ease-in 2s',
        padding: '12px',

        // '&:hover':{
        //     // transform: 'scale(1.05)',
        //     background: 'linear-gradient(to top, #396afc, #2948ff);',
        // }
    })

    

    return (
        <StyledCard>
            <Typography variant="h6" sx={{marginBottom: '10px'}}>
                Todays Meetings
            </Typography>
            <Grid container item spacing={1} direction="row" justifyContent= 'space-between'>
                {
                    <Grid item xs={6}>
                            <MeetingCard isStarted={true}/>
                        
                    </Grid>
                }
                {
                    <Grid item xs={6}>
                        <MeetingCard isStarted={false} />
                    </Grid>
                }
                {
                    <Grid item xs={6}>
                        <MeetingCard isStarted={false} />
                    </Grid>
                }
                {
                    <Grid item xs={6}>
                        <MeetingCard isStarted={false}/>
                    </Grid>
                }
            </Grid>
        </StyledCard>
    )
}

export default MeetingsNotifications;