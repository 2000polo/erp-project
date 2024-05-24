import React from 'react';
import { Badge, Box, Card, Grid, Stack, Typography, alpha, styled, useTheme } from '@mui/material';
import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    Timeline,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from "@mui/lab";
import  { timelineItemClasses } from '@mui/lab/TimelineItem';

const PrevDayUpdates = () => {

    const theme = useTheme();

    const StyledCard = styled(Card)({
        // maxWidth: '345px',
        // minHeight: '200px',
        backgroundColor: theme.palette.background.default,
        // background: 'linear-gradient(to top, #396afc, #2948ff);',
        borderRadius: '10px',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        // transition: 'all ease-in 2s',
        padding: '12px',

        // '&:hover':{
        //     // transform: 'scale(1.05)',
        //     background: 'linear-gradient(to top, #396afc, #2948ff);',
        // }
    })

    const prevDayTasks = [
        {
            activity: 'Activity Name',
            time_range: ['9:00am', '11am'],
            description: 'Task descriptions are usually proportional to their complexity. So, in case you are writing a description for a complex Task',
        },
        {
            activity: 'Activity Name',
            time_range: ['9:00am', '11am'],
            description: 'Task descriptions are usually proportional to their complexity. So, in case you are writing a description for a complex Task',
        },
        {
            activity: 'Activity Name',
            time_range: ['9:00am', '11am'],
            description: 'Task descriptions are usually proportional to their complexity. So, in case you are writing a description for a complex Task',
        },
        {
            activity: 'Activity Name',
            time_range: ['9:00am', '11am'],
            description: 'Task descriptions are usually proportional to their complexity. So, in case you are writing a description for a complex Task',
        },
        {
            activity: 'Activity Name',
            time_range: ['9:00am', '11am'],
            description: 'Task descriptions are usually proportional to their complexity. So, in case you are writing a description for a complex Task',
        },
    ]
    
    return (
        <>
            <StyledCard>
                <Typography variant="h6" sx={{marginBottom: '10px'}}>
                    Previous Day
                </Typography>
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                          flex: 0,
                          padding: 0,
                        },
                    }}
                >
                    {
                        prevDayTasks?.map((taskObj) => {
                            return (
                                <TimelineItem>
                                    <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Stack>
                                            <Typography  variant="subtitle1">
                                                {taskObj?.activity}
                                            </Typography>
                                            <Typography  variant="caption" color={alpha(theme.palette.text.primary, 0.5)}>
                                                {taskObj?.time_range[0]} - {taskObj?.time_range[0]}
                                            </Typography>
                                            <Typography  variant="body2" color={alpha(theme.palette.text.primary, 0.7)}>
                                                {taskObj?.description}
                                            </Typography>
                                        </Stack>
                                    </TimelineContent>
                                </TimelineItem>
                            )
                        })
                    }
                    
                </Timeline>
            </StyledCard>
        </>
    )
}

export default PrevDayUpdates;