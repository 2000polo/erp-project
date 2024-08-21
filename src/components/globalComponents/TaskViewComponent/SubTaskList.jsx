import React from 'react'
import SubTaskListItem from './SubTaskListItem'
import { Grid, Stack, Typography } from '@mui/material'
import AddSubTaskItem from './AddSubTaskItem'
import { useSelector } from 'react-redux'

const SubTaskList = (props) => {

    let taskDetails = useSelector((state) => state?.tasks?.selected_task_data);

    return (
        <>
            <Grid gap={2} container alignItems={'center'} justifyContent={'space-between'}>
                <Grid item>
                    <Typography variant='h6'>Sub Tasks</Typography>
                </Grid>
                <Grid item>
                    <AddSubTaskItem />
                </Grid>
                <Grid item xs={12}>
                    <Stack spacing={1} useFlexGap>
                        {
                            taskDetails?.sub_tasks?.map((sub_task, key) => {
                                return <SubTaskListItem key={key} desc={sub_task?.sub_task}/>
                            })
                        }
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default SubTaskList