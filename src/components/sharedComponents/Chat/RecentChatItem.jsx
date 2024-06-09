import { Avatar, Card, Stack, Typography } from '@mui/material'
import React from 'react'

const RecentChatItem = () => {
  return (
    <Card sx={{marginBottom: '12px', padding: '12px'}}>
        <Stack spacing={1} direction={'row'} alignItems={'center'} >
            <Avatar>A</Avatar>
            <Stack>
                <Typography variant='subtitle2'>Employee Name</Typography>
                <Typography variant='caption'>{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eos alias inventore quisquam nesciunt modi tempore aperiam natus fugiat laudantium quo, error, esse nihil! Corrupti odio accusantium ad laborum iusto'?.slice(0, 30)}</Typography>
            </Stack>
        </Stack>
    </Card>
    
  )
}

export default RecentChatItem