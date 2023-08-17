import React from 'react';
import ProjectCard from './components/ProjectCard';
import { Grid } from '@mui/material';
import TaskList from './components/task_list';

const Dashboard = () => {
    return (
        <>
        <Grid container spacing={2} direction="column" >
            <Grid container item spacing={2} direction="row" justifyContent= 'space-between'>
                <Grid item xs={3} >
                    <ProjectCard />
                </Grid>
                <Grid item xs={3}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={3}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={3}>
                    <ProjectCard />
                </Grid>
            </Grid>
            <Grid container item spacing={2} direction="row" justifyContent= 'space-between' >
                <Grid item xs={3} >
                    <ProjectCard />
                </Grid>
                <Grid item xs={3}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={3}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={3}>
                    <ProjectCard />
                </Grid>
            </Grid>
            <Grid container item spacing={2} direction="row" justifyContent= 'space-between' >
                <Grid item xs={3} >
                    <TaskList />
                </Grid>
            </Grid>
        </Grid>
        
        </>
    )
}

export default Dashboard;