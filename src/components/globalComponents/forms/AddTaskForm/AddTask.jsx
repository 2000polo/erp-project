import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, styled, useTheme } from '@mui/material'
import { blue } from '@mui/material/colors';
import React, { useState } from 'react'

const CustomTextField = styled(TextField)({
    '& .MuiInputLabel-root': {
      color: 'blue', // Default label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#c7c7c7', // Label color when focused
    },
});

const FormContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px 0px',
    // maxWidth: '400px',
    margin: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    // backgroundColor: '#fff',
});


const AddTask = ({formValues, setFormValues}) => {

    const theme = useTheme();

    // const [formValues, setFormValues] = useState({
    //     projectName: '',
    //     description: '',
    //     projectManager: '',
    //     status: '',
    // });
    
    const handleInputChange = (e) => {
        // e.preventDefault();
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formValues);
    };

    
    


    console.log("re-renderd");

    return (
        <FormContainer>
            <Stack spacing={2} direction={'row'}>
                <CustomTextField
                    focused
                    label="Task Name"
                    name="taskName"
                    value={formValues.taskName}
                    onChange={(e) => handleInputChange(e)}
                    fullWidth
                    required
                />
                <CustomTextField
                    label="Department"
                    name="department"
                    value={formValues.department}
                    onChange={(e) => handleInputChange(e)}
                    required
                    fullWidth
                    focused
                    select
                >
                    <MenuItem value="Frontend">Frontend</MenuItem>
                    <MenuItem value="Backend">Backend</MenuItem>
                    <MenuItem value="UI/UX">UI/UX</MenuItem>
                </CustomTextField>
            </Stack>
            <CustomTextField
                // color={'red'}
                focused
                label="Description"
                name="description"
                value={formValues.description}
                onChange={(e) => handleInputChange(e)}
                multiline
                rows={4}
                fullWidth
                required
                id={'desc'}
            />
            <Stack direction={'row'} spacing={2}>
                <CustomTextField
                    focused
                    label="Assigned to"
                    name="assignee"
                    value={formValues.assignee}
                    onChange={(e) => handleInputChange(e)}
                    fullWidth
                    required
                    id={'assignee'}
                    select

                >
                    <MenuItem value="Developer 1">Developer 1</MenuItem>
                    <MenuItem value="Developer 2">Developer 2</MenuItem>
                    <MenuItem value="Developer 3">Developer 3</MenuItem>
                </CustomTextField>
                <CustomTextField
                    focused
                    label="Priority"
                    name="priority"
                    value={formValues.priority}
                    onChange={(e) => handleInputChange(e)}
                    fullWidth
                    required
                    id={'priority'}
                    select
                >
                    <MenuItem value="Critical">Critical</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                </CustomTextField>
                <CustomTextField
                    focused
                    label="Task Category"
                    name="taskCategroy"
                    value={formValues.taskCategroy}
                    onChange={(e) => handleInputChange(e)}
                    fullWidth
                    required
                    id={'taskCategroy'}
                    select
                >
                    <MenuItem value="Bug">Bug</MenuItem>
                    <MenuItem value="Feature">Feature</MenuItem>
                </CustomTextField>
            </Stack>
            <Button 
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                // startIcon={<Add />}
                sx={{bgcolor: blue[900]}}
                onClick={handleSubmit}
                size='large'
            >
                Add Task
            </Button>
        </FormContainer>
    )
}

export default AddTask