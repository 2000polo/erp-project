import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, styled, useTheme } from '@mui/material'
import { blue } from '@mui/material/colors';
import React, { useState } from 'react'

const AddProject = () => {

    const theme = useTheme();
    
    const [formValues, setFormValues] = useState({
        projectName: '',
        description: '',
        projectManager: '',
        status: '',
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formValues);
    };

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

    const CustomTextField = styled(TextField)({
        '& .MuiInputLabel-root': {
          color: 'blue', // Default label color
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: '#c7c7c7', // Label color when focused
        },
    });

    return (
        <FormContainer>
            {/* <Typography variant="h5">Add New Project</Typography> */}
            <CustomTextField
                // color={'red'}
                focused
                label="Project Name"
                name="projectName"
                value={formValues.projectName}
                onChange={handleInputChange}
                fullWidth
                required

            />
            <CustomTextField
                // color={'red'}
                focused
                label="Description"
                name="description"
                value={formValues.description}
                onChange={handleInputChange}
                multiline
                rows={4}
                fullWidth
                required
            />
            <CustomTextField
                // color={'red'}
                focused
                label="Project Manager"
                name="projectManager"
                value={formValues.projectManager}
                onChange={handleInputChange}
                fullWidth
                required
            />
            <FormControl fullWidth required>
                <InputLabel>Status</InputLabel>
                <Select
                    label="Status"
                    name="status"
                    value={formValues.status}
                    onChange={handleInputChange}
                >
                <MenuItem value="Not Started">Not Started</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                </Select>
            </FormControl>
            <Button 
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                // startIcon={<Add />}
                sx={{bgcolor: blue[900]}}
                onClick={handleSubmit}
            >
                Add Project
            </Button>
        </FormContainer>
    )
}

export default AddProject