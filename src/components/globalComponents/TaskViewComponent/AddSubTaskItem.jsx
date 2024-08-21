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
import { useDispatch } from 'react-redux';
import { updateTaskById } from '../../../app/tasks/taskSlice';
import { useSelector } from 'react-redux';
import md5 from 'blueimp-md5';
import AddSubTask from './AddSubTask';
// import AddProject from './AddProject';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const GlassDialog = styled(Dialog)({
    '& .MuiPaper-root': {
      background: '#2e2e2e33', // Semi-transparent background
      backdropFilter: 'blur(10px)', // Blur effect
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Soft shadow
      border: '1px solid #ffffff0a', // Border
      borderRadius: '10px', // Rounded corners
    },
});


const AddSubTaskItem = () => {

    // const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    // const selectedTaskId = useSelector((state) => state?.tasks?.selected_task_data?.id);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const [formValues, setFormValues] = useState({});

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormValues({ ...formValues, [name]: value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic here
    //     console.log(formValues);
    //     if(dispatch){
    //         dispatch(updateTaskById(
    //             {
    //                 id: selectedTaskId,
    //                 data: {
    //                     "sub_task_id": md5(Math.random()).substr(0, 5),
    //                     "sub_task": formValues?.sub_task,
    //                     "is_complete": false
    //                 },
    //             }
    //         ));
    //     }
    // };

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
                    <AddSubTask />
                </DialogContent>
            </GlassDialog>
        </React.Fragment>
    )
}

export default AddSubTaskItem;