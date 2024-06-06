import { Avatar, Box, Card, Stack, Typography, alpha, styled, useTheme } from '@mui/material';
import React from 'react'

const Comment = (props) => {
    
    const theme = useTheme();
    const { userName, comment, dateTime } = props?.data

    const StyledCard = styled(Card)({
        // minWidth: '50%',
        // minHeight: '200px',
        backgroundColor: '#0d47a1 !important',
        // background: 'linear-gradient(to top, #0064ff7a, #0025ff73) !important',
        borderRadius: '1px 10px 10px 10px !important',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        // transition: 'all ease-in 2s',
        padding: '6px',
        // '&:hover':{
        //     // transform: 'scale(1.05)',
        //     background: 'linear-gradient(to top, #396afc, #2948ff);',
        // }

    });

  return (
    <Box sx={
        {minWidth: '50%'}
    }>
        <Stack sx={{marginTop: '12px'}} direction={'row'} alignItems={'start'} spacing={1}>
            <Avatar sx={{height: '25px', width: '25px'}} >
                <Typography variant='caption'>
                    {userName?.[0]}
                </Typography>
            </Avatar>
            <Stack>
                <Typography color={alpha(theme.palette.text.primary, 0.7)} variant='caption'>
                    {userName}
                </Typography>
                <StyledCard >
                    <Typography variant='subtitle2'>
                        {comment}
                    </Typography>
                    <Stack alignItems={'end'}>
                        <Typography color={alpha(theme.palette.text.primary, 0.7)} variant='caption'>
                            {dateTime}
                        </Typography>
                    </Stack>
                </StyledCard>
            </Stack>
            
        </Stack>
        
    </Box>
    
  )
}

export default Comment