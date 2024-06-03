import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, styled, useTheme } from '@mui/material'
import { blue } from '@mui/material/colors';
import React, { useState } from 'react'
import ImageUpload from '../../ImageUpload';

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
            <Grid container spacing={2} direction="row" >
                <Grid item xs={2}>
                    <ImageUpload />
                </Grid>
                <Grid spacing={2} container item xs={10}>
                    <Grid item xs={6}> 
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
                    </Grid>
                    <Grid item xs={6}> 
                        <CustomTextField
                            // color={'red'}
                            focused
                            label="Client"
                            name="clientName"
                            value={formValues.clientName}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextField
                            // color={'red'}
                            focused
                            label="Client Website"
                            name="website"
                            value={formValues.website}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextField
                            // color={'red'}
                            focused
                            label="Client Website"
                            name="website"
                            value={formValues.website}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                    </Grid>
                </Grid>
            </Grid>
            
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