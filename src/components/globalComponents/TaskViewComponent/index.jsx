import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, styled } from '@mui/material'
import React from 'react'
import MetaInfoContent from './MetaInfoContent';
import TaskDetailsInfo from './TaskDetailsInfo';
import TaskFeedback from './TaskFeedback';

const TaskViewComponent = (props) => {

    const { onClose, open } = props;

    const GlassDialog = styled(Dialog)({
        '& .MuiPaper-root': {
          background: '#2e2e2e33', // Semi-transparent background
          backdropFilter: 'blur(10px)', // Blur effect
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Soft shadow
          border: '1px solid #ffffff0a', // Border
          borderRadius: '10px', // Rounded corners
        },
        // height: 500
    });
        
    return (
        <GlassDialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth='xl'
            fullWidth
            sx={{minHeight: '100px'}}
        >
            {/* <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
            </DialogTitle> */}
            <DialogContent>
                <Grid container justifyContent={'space-between'} direction="row" >
                    <Grid item xs={3}>
                        <MetaInfoContent />
                    </Grid>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Grid item xs={5.5}>
                        <TaskDetailsInfo />
                    </Grid>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Grid item xs={3}>
                        <TaskFeedback />
                    </Grid>
                </Grid>
                
                
            </DialogContent>
            {/* <DialogActions>
                <Button onClick={onClose}>Disagree</Button>
                <Button onClick={onClose} autoFocus>
                    Agree
                </Button>
            </DialogActions> */}
        </GlassDialog>
    )
}

export default TaskViewComponent