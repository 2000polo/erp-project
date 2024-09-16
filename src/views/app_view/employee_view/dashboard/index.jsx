import React from 'react';
import ProjectCard from './components/ProjectCard';
import { Grid, Stack } from '@mui/material';
import TaskList from './components/task_list';
import Kanban from '../../../../components/globalComponents/Kanban';
import AddPorjectCard from './components/AddPorjectCard';
import Schedules from './components/Schedules';
import TaskOverview from './components/TaskOverview';
import MeetingsNotifications from './components/MeetingsNotifications';
import PrevDayUpdates from './components/PrevDayUpdates';
import CurrentTask from './components/CurrentTask';
import GanttChart from '../../../../components/globalComponents/GanttChart';

const Dashboard = () => {

    const projectStatus = [
        {
            project_name: 'Project Name',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
        {
            project_name: 'Project Name',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
        {
            project_name: 'Project Name',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
        // {
        //     project_name: 'Project Name',
        //     desc: 'To be deliverd in 120 days',
        //     percentage_completion: 50,
        //     project_status: 'In Porgress'
        // },
    ];

    console.log("Array lenght", projectStatus?.length);
    console.log("Array add project card span", 12 - projectStatus?.length * 3);

    return (
        <>
        <Grid container spacing={2} direction="row" >
            {/* <Grid container item spacing={2} direction="row" justifyContent= 'space-between'> */}
            
            <>
                {
                    projectStatus?.map((project) => {
                        return (
                            <Grid item xs={3}>
                                <ProjectCard data={project} />
                            </Grid>
                        )
                    })
                }
                {
                    projectStatus?.length <= 3 ?
                    <Grid item xs={12 - projectStatus?.length * 3}>
                        <AddPorjectCard />
                    </Grid> :
                    ''
                }
            </>
                
            {/* </Grid> */}
            <Grid container item spacing={2} direction="row">
                {/* <Grid item xs={9}>
                    <TaskOverview />
                </Grid> */}
                <Grid xs={9} container item spacing={2} direction="row">
                    <Grid item xs={4}>
                        <CurrentTask />
                    </Grid>
                    <Grid item xs={4}>
                        <MeetingsNotifications />
                    </Grid>
                    <Grid item xs={4}>
                        <Schedules />
                    </Grid>
                    
                    {/* <Grid item xs={4}>
                        <Schedules />
                    </Grid> */}
                    {/* <Grid item xs={12}>
                        <TaskOverview />
                    </Grid> */}
                    <Grid item xs={12}>
                        <GanttChart />
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Stack spacing={2}>
                        <PrevDayUpdates />
                        {/* <Schedules /> */}
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                </Grid>
            </Grid>
            {/* <Grid container item spacing={2} direction="row" justifyContent= 'space-between'> */}
                
                
            {/* </Grid> */}
            
        </Grid>
        </>
    )
}

export default Dashboard;