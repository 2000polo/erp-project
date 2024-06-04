import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';
import React from 'react'

const MetaInfoContent = () => {
  return (
    <>
      <Box sx={{marginBottom: '14px'}}>
        <Typography variant='subtitle1' >Labels</Typography>
        <Stack useFlexGap spacing={1} direction={'row'} flexWrap='wrap'>
          <Chip label="good first issue" />
          <Chip label="modification" />
          <Chip label="feature" />
          <Chip label="suggestion" />
          <Chip label="enchancement" />
        </Stack>
      </Box>
      
      <Box >
        <Typography variant='subtitle1' >Reviewers</Typography>
        <Stack useFlexGap spacing={1} direction={'row'} flexWrap='wrap'>
          <Chip avatar={<Avatar>P</Avatar>} label="Project Manager 1" />
          <Chip avatar={<Avatar>T</Avatar>} label="Team Lead 1" />
          <Chip avatar={<Avatar>D</Avatar>} label="Developer 1" />
        </Stack>
      </Box>
    </>
  )
}

export default MetaInfoContent;