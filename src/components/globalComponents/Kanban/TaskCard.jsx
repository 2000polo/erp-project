import { ArrowRightAltOutlined, DriveFolderUpload, FileOpenOutlined, More } from '@mui/icons-material';
import { Avatar, AvatarGroup, Box, Card, Chip, Divider, Grid, LinearProgress, Paper, Stack, Typography, alpha, linearProgressClasses, styled, useTheme } from '@mui/material';
import React from 'react';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PestControlIcon from '@mui/icons-material/PestControl';

const TaskCard = (props) => {

    const theme = useTheme();

    const getColorByTeam = {
        'Frontend': theme.palette?.chip?.yellow,
        'Backend': theme.palette?.chip?.pink,
        'Ui/Ux': theme.palette?.chip?.green,
    }

    const getIconByTask = {
        'feature': <AutoFixHighIcon/>,
        'bug': <PestControlIcon/>
    }
    
    const getColorByPriority = {
        'High': theme.palette?.chip?.red,
        'Medium': theme.palette?.chip?.orange,
        'Low': theme.palette?.chip?.yellow,
    }

    const StyledCard = styled(Card)({
        backgroundColor: theme.palette.background.default,
        borderRadius: '10px',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        padding: '12px',
        marginBottom: '9px',
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
    
    // const StyledChip = styled(Chip)(({ theme }) => ({
    //     background: alpha(getColorByTeam?.[props?.team], .7)
    // }));

return (
    <StyledCard key={props?.key} className='card' draggable="true" onDragStart={(e) => props?.onDragStart(e)} data-id={props?.data_id} >
        <Grid container spacing={1} >
            <Grid item xs={10}>
                {/* <Item>xs=8</Item> */}
                <Stack spacing={1} direction={'row'} >
                    <Chip sx={{background: alpha(getColorByTeam?.[props?.team], .7)}} label={props?.team} size='small' color='primary' />
                    <Chip variant='outlined' sx={{border: `1px solid ${getColorByPriority?.[props?.data?.priority]}`, color: getColorByPriority?.[props?.data?.priority]}}  label={props?.data?.priority} size='small'/>
                </Stack>
                <Typography variant="h6" my={.7} lineHeight={1.3}>
                    {props?.name}
                </Typography>
                <Typography color={alpha(theme.palette.text.primary, 0.7)} variant="caption" display="block" gutterBottom>
                    {/* to be deliverd in 120 days */}
                    {props?.data?.description.slice(0, 90)}...
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
                        width: '55px',
                        height: '55px',
                        // backgroundColor: 'primary.dark',
                        // '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, .8),
                        // opacity: [0.2, 0.5, 0.5],
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '5px'
                        // },
                    }}
                >
                    {getIconByTask[props?.data?.task_type]}
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Stack direction={'row'} alignItems={'center'} spacing={1} >
                    <Avatar sx={{ width: 22, height: 22 }} alt="Remy Sharp" src={props?.data?.assigned_to?.avatar} />
                    <Typography color={alpha(theme.palette.text.primary, 0.7)} variant="subtitle2" display="block" gutterBottom>
                        {props?.data?.assigned_to?.name}
                    </Typography>
                    <ArrowRightAltOutlined />
                    <Avatar sx={{ width: 22, height: 22 }} alt="Remy Sharp" src={props?.data?.assigned_by?.avatar} />
                    <Typography color={alpha(theme.palette.text.primary, 0.7)} variant="subtitle2" display="block" gutterBottom>
                        {props?.data?.assigned_by?.name}
                    </Typography>  
                    <Divider orientation='vertical' />
                </Stack>
                
            </Grid>
            {
                props?.data?.state !== 'todo' &&
                <Grid item xs={12} pt={1.8}>
                    <Stack direction='row' justifyContent='space-between' alignItems='center' >
                        <Typography color={alpha(theme.palette.text.primary, 0.7)} variant="caption" display="block" gutterBottom>
                            Progress
                        </Typography>
                        <Typography color={alpha(theme.palette.text.primary, 0.7)} variant="caption" display="block" gutterBottom>
                            50%
                        </Typography>
                    </Stack>
                    <BorderLinearProgress variant="determinate" value={50} />
                </Grid>
            }
            
        </Grid>
    </StyledCard>
  )
}

export default TaskCard;