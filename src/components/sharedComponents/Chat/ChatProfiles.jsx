import { Avatar, Paper, Stack, styled } from '@mui/material'
import React from 'react'

const ChatProfiles = () => {

    const StyledStack = styled(Stack)({
        overflow: 'auto',
        // height: 600,
        // '& ul': { paddingRight: 1},
        '&::-webkit-scrollbar': {
        height: '2px'
        },
        '&::-webkit-scrollbar-track': {
        // boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        // webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        backgroundColor: '#53525259',
        },
        '&::-webkit-scrollbar-thumb': {
        // backgroundColor: '#1d73f9',
        backgroundColor: '#ffffff82',
        height: '4px'
        // outline: '1px solid slategrey'
        }
    });

  return (
    <StyledStack gap={1} direction={'row'}>
        {
            [1,2,3,4,5,6,7,8,9,10,91,12,10,12,34]?.map((obj, i) => {
                return <Avatar sx={{ marginBottom: '12px'}} key={`avatar-list-chat-icon-${i}`}>A</Avatar>
            })
        }
    </StyledStack>
  )
}

export default ChatProfiles