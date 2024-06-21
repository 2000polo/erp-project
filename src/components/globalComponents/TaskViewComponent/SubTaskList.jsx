import React from 'react'
import SubTaskListItem from './SubTaskListItem'
import { Grid, Stack, Typography } from '@mui/material'
import AddSubTaskItem from './AddSubTaskItem'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const SubTaskList = () => {

    const dispatch = useDispatch();
    const taskDetails = useSelector((state) => state?.tasks?.selected_task_data);

    console.log(taskDetails)
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
                        {/* <SubTaskListItem desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione architecto a harum!'/>
                        <SubTaskListItem desc='Lorem ipsum dolor sit amet.'/>
                        <SubTaskListItem desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, consequuntur!'/>
                        <SubTaskListItem desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quo eligendi eum?'/>
                        <SubTaskListItem desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisquam itaque cumque modi nemo minus alias voluptatum ipsum amet eum dicta, repellat dolorum rerum, laboriosam et sint molestiae ad nesciunt!'/>
                        <SubTaskListItem desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus nostrum consectetur eos beatae tempora iusto laudantium.'/> */}
                        {
                            taskDetails?.sub_tasks?.map((sub_task) => {
                                return <SubTaskListItem desc={sub_task?.sub_task}/>
                            })
                        }
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default SubTaskList