import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Card, Chip, Stack, Typography, styled, useTheme } from '@mui/material';

const TaskOverview = () => {

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

    const StyledDataGrid = styled(DataGrid)({
        // root: {
        //     '& .MuiDataGrid-renderingZone': {
        //         maxHeight: 'none !important',
        
        //     },
        //     '& .MuiDataGrid-cell': {
        //         lineHeight: 'unset !important',
        //         maxHeight: 'none !important',
        //     },
        //     '& .MuiDataGrid-root .MuiDataGrid-cell ': {
        //         maxHeight: 'none !important',
        //         minHeight: 'mpne !important'
        //     },
        //     '& .MuiDataGrid-virtualScrollerRenderZone .MuiDataGrid-row ' : {
        //         maxHeight: 'none !important',
        
        //     },
        //     '.MuiDataGrid-columnSeparator': {
        //         display: 'none',
        //     },
        //     '&.MuiDataGrid-root': {
        //         border: 'none',
        //     },
           
        // },
        // color: 'red',
        borderColor: "#09090b00",
        // root: {
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
        // },
        
    });

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'task',
            headerName: 'Task',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 600,
            // valueGetter: (value, row) => `${row.assignee || ''} ${row.lastName || ''}`,
        },
        { field: 'category', headerName: 'Category', width: 120 },
        { field: 'assignee', headerName: 'Assignee', width: 130 },
        { 
            field: 'priority', 
            headerName: 'Priority', 
            // width: 200,
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
        // { field: 'category', headerName: 'Start Date', width: 130 },
        // {
        //   field: 'age',
        //   headerName: 'Age',
        //   type: 'number',
        //   width: 90,
        // },
        
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
      ];
        
    return (
        <StyledCard>
            {/* <Typography variant="h6">
                Your Tasks
            </Typography> */}
            <StyledDataGrid 
                rows={rows}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                },
                }}
                pageSizeOptions={[5, 10]}
                // checkboxSelection
            />
            
        </StyledCard>
    )
}

export default TaskOverview