import { Box, Button, Card, CardMedia, Divider, Stack, Typography, alpha, styled, useTheme } from '@mui/material'
import React from 'react'
import SubTaskList from './SubTaskList';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const TaskDetailsInfo = () => {

    const theme = useTheme();

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

    const options = ['Start', 'Halt', 'Close'];
        
    return (
        <>
            <Stack sx={{marginBottom: '14px'}} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Typography sx={{marginBottom: '9px'}} variant='h5'>Example Task Name</Typography>
                {/* <ButtonDropDown options={options} /> */}
            </Stack>

            <Typography sx={{marginBottom: '14px'}} color={alpha(theme.palette.text.primary, 0.7)} variant='subtitle2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda, vero asperiores dolore aut recusandae officiis ex, nostrum soluta a at rerum aperiam aspernatur. Temporibus id saepe incidunt. Quasi eligendi nihil voluptas officiis. Dolorum blanditiis molestias ea corporis accusantium minus necessitatibus. Enim natus laborum possimus!</Typography>
            
            <Stack sx={{marginBottom: '14px'}} direction={'row'} useFlexGap spacing={1}>
                <Card sx={{ width: 151 }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="https://cdn.dribbble.com/userupload/14780232/file/original-264d9812465d5429de36623639ce7115.png?resize=1024x768"
                        alt="Live from space album cover"
                    />
                </Card>
                <Card sx={{ width: 151 }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="https://cdn.dribbble.com/userupload/14780234/file/original-21ce9337abeb27730cccafd832a8ac04.png?resize=1024x768&vertical=center"
                        alt="Live from space album cover"
                    />
                </Card>
            </Stack>

            {/* <Stack sx={{marginBottom: '14px'}} direction={'row'} alignItems={'center'} justifyContent={'end'}>
                <Button 
                    component="label"
                    role={undefined}
                    variant="contained"
                    // tabIndex={-1}
                    startIcon={<Construction />}
                    sx={{bgcolor: blue[900]}}
                    // onClick={handleSubmit}
                    size='small'
                >
                    Start
                </Button>
            </Stack> */}
            
            <Box sx={{marginBottom: '14px'}}>
                <Stack spacing={1} useFlexGap>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography color={alpha(theme.palette.text.primary, 0.7)} variant='body2'>Task Progress</Typography> 
                        <Typography color={alpha(theme.palette.text.primary, 0.7)} variant='body2'>50%</Typography> 
                    </Stack>
                    <BorderLinearProgress variant="determinate" value={50} />
                </Stack>
            </Box>

            <Divider sx={{marginBottom: '14px'}} orientation="horizontal" />
            
            <SubTaskList />
        </>
    )
}

export default TaskDetailsInfo