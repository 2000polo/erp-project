import { RadioButtonChecked, TaskAlt } from '@mui/icons-material';
import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const SubTaskListItem = (props) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
        
    return (
        <FormControlLabel
            value="top"
            control={<Checkbox />}
            label={props?.desc}
            labelPlacement="end"
        />
    )
}

export default SubTaskListItem