import React from 'react';
import Kanban from '../../../../components/globalComponents/Kanban';
import { Box, Card, Chip, Fab, Stack, Tab, Tabs, ToggleButton, ToggleButtonGroup, styled, useTheme } from '@mui/material';
import { Groups, Person, Add, Search, ViewWeek, TableRows } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { blue } from '@mui/material/colors';
import AddTaskForm from '../../../../components/globalComponents/forms/AddTaskForm';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../../../../app/tasks/taskSlice';

const Tasks = () => {

    const theme = useTheme();
    const dispatch = useDispatch();

    const tasks = useSelector((state) => state?.tasks?.tasks);

    const [value, setValue] = React.useState(0);
    const [view, setView] = React.useState('table');

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

    const columns = [
        { field: 'id', headerName: 'ID', 
        width: 70 },
        {
            field: 'description',
            headerName: 'Task',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 900,
            // valueGetter: (value, row) => `${row.assignee || ''} ${row.lastName || ''}`,
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
            width: 260,
            renderCell: (params) => (
                <Stack direction={'row'} alignItems={'center'} sx={{height: '100%'}} spacing={1}>
                    {
                        // console.log(params)
                        params?.formattedValue?.map((label) => {
                            return (
                                <Chip size='small' label={label?.value} color="info" />
                            )
                        })
                    }
                    
                </Stack>
            ),
        },
    ];

    console.log('tasks from redux store', useSelector(state => state?.tasks?.tasks))

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
        </>
    )
}

export default Tasks;