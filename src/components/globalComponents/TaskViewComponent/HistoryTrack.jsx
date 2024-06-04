import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'
import { Stack, Typography, alpha, useTheme } from '@mui/material'
import React from 'react'
import  { timelineItemClasses } from '@mui/lab/TimelineItem';


const HistoryTrack = () => {
    
    const theme = useTheme();

    const prevDayTasks = [
        {
            activity: 'Activity Name',
            time_range: ['9:00am', '11am'],
            description: 'Task Started',
        },
        {
            activity: 'Activity Name',
            time_range: ['9:00am', '11am'],
            description: 'Sub task added - total of 5 sub tasks',
        },
        {
            activity: 'Activity Name',
            time_range: ['9:00am', '11am'],
            description: 'Task status changed from In-Progress to Halted',
        },
        {
            activity: 'Activity Name',
            time_range: ['9:00am', '11am'],
            description: 'Sub task #212 marked as completed',
        },
        {
            activity: 'Activity Name',
            time_range: ['9:00am', '11am'],
            description: 'Task status marked to Halted to In Progress by Developer 1',
        },
    ]
        
    return (
        <>
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
                                <TimelineDot variant="outlined" color="grey" />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Stack>
                                        {/* <Typography  variant="subtitle1">
                                            {taskObj?.activity}
                                        </Typography> */}
                                        
                                        <Typography  variant="body2" color={alpha(theme.palette.text.primary, 0.6)}>
                                            {taskObj?.description}
                                        </Typography>
                                        <Typography  variant="caption" color={alpha(theme.palette.text.primary, 0.4)}>
                                            {taskObj?.time_range[0]} - {taskObj?.time_range[0]}
                                        </Typography>
                                    </Stack>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    })
                }
                
            </Timeline>
        </>
    )
}

export default HistoryTrack