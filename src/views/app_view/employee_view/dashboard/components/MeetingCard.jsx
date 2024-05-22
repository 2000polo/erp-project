import { Badge, Box, Card, Stack, Typography, alpha, keyframes, styled, useTheme } from '@mui/material'
import React from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import { Videocam } from '@mui/icons-material';

const MeetingCard = (props) => {

    const { isStarted } = props;
    const theme = useTheme();

    const InnerStyledCard = styled(Card)({
        // maxWidth: '345px',
        // minHeight: '200px',
        // backgroundColor: 'red',
        backgroundColor: isStarted ? alpha('rgb(255, 0, 0)', 0.2) : alpha('rgb(0, 29, 255)', 0.2),
        // background: '#09090b8c',
        borderRadius: '15px',
        boxShadow: 'none',
        // transition: 'all ease-in 2s',
        padding: '12px',
        // border: isStarted ? '1px #b35555 solid' : ''
        // '&:hover':{
        //     // transform: 'scale(1.05)',
        //     background: 'linear-gradient(to top, #396afc, #2948ff);',
        // }
    })

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
        //   right: 5,
        //   top: 5,
        //   border: `7px solid ${theme.palette.background.paper}`,
        //   padding: '0 4px',
        },
    }));

    const pulseAnimation = keyframes`
    0% {
        box-shadow: 0 0 0 0px rgba(255, 58, 58, 0.2);
    }
    100% {
        box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
    }`;
        
    return (
        <InnerStyledCard>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Box>
                    <Typography variant="caption" sx={{ color: 'grey'}}>AM</Typography>
                    <Typography variant="subtitle1">01:00</Typography>
                </Box>
                {
                    isStarted ? 
                    // <StyledBadge variant="dot" overlap="circular" color="error" badgeContent=" ">
                        <Box 
                            sx={{
                                height: '100%',
                                backgroundColor: alpha('rgb(255, 58, 58)', 0.2),
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                padding: '15px',
                                animation: `${pulseAnimation} 1s infinite`
                            }}
                        >
                            <Videocam fontSize='21px' />
                        </Box>
                    // </StyledBadge>
                    :
                    <Box 
                        sx={{
                            height: '100%',
                            backgroundColor: alpha(theme.palette.common?.white, 0.2),
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            padding: '15px',
                        }}
                    >
                        <Videocam fontSize='21px' />
                    </Box>
                }
                
            </Stack>
            <Typography variant="caption">Meeting with UI/UX...</Typography>
        </InnerStyledCard>
    )
}

export default MeetingCard