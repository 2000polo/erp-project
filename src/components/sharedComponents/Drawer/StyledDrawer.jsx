import { styled, useTheme } from '@mui/material/styles';
import { Collapse, IconButton, alpha } from '@mui/material';
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
import React from 'react';
import { SIDE_DRAWER_MENU_WIDTH } from '../../../config/appConfig';
import { router } from '../../../config/routes';
import { useLocation, useNavigate } from 'react-router-dom';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

const StyledDrawer = (props) => {

    const theme = useTheme();
    const routes = router.routes[1].children;
    const location = useLocation();
    const [open, setOpen] = React.useState(true);
    const [isSubmenuOpen, setisSubmenuOpen] = React.useState({})

    const navigate = useNavigate();

    const handleListItemClick = (event, index, pathname) => {
        console.log("pathname ", pathname)
        navigate(pathname);
    };

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
            '& .MuiDrawer-paper': {
                backgroundColor: '#12121200',
                ...openedMixin(theme)
            },
            }),
            ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );

    const CustomList = styled(List)({
        margin: '0 6px 0 5px',
        color: alpha(theme.palette.text.primary, 0.7),
        '&& .Mui-selected, && .Mui-selected:hover': {
            borderRadius: '5px',
            backgroundColor: theme.palette.primary.main,
            // margin: '0 6px 0 5px',
            '&, & .MuiListItemIcon-root': {
            //   color: theme.palette.text.primary,
              color: 'white',
            },
          },
          // hover states
          '& .MuiListItemButton-root:hover': {
            borderRadius: '5px',
            // margin: '0 6px 0 5px',
            // paddingRight: 0,
            backgroundColor: theme.palette.background,
            '&, & .MuiListItemIcon-root': {
            //   color: 'yellow',
            
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


    const handleClick = (index) => {
        setisSubmenuOpen({...isSubmenuOpen, [`listItem${index}`]: !isSubmenuOpen?.[`listItem${index}`]})
    };
    console.log("printing isSubmenu state", isSubmenuOpen)
    
    const itemList = (routes, type) => {
        return routes.map((routeObj, index) => {
            if(routeObj?.children){
                // return itemList(routeObj?.children)
                return (
                    <>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                // justifyContent: props?.open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            onClick={() => handleClick(index)}>
                            <ListItemIcon 
                                sx={{
                                    minWidth: 0,
                                    mr: props?.open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                            <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={routeObj.title} />
                            {isSubmenuOpen[`listItem${index}`] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={isSubmenuOpen[`listItem${index}`]} timeout="auto" unmountOnExit>
                            {
                                itemList(routeObj?.children, 'sub')
                            }
                        </Collapse>
                    </>
                )
            }else{
                return (
                    <CustomListItem onClick={(event) => handleListItemClick(event, index, routeObj.path)} key={routeObj.title} disablePadding sx={{ display: 'block', mt: .5 }}>
                        <ListItemButton
                            sx={{
                            minHeight: 48,
                            justifyContent: props?.open ? 'initial' : 'center',
                            px: 2.5,
                            }}
                            selected={location.pathname === routeObj.path }
                        >
                            {
                                type === 'sub' ?
                                <>
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: props?.open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                    </ListItemIcon>
                                    <ListItemText primary={routeObj.title} sx={{ opacity: props?.open ? 1 : 0 }} />
                                </> :
                                <>
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: props?.open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={routeObj.title} sx={{ opacity: props?.open ? 1 : 0 }} />
                                </>
                            }
                        </ListItemButton>
                    </CustomListItem>
                )
            }
        })
    }

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
                {/* {routes.map((routeObj, index) => (
                    <CustomListItem onClick={(event) => handleListItemClick(event, index, routeObj.path)} key={routeObj.title} disablePadding sx={{ display: 'block', mt: .5 }}>
                    <ListItemButton
                        sx={{
                        minHeight: 48,
                        justifyContent: props?.open ? 'initial' : 'center',
                        px: 2.5,
                        }}
                        selected={location.pathname === routeObj.path }
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
                        <ListItemText primary={routeObj.title} sx={{ opacity: props?.open ? 1 : 0 }} />
                    </ListItemButton>
                    </CustomListItem>
                ))} */}
                {itemList(routes)}
                {/* <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <CustomList component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                        </ListItemButton>
                    </CustomList>
                </Collapse>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <CustomList component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                        </ListItemButton>
                    </CustomList>
                </Collapse> */}
                {/* <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                    </List>
                </Collapse> */}
                </CustomList>
                <Divider />
            </Drawer>
        </>
    )
}

export default StyledDrawer;