import { DriveFolderUpload, FileOpenOutlined, More } from '@mui/icons-material';
import FolderIcon from '@mui/icons-material/Folder';
import { Avatar, AvatarGroup, Box, Card, CardActionArea, Grid, LinearProgress, Paper, Stack, Typography, alpha, linearProgressClasses, styled, useTheme } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';

const ProjectCard = () => {

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

        // '&:hover':{
        //     // transform: 'scale(1.05)',
        //     background: 'linear-gradient(to top, #396afc, #2948ff);',
        // }
    })

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: 'transparent',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const StyledAvatarGroup = styled(AvatarGroup)(({ theme }) => ({
        // Custom styles for AvatarGroup container
        // Use theme.spacing or other Material-UI variables if needed
        '& .MuiAvatarGroup-avatar':{
            width: '24px',
            height: '24px',
            fontSize: '12px'
        }
    }));
      
    const StyledAvatar = styled(Avatar)(({ theme }) => ({
        // Custom styles for individual Avatar components
        // Use theme.spacing or other Material-UI variables if needed
    }));

    return (
        // <StyledCard variant='outlined'>
        //     <Stack direction='column' justifyContent='space-between'>
        //         <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    // <Typography variant="h5">
                    //     Project Name
                    // </Typography>
        //             <More fontSize="small" />
        //         </Stack>

        //         <Stack>
        //             <Typography color={alpha(theme.palette.text.primary, 0.7)} variant="caption" display="block" gutterBottom>
        //                 Expected delivary date on 20-05-2024
        //             </Typography>
        //         </Stack>

        //         <Box>
                    // <Stack direction='row' justifyContent='space-between' alignItems='center' >
                    //     <Typography color={alpha(theme.palette.text.primary, 0.7)} variant="caption" display="block" gutterBottom>
                    //         Progress
                    //     </Typography>
                    //     <Typography color={alpha(theme.palette.text.primary, 0.7)} variant="caption" display="block" gutterBottom>
                    //         50%
                    //     </Typography>
                    // </Stack>
        //             <BorderLinearProgress variant="determinate" value={50} />
        //         </Box>

        //         <Box>
                    // <StyledAvatarGroup max={4}>
                    //     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    //     <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    //     <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    //     <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    //     <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    // </StyledAvatarGroup>
        //         </Box>
        //     </Stack>
        // </StyledCard>
        <CardActionArea>
            <StyledCard>
                <Grid container spacing={0} >
                    <Grid item xs={10}>
                        {/* <Item>xs=8</Item> */}
                        <Typography variant="h6">
                            Project Name
                        </Typography>
                        <Typography color={alpha(theme.palette.text.primary, 0.7)} variant="caption" display="block" gutterBottom>
                            to be deliverd in 120 days
                        </Typography>
                        {/* <AvatarGroup max={4}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                        </AvatarGroup> */}
                    </Grid>
                    <Grid item xs={2}>
                        <Box 
                            sx={{
                                width: '100%',
                                height: '100%',
                                // backgroundColor: 'primary.dark',
                                // '&:hover': {
                                backgroundColor: blue[900],
                                // opacity: [0.2, 0.5, 0.5],
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '5px',
                                boxShadow: '0px 0px 124px rgb(13 71 161)'
                                // },
                            }}
                        >
                            <FolderIcon />
                        </Box>
                    </Grid>
                    <Grid item xs={12} pt={1.8}>
                        <Stack direction='row' justifyContent='space-between' alignItems='center' >
                            <Typography color={alpha(theme.palette.text.primary, 0.7)} variant="caption" display="block" gutterBottom>
                                In Progress
                            </Typography>
                            <Typography color={alpha(theme.palette.text.primary, 0.7)} variant="caption" display="block" gutterBottom>
                                50%
                            </Typography>
                        </Stack>
                        <BorderLinearProgress variant="determinate" value={50} />
                    </Grid>
                </Grid>
            </StyledCard>
        </CardActionArea>
        
    )
}

export default ProjectCard;