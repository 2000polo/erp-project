import { ChatBubble, Padding } from '@mui/icons-material'
import { Badge, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Slide, styled } from '@mui/material'
import React, { useState } from 'react'
import ChatHome from './ChatHome';
import ChatHeader from './ChatHeader';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Chat = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const GlassDialog = styled(Dialog)({
        '& .MuiPaper-root': {
          background: '#2e2e2e33', // Semi-transparent background
          backdropFilter: 'blur(20px)', // Blur effect
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Soft shadow
          border: '1px solid #ffffff0a', // Border
          borderRadius: '10px', // Rounded corners
          
        },
        
    });

    return (
        <>
            <IconButton onClick={handleClickOpen} size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                    <ChatBubble />
                </Badge>
            </IconButton>
            <GlassDialog
                open={open}
                TransitionComponent={Transition}
                // keepMounted
                onClose={handleClose}
                // aria-describedby="alert-dialog-slide-description"
                // hideBackdrop
                // fullScreen
                fullWidth
                maxWidth='xs'
                
            >
                {/* <DialogTitle> */}
                <ChatHeader />    
                {/* </DialogTitle> */}
                <DialogContent sx={{padding: '12px 10px !important' }}>
                    <ChatHome />
                </DialogContent>
            </GlassDialog>
        </>
        
    )
}

export default Chat