import { styled, useTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MuiDrawer from '@mui/material/Drawer';
import React, { useState } from 'react';
import { SIDE_DRAWER_MENU_WIDTH } from '../../../config/appConfig';

const StyledDrawer = (props) => {

    const theme = useTheme();

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    console.log("theme ", theme.palette)

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    const openedMixin = (theme) => ({
        width: SIDE_DRAWER_MENU_WIDTH,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
        });
    
        const closedMixin = (theme) => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
    });

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            width: SIDE_DRAWER_MENU_WIDTH,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );

    const CustomList = styled(List)({
        '& .MuiListItem-root': {
          transition: 'background-color 0.3s',
            '& .Mui-selected': {
                backgroundColor: theme.palette.primary.main, // Customize the active background color
                margin: '0 6px 0 5px',
                borderRadius: '5px',
                '&:active': {
                    backgroundColor: theme.palette.primary.main, // Customize the active background color
                },
                '&:hover': {
                    // borderRadius: '5px',
                    // margin: '0 6px 0 5px',
                    // backgroundColor: theme.palette.primary.contrastText, // Customize the active background color
                },
                
            },
            
            // '&:hover': {
            //     borderRadius: '5px',
            //     // padding: '0 6px 0 5px',
            //     backgroundColor: theme.palette.primary.main, // Customize the active background color
            // },
            
            // '& .MuiListItem-container': {
            //     margin: '0 6px 0 5px',
            //     borderRadius: '5px',
            //     // '&:hover': {
            //     //     margin: '0 6px 0 5px',
            //     //     borderRadius: '5px',
            //     //     // backgroundColor: theme.palette.primary.main, // Customize the hover background color
            //     // },
            //     // backgroundColor: theme.palette.primary.main, // Customize the hover background color
            // },
        },
        // '&:hover': {
        //     borderRadius: '5px',
        //     // padding: '0 6px 0 5px',
        //     backgroundColor: theme.palette.primary.main, // Customize the active background color
        // },
        '& .MuiListItem-container': {
            '&:hover': {
                borderRadius: '5px',
                margin: '0 6px 0 5px',
                backgroundColor: theme.palette.background, // Customize the active background color
            },
        },
    });
    const CustomListItem = styled(ListItem)({
        '& .MuiListItem-container': {
            // '&:hover': {
                borderRadius: '5px',
                margin: '0 6px 0 5px',
                backgroundColor: theme.palette.background, // Customize the active background color
            // },
        },
        
    });

    const handleDrawerClose = () => {
        props.setOpen(false);
    };
    

    return (
        <>
            <Drawer variant="permanent" open={props?.open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <CustomList>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <CustomListItem key={text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                        minHeight: 48,
                        justifyContent: props?.open ? 'initial' : 'center',
                        px: selectedIndex === index ? 1.9 : 2.5,
                        }}
                        selected={selectedIndex === index}
                        onClick={(event) => handleListItemClick(event, index)}
                    >
                        <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: props?.open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                        >
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: props?.open ? 1 : 0 }} />
                    </ListItemButton>
                    </CustomListItem>
                ))}
                </CustomList>
                <Divider />
                <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                        minHeight: 48,
                        justifyContent: props?.open ? 'initial' : 'center',
                        px: 2.5,
                        }}
                    >
                        <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: props?.open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                        >
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: props?.open ? 1 : 0 }} />
                    </ListItemButton>
                    </ListItem>
                ))}
                </List>
            </Drawer>
        </>
    )
}

export default StyledDrawer;