import { Pause } from '@mui/icons-material';
import { Button, Card, Stack, Typography, alpha, keyframes, styled, useTheme } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react'

const CurrentTask = () => {

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
    })

    const InnerStyledCard = styled(Card)({
        minWidth: '90px',
        // minHeight: '200px',
        // backgroundColor: 'red',
        // backgroundColor: alpha('rgb(0, 29, 255)', 0.2),
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
        zIndex: 9
    });
        
    const pulseAnimation = keyframes`
        0% {
            box-shadow: 0px 0px 24px rgb(13 71 161);
        }
        50% {
            box-shadow: 0px 0px 124px rgb(27 0 255);
        }
        100% {
            box-shadow: 0px 0px 24px rgb(13 71 161);
        }
        
    `;
    
    const PauseButton = styled(Button)({
        height: '80px',
        width: '80px',
        borderRadius: '50%',
        backgroundColor: blue['900'],
        color: 'white',
        fontSize: '2rem',
        boxShadow: '0px 0px 24px rgb(13 71 161)',
        animation: `${pulseAnimation} 3s infinite`
    })

    return (
        <StyledCard>
            <Stack spacing={2.7} justifyContent={'space-between'} direction={'column'}>
                <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Typography variant="h6">
                        Ongoing Task Name
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'grey'}}>
                        Bug | Project Name 
                    </Typography>
                </Stack>
                

                <Stack alignItems={'center'} justifyContent={'center'} sx={{width: '100%'}}>
                    <PauseButton><Pause /></PauseButton>
                </Stack>
                
                <Stack spacing={2} direction={'row'} alignItems={'center'} justifyContent={'center'}>
                    <InnerStyledCard>
                        <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
                            <Typography variant="h6">
                                56%
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'grey'}}>
                                Completion 
                            </Typography>
                        </Stack>
                    </InnerStyledCard>
                    <InnerStyledCard>
                        <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
                            <Typography variant="h6">
                                High
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'grey'}}>
                                Priority 
                            </Typography>
                        </Stack>
                    </InnerStyledCard>
                    <InnerStyledCard>
                        <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
                            <Typography variant="h6">
                                2.5hr
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'grey'}}>
                                Time left 
                            </Typography>
                        </Stack>
                    </InnerStyledCard>
                </Stack>
            </Stack>
        </StyledCard>
    )
}

export default CurrentTask