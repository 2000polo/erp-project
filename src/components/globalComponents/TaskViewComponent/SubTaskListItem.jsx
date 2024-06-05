import { RadioButtonChecked, TaskAlt } from '@mui/icons-material';
import { Checkbox, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const SubTaskListItem = (props) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
        
    return (
        <Grid container alignItems={'start'} spacing={1.5}> 
            <Grid item xs={.5}> 
                <Checkbox 
                    sx={{
                        '&:hover': { bgcolor: 'transparent' },
                        // display: 'block',
                        width: 16,
                        height: 16,
                    }}
                    {...label}  
                />
            </Grid>
            <Grid item xs={11.5}>  
                <Typography variant='body2'>{props?.desc}</Typography>
            </Grid>
        </Grid>
        
    )
}

export default SubTaskListItem