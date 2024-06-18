import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { blue } from '@mui/material/colors';
import { Add } from '@mui/icons-material';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, styled } from '@mui/material';
// import AddProject from './AddProject';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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

const AddSubTaskItem = () => {

    const GlassDialog = styled(Dialog)({
        '& .MuiPaper-root': {
          background: '#2e2e2e33', // Semi-transparent background
          backdropFilter: 'blur(10px)', // Blur effect
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Soft shadow
          border: '1px solid #ffffff0a', // Border
          borderRadius: '10px', // Rounded corners
        },
    });

      
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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

    // Project Name
    // Project Logo
    // Assigned Team
    // Client Name
    // Project Manager
    // Duration - start date end date
    // Project Description
    // Technologies Used
    // Phases


    return (
        <React.Fragment>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<Add />}
                sx={{bgcolor: blue[900]}}
                onClick={handleClickOpen}
                size='small'
            >
                Add Sub Task
            </Button>
            <GlassDialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                maxWidth='sm'
                fullWidth
            >
                {/* <DialogTitle>{"Add New Project"}</DialogTitle> */}
                <DialogContent>
                    <FormContainer>
                        <Grid container spacing={2} direction="row" alignItems={'center'} >
                            <Grid spacing={2} container item xs={10}>
                                <Grid item xs={12}> 
                                    <CustomTextField
                                        // color={'red'}
                                        focused
                                        label="Enter sub-task"
                                        name="sub_task"
                                        value={formValues.projectName}
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
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<Add />}
                                    sx={{bgcolor: blue[900]}}
                                    onClick={handleClickOpen}
                                    size='medium'
                                >
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </FormContainer>

                </DialogContent>
            </GlassDialog>
        </React.Fragment>
    )
}

export default AddSubTaskItem;