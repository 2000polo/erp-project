import { Box, Card, Stack, Typography, alpha, styled, useTheme } from '@mui/material';
import React from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import { blue, green, red, purple, deepOrange } from '@mui/material/colors';

const Schedules = () => {

    const theme = useTheme();

    const StyledCard = styled(Card)({
        // maxWidth: '345px',
        // minHeight: '200px',
        backgroundColor: theme.palette.background.default,
        // background: 'linear-gradient(to top, #396afc, #2948ff);',
        borderRadius: '10px',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        // transition: 'all ease-in 2s',
        padding: '12px',
        // maxHeight: '250px',
        // overflowY: 'scroll'
        // '&:hover':{
        //     // transform: 'scale(1.05)',
        //     background: 'linear-gradient(to top, #396afc, #2948ff);',
        // }
    })
    
    const InnerStyledCard = styled(Card)({
        // maxWidth: '345px',
        // minHeight: '200px',
        backgroundColor: theme.palette.background.default,
        // background: 'linear-gradient(to top, #396afc, #2948ff);',
        borderRadius: '10px',
        boxShadow: 'none',
        padding: '12px',
        // marginTop: 12,
        '&:hover':{
            background: '#27272a4d',
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        }
    })
    
    return (
        <StyledCard>
            <Typography variant="h6">
                Upcoming Schedule
            </Typography>
            <InnerStyledCard>
                <Stack direction="row" spacing={2}>
                    <Box 
                        sx={{
                            // width: '55px',
                            height: '55px',
                            // backgroundColor: 'primary.dark',
                            // '&:hover': {
                            backgroundColor: blue['A200'],
                            // opacity: [0.2, 0.5, 0.5],
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '5px',
                            padding: '.5rem'
                            // },
                        }}
                    >
                        <Typography variant="h6" >
                            7:00
                        </Typography>
                        <Typography variant="caption" color={'#f5f5f5a3'}>
                            PM
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">
                            Upcoming Schedule
                        </Typography>
                        <Typography variant="caption" color={'#f5f5f5a3'}>
                            7:00 pm - 8:30 pm
                        </Typography>
                    </Box>
                    {/* <Box>
                        Join
                    </Box> */}
                </Stack>
            </InnerStyledCard>
            <InnerStyledCard>
                <Stack direction="row" spacing={2}>
                    <Box 
                        sx={{
                            // width: '55px',
                            height: '55px',
                            // backgroundColor: 'primary.dark',
                            // '&:hover': {
                            backgroundColor: deepOrange['A400'],
                            // opacity: [0.2, 0.5, 0.5],
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '5px',
                            padding: '.5rem'
                            // },
                        }}
                    >
                        <Typography variant="h6" >
                            7:00
                        </Typography>
                        <Typography variant="caption" color={'#f5f5f5a3'}>
                            PM
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">
                            Upcoming Schedule
                        </Typography>
                        <Typography variant="caption" color={'#f5f5f5a3'}>
                            7:00 pm - 8:30 pm
                        </Typography>
                    </Box>
                    {/* <Box>
                        Join
                    </Box> */}
                </Stack>
            </InnerStyledCard>
            <InnerStyledCard>
                <Stack direction="row" spacing={2}>
                    <Box 
                        sx={{
                            // width: '55px',
                            height: '55px',
                            // backgroundColor: 'primary.dark',
                            // '&:hover': {
                            backgroundColor: red[600],
                            // opacity: [0.2, 0.5, 0.5],
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '5px',
                            padding: '.5rem'
                            // },
                        }}
                    >
                        <Typography variant="h6" >
                            7:00
                        </Typography>
                        <Typography variant="caption" color={'#f5f5f5a3'}>
                            PM
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">
                            Upcoming Schedule
                        </Typography>
                        <Typography variant="caption" color={'#f5f5f5a3'}>
                            7:00 pm - 8:30 pm
                        </Typography>
                    </Box>
                    {/* <Box>
                        Join
                    </Box> */}
                </Stack>
            </InnerStyledCard>
        </StyledCard>
    )
}

export default Schedules;