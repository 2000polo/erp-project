import React from 'react';
import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import StyledDrawer from '../../components/sharedComponents/Drawer/StyledDrawer';
import SwipeableTemporaryDrawer from '../../components/sharedComponents/Drawer/SwipeableTemporaryDrawer';
import StyledAppDrawer from '../../components/sharedComponents/AppBar/StyledAppBar';

import { useWidth } from '../../utils/ssrMediaQuery';
import { Hidden } from '@mui/material';

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
                <SwipeableTemporaryDrawer state={state} toggleDrawer={toggleDrawer}  open={open} setOpen={setOpen} />
            }
            <Box component="main" sx={{ p: 3, pt: 9, overflowX: 'hidden', width: '100%' }}>
                {/* keep it simple but significant */}
                <Outlet />
            </Box>
        </Box>
    );
}

export default AppView;