import React from 'react'
import Comment from './Comment'
import { Box, Card, Grid, Stack, styled, useTheme } from '@mui/material';
import CommentInput from './CommentInput';

const CommentsComponent = () => {

  const comments = [
    {
      userId: 1234,
      userName: "Project Manager 1",
      dateTime: '12 March 2024 11:00',
      comment: 'some sample comments about the task'
    },
    {
      userId: 4356,
      userName: "Developer 1",
      dateTime: '12 March 2024 11:00',
      comment: 'adipisicing elit. Aut at sapiente eius'
    },
    {
      userId: 1155,
      userName: "Team Lead",
      dateTime: '12 March 2024 11:00',
      comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut at sapiente eius'
    },
    {
      userId: 6820,
      userName: "Developer 2",
      dateTime: '12 March 2024 11:00',
      comment: 'some sample comments about the task'
    },
    // {
    //   userId: 6820,
    //   userName: "Developer 2",
    //   dateTime: '12 March 2024 11:00',
    //   comment: 'some sample comments about the task'
    // },
    // {
    //   userId: 6820,
    //   userName: "Developer 2",
    //   dateTime: '12 March 2024 11:00',
    //   comment: 'some sample comments about the task'
    // },
    // {
    //   userId: 6820,
    //   userName: "Developer 2",
    //   dateTime: '12 March 2024 11:00',
    //   comment: 'some sample comments about the task'
    // },
    // {
    //   userId: 6820,
    //   userName: "Developer 2",
    //   dateTime: '12 March 2024 11:00',
    //   comment: 'some sample comments about the task'
    // },

  ]

  return (
    <>
      {/* <Box sx={{ height: '100%'}} direction={'column'} justifyContent={'space-between'}> */}
        <Stack direction={'column'} justifyContent={'space-between'}>
          <Box sx={{ height: '100%'}} direction={'column'} justifyContent={'space-between'}>
            <Grid xs={12} item>
              <Box sx={{ height: '100%'}} >
                {
                  comments?.map((obj) => {
                    return <Comment data={obj} />
                  })
                }
              </Box>
            </Grid>
            {/* <Grid xs={12} item>
              <CommentInput />
            </Grid> */}
          </Box>
          
          
        </Stack>
        
        
      {/* </Box> */}
      
    </>
  )
}

export default CommentsComponent