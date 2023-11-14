import { Badge, Card, Chip, CircularProgress, Grid, Stack, Typography, styled, useTheme } from '@mui/material';
import React from 'react';

const TaskListItem = () => {

    const theme = useTheme();

    const StyledCard = styled(Card)({
        backgroundColor: theme.palette.background.default,
        // backgroundColor: 'transparent',
        borderRadius: '10px',
        boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.2)',
        padding: '12px',
        border: '1px solid rgba(255, 255, 255, 0.12)'
    })

    const EllipsisTypography = styled(Typography)(({ theme }) => ({
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        // whiteSpace: 'nowrap',
        maxWidth: '100%', 
    }));

    return (
        <>
            <StyledCard >
                <Grid container spacing={1} direction={'row'} justifyContent={'space-between'}>
                    <Grid item xs={9} > 
                        <Stack spacing={1} direction={'row'} alignContent={'center'} >
                            <Typography variant='subtitle2'>Bug</Typography>
                            <Chip label="#12334" size='small' />
                        </Stack>
                        <EllipsisTypography  variant='caption'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quod in asperiores assumenda temporibus sequi sed inventore minus nesciunt veniam!</EllipsisTypography>
                    </Grid>
                    <Grid item xs={3}> 
                        <CircularProgress variant="determinate" value={90} size={75} />
                    </Grid>
                </Grid>
            </StyledCard>
        </>
    )
}

export default TaskListItem;