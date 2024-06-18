import { Avatar, Card, CardActionArea, Stack, Typography, Dialog, Slide, DialogContent, Drawer } from '@mui/material'
import React, { useState } from 'react';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const RecentChatItem = () => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <CardActionArea onClick={toggleDrawer(true)} sx={{marginBottom: '12px', padding: '12px'}}>
                <Stack spacing={1} direction={'row'} alignItems={'center'} >
                    <Avatar>A</Avatar>
                    <Stack>
                        <Typography variant='subtitle2'>Employee Name</Typography>
                        <Typography variant='caption'>{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eos alias inventore quisquam nesciunt modi tempore aperiam natus fugiat laudantium quo, error, esse nihil! Corrupti odio accusantium ad laborum iusto'?.slice(0, 30)}</Typography>
                    </Stack>
                </Stack>
            </CardActionArea>
            <Drawer  open={open} onClose={toggleDrawer(false)}>
                {/* {DrawerList} */}
                Drwaer
            </Drawer>
        </>
    )
}

export default RecentChatItem