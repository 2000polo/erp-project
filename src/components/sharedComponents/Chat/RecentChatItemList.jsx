import { List, Stack, styled } from '@mui/material'
import React from 'react'
import RecentChatItem from './RecentChatItem'

const RecentChatItemList = () => {

    const StyledStack = styled(Stack)({
        overflowY: 'scroll',
        height: 600,
        // // '& ul': { paddingRight: 1},
        // '&::-webkit-scrollbar': {
        // width: '2px'
        // },
        // '&::-webkit-scrollbar-track': {
        // // boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        // // webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        // backgroundColor: '#53525259',
        // },
        // '&::-webkit-scrollbar-thumb': {
        // // backgroundColor: '#1d73f9',
        // backgroundColor: '#ffffff82',
        // width: '4px'
        // // outline: '1px solid slategrey'
        // }
    });
        
    return (
        // <StyledStack direction={'column'} >
            // <RecentChatItem />
            <List 
                sx={{
                  // width: '100%',
                  // maxWidth: 360,
                  // bgcolor: 'background.paper',
                  // position: 'relative',
                  overflow: 'auto',
                  height: 600,
                  '& ul': { paddingRight: 1},
                  '&::-webkit-scrollbar': {
                    width: '2px'

                  },
                  '&::-webkit-scrollbar-track': {
                    // boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                    // webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                    backgroundColor: '#53525259',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    // backgroundColor: '#1d73f9',
                    backgroundColor: '#ffffff82',
                    width: '4px'
                    // outline: '1px solid slategrey'
                  }
                }}
              >
                {
                  [1,2,3,4,5,6,7,8,9,10,91,12,10,12,34]?.map((obj, i) => {
                    return (
                      <li key={`section-${i}`}>
                        <ul><RecentChatItem /></ul>
                      </li>
                    )
                  })
                }
              </List>
        // </StyledStack>
    )
}

export default RecentChatItemList