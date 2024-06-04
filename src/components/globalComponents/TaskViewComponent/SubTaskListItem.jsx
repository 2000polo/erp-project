import { RadioButtonChecked, TaskAlt } from '@mui/icons-material';
import { Checkbox, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const SubTaskListItem = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
        
    return (
        <Grid container alignItems={'center'}> 
            <Grid item> 
                <Checkbox {...label}  />
            </Grid>
            <Grid item> 
                <Typography variant='body2'>Example subtask description one</Typography>
            </Grid>
        </Grid>
        
    )
}

export default SubTaskListItem