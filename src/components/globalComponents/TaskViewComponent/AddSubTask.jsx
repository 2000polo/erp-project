import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import { Add } from '@mui/icons-material';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateTaskById } from '../../../app/tasks/taskSlice';
import md5 from 'blueimp-md5';
import { useSelector } from 'react-redux';


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

const AddSubTask = () => {
    
    const dispatch = useDispatch();
    const selectedTaskId = useSelector((state) => state?.tasks?.selected_task_data?.id);

    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        // Handle form submission logic here
        console.log(formValues);
        if(dispatch){
            dispatch(updateTaskById(
                {
                    id: selectedTaskId,
                    data: {
                        "sub_task_id": md5(Math.random()).substr(0, 5),
                        "sub_task": formValues?.sub_task,
                        "is_complete": false
                    },
                }
            ));
        }
    };
        
    return (
        <FormContainer>
            <Grid container spacing={2} direction="row" alignItems={'center'} >
                <Grid spacing={2} container item xs={10}>
                    <Grid item xs={12}> 
                        <CustomTextField
                            // color={'red'}
                            focused
                            label="Enter sub-task"
                            name="sub_task"
                            value={formValues.sub_task}
                            onChange={handleInputChange}
                            fullWidth
                            required
                            size='small'
                        />
                    </Grid>
                </Grid>
                <Grid item xs={2}> 
                    <Button
                        component="label"
                        // role={}
                        variant="contained"
                        // tabIndex={-1}
                        startIcon={<Add />}
                        sx={{bgcolor: blue[900]}}
                        onClick={handleSubmit}
                        size='medium'
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
        </FormContainer>
    )
}

export default AddSubTask