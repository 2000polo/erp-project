import { Autocomplete, Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, styled, useTheme } from '@mui/material'
import { blue } from '@mui/material/colors';
import React, { useState } from 'react'
import ImageUpload from '../../ImageUpload';
import { DateField } from '@mui/x-date-pickers/DateField';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

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



const AddProject = () => {

    const theme = useTheme();
    
    const [formValues, setFormValues] = useState({
        projectName: '',
        description: '',
        projectManager: '',
        status: '',
    });

    const top100Films = [
        { title: 'Developer 1', employee_id: 12314 },
        { title: 'Developer 2', employee_id: 23425 },
        { title: 'Developer 3', employee_id: 56566 },
        { title: 'Developer 4', employee_id: 61516 },
        { title: 'Developer 5', employee_id: 54465 },
        { title: 'Developer 6', employee_id: 65151 },
    ]
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formValues);
    };

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
                    <Grid item xs={4}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Start Date" />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={4}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Delivery Date" />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={4}>
                        <CustomTextField
                            focused
                            label="Status"
                            name="status"
                            value={formValues.status}
                            onChange={(e) => handleInputChange(e)}
                            fullWidth
                            required
                            id={'status'}
                            select
                        >
                            <MenuItem value="Critical">Critical</MenuItem>
                            <MenuItem value="High">High</MenuItem>
                            <MenuItem value="Medium">Medium</MenuItem>
                            <MenuItem value="Low">Low</MenuItem>
                        </CustomTextField>
                    </Grid>
                    
                </Grid>
                <Grid item xs={6}>
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
                </Grid>
                <Grid item xs={6}>
                    <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        defaultValue={[top100Films[3]]}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Team Member"
                                placeholder="Favorites"
                            />
                        )}
                    />
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
                Add Project
            </Button>
        </FormContainer>
    )
}

export default AddProject