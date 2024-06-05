import React from 'react'
import SubTaskListItem from './SubTaskListItem'
import { Button, Divider, Grid, Stack, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import { Add } from '@mui/icons-material'

const SubTaskList = () => {
  return (
    <>
        <Grid gap={2} container alignItems={'center'} justifyContent={'space-between'}>
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
            <Grid item xs={12}>
                <Stack spacing={1} useFlexGap>
                    <SubTaskListItem desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione architecto a harum!'/>
                    <SubTaskListItem desc='Lorem ipsum dolor sit amet.'/>
                    <SubTaskListItem desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, consequuntur!'/>
                    <SubTaskListItem desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quo eligendi eum?'/>
                    <SubTaskListItem desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisquam itaque cumque modi nemo minus alias voluptatum ipsum amet eum dicta, repellat dolorum rerum, laboriosam et sint molestiae ad nesciunt!'/>
                    <SubTaskListItem desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus nostrum consectetur eos beatae tempora iusto laudantium.'/>
                </Stack>
            </Grid>
        </Grid>
        {/* <Divider orientation="horizontal" /> */}
        
        
    </>
  )
}

export default SubTaskList