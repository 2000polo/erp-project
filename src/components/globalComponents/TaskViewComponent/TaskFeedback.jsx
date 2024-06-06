import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import HistoryTrack from './HistoryTrack';
import { History } from '@mui/icons-material';
import CommentsComponent from './CommentsComponent';

const TaskFeedback = () => {

  const [taskFeedbackTab, setTaskFeedbackTab] = useState('history')

  const handleChange = (event, newAlignment) => {
    setTaskFeedbackTab(newAlignment);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <ToggleButtonGroup
        // color="secondary"
        value={taskFeedbackTab}
        exclusive
        aria-label="Platform"
        size='small'
        onChange={handleChange}
      >
        <ToggleButton value="history">History</ToggleButton>
        <ToggleButton value="comments">Comments</ToggleButton>
      </ToggleButtonGroup>
      {
        taskFeedbackTab === 'history' ?
        <Box>
          <HistoryTrack />
        </Box> :
        // <Box sx={{ height: '100%'}}>
          <CommentsComponent />
        // </Box>
      }
    </>
  )
}

export default TaskFeedback