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
import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography, styled } from '@mui/material';
import AddProject from './AddProject';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const AddProjectForm = () => {

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
            >
                Add Project
            </Button>
            <GlassDialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Add New Project"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                    <AddProject />
                </DialogContent>
            </GlassDialog>
        </React.Fragment>
    )
}

export default AddProjectForm;