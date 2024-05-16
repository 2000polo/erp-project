import React from 'react';
import ProjectCard from './components/ProjectCard';
import { Grid } from '@mui/material';
import TaskList from './components/task_list';
import Kanban from '../../../../components/globalComponents/Kanban';
import AddPorjectCard from './components/AddPorjectCard';
import Schedules from './components/Schedules';
import TaskOverview from './components/TaskOverview';

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
        <Grid container spacing={2} direction="column" >
            <Grid container item spacing={2} direction="row" justifyContent= 'space-between'>
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
            </Grid>
            <Grid container item spacing={2} direction="row" justifyContent= 'space-between'>
                <Grid item xs={9}>
                    <TaskOverview />
                </Grid>
                <Grid item xs={3}>
                    <Schedules />
                </Grid>
            </Grid>
            
        </Grid>
        </>
    )
}

export default Dashboard;