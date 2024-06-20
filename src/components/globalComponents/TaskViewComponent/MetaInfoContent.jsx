import { Avatar, Box, Chip, Stack, Typography, useTheme } from '@mui/material';
import React from 'react'

const MetaInfoContent = () => {

  const theme = useTheme();

  const labels = [
    {
      label: 'good first issue',
      value: 'good_first_issue'
    },
    {
      label: 'modification',
      value: 'modification'
    },
    {
      label: 'feature',
      value: 'feature'
    },
    {
      label: 'suggestion',
      value: 'suggestion'
    },
    {
      label: 'enchancement',
      value: 'enchancement'
    },
  ];

  console.log("thme", theme)
  return (
    <>
      <Box sx={{marginBottom: '14px'}}>
        <Typography variant='subtitle1' >Labels</Typography>
        <Stack useFlexGap spacing={1} direction={'row'} flexWrap='wrap'>
          {/* <Chip label="good first issue" />
          <Chip label="modification" />
          <Chip label="feature" />
          <Chip label="suggestion" />
          <Chip label="enchancement" /> */}
          {
            labels?.map((label, i) => {
              return <Chip sx={{background: theme?.palette?.chip?.[label?.value]}} key={`label_key_${i}`} label={label?.label} />
            })
          }
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