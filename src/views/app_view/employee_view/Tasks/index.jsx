import React, { useState } from 'react';
import Kanban from '../../../../components/globalComponents/Kanban';
import { Box, Button, Card, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, IconButton, Stack, Tab, Tabs, ToggleButton, ToggleButtonGroup, Typography, alpha, keyframes, styled, useTheme } from '@mui/material';
import { Groups, Person, Add, Search, ViewWeek, TableRows, PlayArrow, TaskAlt, DirectionsRun } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { blue } from '@mui/material/colors';
import AddTaskForm from '../../../../components/globalComponents/forms/AddTaskForm';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addNewTask, getTaskDetailsById } from '../../../../app/tasks/taskSlice';
import TaskViewComponent from '../../../../components/globalComponents/TaskViewComponent';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const Tasks = () => {

    const theme = useTheme();
    const dispatch = useDispatch();

    const tasks = useSelector((state) => state?.tasks?.tasks);

    const [value, setValue] = useState(0);
    const [view, setView] = useState('table');

    const [open, setOpen] = useState(false);

    const handleClickOpen = (id) => {
        dispatch(getTaskDetailsById({
            id: id
        }));
        setOpen(true);

    };

    console.log('printing store data', useSelector((state) => state?.tasks))

    const handleClose = () => {
        setOpen(false);
    };

    const handleViewChange = (event, nextView) => {
      setView(nextView);
      dispatch(addNewTask('action'));
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        return value == index && children
    }

    const taskActionStatus = {
        "open": {
            icon: <PlayArrow/>,
            color: ''
        },
        "in progress": {
            icon: <DirectionsRun/>,
            color: '',
            animation: true
        },
        "closed": {
            icon: <TaskAlt />,
            color: '',
            popover: true
        }
    }

    const StyledTab = styled(Tab)({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
        color: '#fff',
        },
        '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    });

    const StyledCard = styled(Card)({
        backgroundColor: theme.palette.background.default,
        borderRadius: '10px',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        padding: '12px',
    })

    function a11yProps(index) {
        return {
          id: `scrollable-auto-tab-${index}`,
          "aria-controls": `scrollable-auto-tabpanel-${index}`
        };
    }
    const StyledDataGrid = styled(DataGrid)({
        borderColor: "#09090b00",
        '.MuiDataGrid-root': {
            backgroundColor: 'red', // Change the background color of the grid
        },
        '.MuiDataGrid-row': {
            color: 'whitesmoke', // Change the text color of rows
        },
        ' .MuiDataGrid-columnHeaders': {
            backgroundColor: 'red !important', // Change the background color of column headers
        },
        '.css-teffd5-MuiDataGrid-root': {
            BorderColor: 'none'
        },
    });

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 5,
        width: '100%',
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));

    const pulseAnimation = (color) => {
        return keyframes`
        0% {
            box-shadow: 0 0 0 0px ${color};
            scale: 0.7;
        }
        50% {
            box-shadow: 0 0 0 10px ${color};
            scale: 1;
        }
        100% {
            box-shadow: 0 0 0 0px  ${color};
            scale: 0.7;
        }`
    }

    const columns = [
        { field: 'id', headerName: 'ID', 
        width: 70 },
        {
            field: 'description',
            headerName: 'Task',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 520,
            renderCell: (params) => (
                <Stack direction={'row'} alignItems={'center'} sx={{height: '100%'}} spacing={1}>
                <Typography variant='body2' onClick={() => handleClickOpen(params?.id)}>
                    {params?.formattedValue}
                </Typography>
                </Stack>
            ),
        },
        { field: 'status', headerName: 'Action', 
            width: 60,
            renderCell: (params) => (
                <Stack direction={'row'} alignItems={'center'} sx={{height: '100%'}} spacing={1}>
                    <IconButton 
                    sx={{
                        borderRadius: '50%',
                        animation: params?.formattedValue === 'in progress' ? `${pulseAnimation(alpha(theme?.palette?.task_status?.[params?.formattedValue], 0.2))} 1s infinite` : 'none',
                        background: theme?.palette?.task_status?.[params?.formattedValue]
                    }}
                    // onClick={() => console.log("params n clicking button", params)}
                    size='small'  
                    variant="contained" >{taskActionStatus?.[params?.formattedValue]?.icon}</IconButton>
                </Stack>
            ),
        },
        { field: 'progress', headerName: 'Progress', 
            width: 220,
            renderCell: (params) => (
                <Stack direction={'row'} alignItems={'center'} sx={{height: '100%'}} spacing={1}>
                    <BorderLinearProgress variant="determinate" value={params?.formattedValue} />
                    <Typography variant='body2' onClick={handleClickOpen}>
                        {params?.formattedValue}%
                    </Typography>
                </Stack>
            ),
        },
        { field: 'taskCategroy', headerName: 'Category', 
            width: 120 
        },
        { field: 'assignee', headerName: 'Assignee', 
            width: 130 
        },
        { 
            field: 'priority', 
            headerName: 'Priority', 
            width: 120,
            renderCell: (params) => (
                <Stack direction={'row'} alignItems={'center'} sx={{height: '100%'}} spacing={1}>
                    <Chip size='small' label={params?.formattedValue} color="error" />
                </Stack>
            ),
        },
        { 
            field: 'labels', 
            headerName: 'Label', 
            width: 360,
            renderCell: (params) => (
                params?.formattedValue?.map((label) => {
                    return (
                        <Chip sx={{background: theme?.palette?.chip?.[label?.value], marginRight: '5px'}} size='small' label={label?.title} />
                    )
                })
            ),
        },
    ];

    const fabStyle = {
        position: 'absolute',
        bottom: 26,
        right: 26,
        bgcolor: blue[900],
    };



    return (
        <>
            {/* Header */}
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons={false}
                        aria-label="scrollable auto tabs example"
                    >
                        <StyledTab label="My Tasks" {...a11yProps(1)} iconPosition="start"  icon={<Person/>} />
                        <StyledTab label="Team Tasks" {...a11yProps(0)} iconPosition="start"  icon={<Groups/>}/>
                    </Tabs>
                </Box>

                <Box >
                    <Stack direction={'row'} spacing={1}>
                        <ToggleButtonGroup
                            orientation="horizontal"
                            value={view}
                            exclusive
                            onChange={handleViewChange}
                        >
                            <ToggleButton value="table" aria-label="table">
                                <TableRows />
                            </ToggleButton>

                            <ToggleButton value="kanban" aria-label="kanban">
                                <ViewWeek />
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <AddTaskForm />
                    </Stack>
                </Box>
            </Stack>
            
            {/* Tabs and page contents */}
            <Box sx={{ marginTop: '16px'}}>
                <TabPanel value={value} index={0}>
                    {
                        view === 'table' ?
                        <StyledCard>
                            <Box sx={{ height: 800, width: '100%' }}>
                                <StyledDataGrid 
                                    rows={tasks}
                                    columns={columns}
                                    initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 15 },
                                    },
                                    }}
                                    pageSizeOptions={[5, 10]}
                                    // checkboxSelection
                                    
                                />
                            </Box>
                        </StyledCard> :
                        <Kanban />
                    }
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {
                        view === 'table' ?
                        <StyledCard>
                            <Box sx={{ height: 800, width: '100%' }}>
                                <StyledDataGrid 
                                    rows={tasks}
                                    columns={columns}
                                    initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 15 },
                                    },
                                    }}
                                    pageSizeOptions={[5, 10]}
                                    // checkboxSelection
                                />
                            </Box>
                        </StyledCard> :
                        <Kanban />
                    }
                </TabPanel>
            </Box>
            
            <TaskViewComponent open={open} onClose={handleClose} />
        </>
    )
}

export default Tasks;