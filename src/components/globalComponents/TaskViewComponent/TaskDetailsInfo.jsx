import { Card, CardMedia, Divider, Stack, Typography, alpha, useTheme } from '@mui/material'
import React from 'react'
import SubTaskList from './SubTaskList';

const TaskDetailsInfo = () => {

    const theme = useTheme();
        
    return (
        <>
            <Typography sx={{marginBottom: '9px'}} variant='h5'>Example Task Name</Typography>
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

            <Divider sx={{marginBottom: '14px'}} orientation="horizontal" />
            
            <SubTaskList />
        </>
    )
}

export default TaskDetailsInfo