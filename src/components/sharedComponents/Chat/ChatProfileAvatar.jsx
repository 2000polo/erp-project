import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'

const ChatProfileAvatar = () => {
  return (
    <Stack spacing={1} alignItems={'center'}>
        <Avatar sizes='md' >A</Avatar>
        <Typography variant='caption'>{'nameofperson'.slice(0,5)}</Typography>
    </Stack>
  )
}

export default ChatProfileAvatar