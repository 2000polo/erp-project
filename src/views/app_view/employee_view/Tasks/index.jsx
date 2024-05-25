import React from 'react';
import Kanban from '../../../../components/globalComponents/Kanban';
import { Box, Card, Chip, Fab, Stack, Tab, Tabs, ToggleButton, ToggleButtonGroup, styled, useTheme } from '@mui/material';
import { Groups, Person, Add, Search, ViewWeek, TableRows } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { blue } from '@mui/material/colors';
import AddTaskForm from '../../../../components/globalComponents/forms/AddTaskForm';
import { useSelector } from 'react-redux';

const Tasks = () => {

    const theme = useTheme();

    const [value, setValue] = React.useState(0);
    const [view, setView] = React.useState('list');

    const handleViewChange = (event, nextView) => {
      setView(nextView);
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
        //     // transform: 'scale(1.05)',
        //     background: 'linear-gradient(to top, #396afc, #2948ff);',
        // }
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
            field: 'task',
            headerName: 'Task',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 900,
            // valueGetter: (value, row) => `${row.assignee || ''} ${row.lastName || ''}`,
        },
        { field: 'category', headerName: 'Category', 
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
                    <Chip size='small' label="high" color="error" />
                </Stack>
            ),
        },
        { 
            field: 'label', 
            headerName: 'Label', 
            width: 200,
            renderCell: (params) => (
                <Stack direction={'row'} alignItems={'center'} sx={{height: '100%'}} spacing={1}>
                    <Chip size='small' label="primary" color="info" />
                    <Chip size='small' label="success" color="success" />
                </Stack>
            ),
        },
    ];
      
    const rows = [
        { id: 1, category: 'Bug', assignee: 'Jon', age: 35, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 2, category: 'Feature', assignee: 'Cersei', age: 42, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 3, category: 'Feature', assignee: 'Jaime', age: 45, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 4, category: 'Feature', assignee: 'Arya', age: 16, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 5, category: 'Feature', assignee: 'Daenerys', age: null, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 6, category: 'Bug', assignee: null, age: 150, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 7, category: 'Bug', assignee: 'Ferrara', age: 44, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 8, category: 'Feature', assignee: 'Rossini', age: 36, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 9, category: 'Bug', assignee: 'Harvey', age: 65, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 8, category: 'Feature', assignee: 'Rossini', age: 36, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 9, category: 'Bug', assignee: 'Harvey', age: 65, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 8, category: 'Feature', assignee: 'Rossini', age: 36, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 9, category: 'Bug', assignee: 'Harvey', age: 65, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 8, category: 'Feature', assignee: 'Rossini', age: 36, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 9, category: 'Bug', assignee: 'Harvey', age: 65, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 8, category: 'Feature', assignee: 'Rossini', age: 36, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 9, category: 'Bug', assignee: 'Harvey', age: 65, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 8, category: 'Feature', assignee: 'Rossini', age: 36, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 9, category: 'Bug', assignee: 'Harvey', age: 65, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 8, category: 'Feature', assignee: 'Rossini', age: 36, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 9, category: 'Bug', assignee: 'Harvey', age: 65, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
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
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons={false}
                        aria-label="scrollable auto tabs example"
                        // sx={{
                        //     [`& .${tabsClasses.scrollButtons}`]: {
                        //         '&.Mui-disabled': { opacity: 0.3 },
                        //     },
                        // }}
                        
                    >
                        <StyledTab label="My Tasks" {...a11yProps(1)} iconPosition="start"  icon={<Person/>} />
                        <StyledTab label="Team Tasks" {...a11yProps(0)} iconPosition="start"  icon={<Groups/>}/>
                    </Tabs>
                </Box>

                <Box >
                    <Stack direction={'row'} spacing={1}>
                        {/* <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search> */}
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
                            
                            {/* <ToggleButton value="quilt" aria-label="quilt">
                                <ViewQuiltIcon />
                            </ToggleButton> */}
                        </ToggleButtonGroup>
                        {/* <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<Add />}
                            sx={{bgcolor: blue[900]}}
                        >
                            Add Project
                            <VisuallyHiddenInput type="file" />
                        </Button> */}
                        <AddTaskForm />
                    </Stack>
                </Box>
            </Stack>
            

            <Box sx={{ marginTop: '16px'}}>
                
                <TabPanel value={value} index={0}>
                    <Kanban />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <StyledCard>
                        {/* <Typography variant="h6">
                            Your Tasks
                        </Typography> */}
                        <Box sx={{ height: 850, width: '100%' }}>
                            <StyledDataGrid 
                                rows={rows}
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
                    </StyledCard>
                </TabPanel>
            </Box>
        {/* 
            <Fab sx={fabStyle} color="primary" aria-label="add">
                <Add />
            </Fab> */}
        </>
    )
}

export default Tasks;