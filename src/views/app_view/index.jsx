import React from 'react';
import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import StyledDrawer from '../../components/sharedComponents/Drawer/StyledDrawer';
import SwipeableTemporaryDrawer from '../../components/sharedComponents/Drawer/SwipeableTemporaryDrawer';
import StyledAppDrawer from '../../components/sharedComponents/AppBar/StyledAppBar';

import { useWidth } from '../../utils/ssrMediaQuery';

const AppView = () => {
    
    const width = useWidth();

    const [open, setOpen] = React.useState(true);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
        ) {
        return;
        }
        setState({ ...state, [anchor]: open });
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <StyledAppDrawer state={state} open={open} setOpen={setOpen} toggleDrawer={toggleDrawer}/>
            {
                ['xl', 'lg', 'md'].includes(width) ?
                <StyledDrawer open={open} setOpen={setOpen} /> :
                <SwipeableTemporaryDrawer state={state} toggleDrawer={toggleDrawer}  />
            }
            <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 6 }}>
                {/* <DrawerHeader  /> */}
                <Outlet />

            </Box>
        </Box>
    );
}

export default AppView;