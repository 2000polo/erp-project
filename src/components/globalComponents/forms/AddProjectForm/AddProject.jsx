import React, { useState } from 'react'
import { Autocomplete, Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, styled, useTheme } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// Colors import
import { blue } from '@mui/material/colors';
// Internal components import
import ImageUpload from '../../ImageUpload';
// redux imports
import { useDispatch } from 'react-redux';
import { adddNewProject } from '../../../../app/projects/projectSlice';
import dayjs from 'dayjs';

const FormContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px 0px',
    margin: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
});

const CustomTextField = styled(TextField)({
    '& .MuiInputLabel-root': {
      color: 'blue', // Default label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#c7c7c7', // Label color when focused
    },
});

const AddProject = (props) => {

    const theme = useTheme();
    const dispatch = useDispatch();
    
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

        if(dispatch){
            dispatch(adddNewProject(
                {
                    project_name: formValues?.projectName,
                    desc: formValues.description,
                    percentage_completion: 0,
                    project_status: formValues.status,
                    client_name: formValues.clientName,
                    project_status: formValues?.status,
                }
            ));
        }

        props?.handleClose(true)
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
                            <DatePicker
                            name="start_date"
                            // value={dayjs(formValues.start_date)}
                            onChange={handleInputChange}
                            label="Start Date" />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={4}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                            name="end_date"
                            // value={dayjs(formValues.end_date)}
                            onChange={handleInputChange}
                            label="Delivery Date" />
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
                            <MenuItem value="In Progress">In Progress</MenuItem>
                            <MenuItem value="Not Started">Not Started</MenuItem>
                            <MenuItem value="Completed">Completed</MenuItem>
                            <MenuItem value="Halted">Halted</MenuItem>
                        </CustomTextField>
                    </Grid>
                    
                </Grid>
                <Grid item xs={12}>
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