import React from 'react'
import SubTaskListItem from './SubTaskListItem'
import { Button, Divider, Grid, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import { Add } from '@mui/icons-material'

const SubTaskList = () => {
  return (
    <>
        <Grid container alignItems={'center'} justifyContent={'space-between'}>
            <Grid item>
                <Typography variant='h6'>Sub Tasks</Typography>
            </Grid>
            <Grid item>
                <Button 
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<Add />}
                    sx={{bgcolor: blue[900]}}
                    // onClick={handleSubmit}
                    size='small'
                >
                    Add Sub Task
                </Button>
            </Grid>
        </Grid>
        {/* <Divider orientation="horizontal" /> */}
        <SubTaskListItem />
        <SubTaskListItem />
        <SubTaskListItem />
        <SubTaskListItem />
        <SubTaskListItem />
        <SubTaskListItem />
    </>
  )
}

export default SubTaskList