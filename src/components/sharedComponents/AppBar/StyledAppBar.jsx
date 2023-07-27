import React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';

import { SIDE_DRAWER_MENU_WIDTH } from '../../../config/appConfig';
import { useWidth } from '../../../utils/ssrMediaQuery';
import { Badge, Box, InputBase, Menu, MenuItem, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';

import MoreIcon from '@mui/icons-material/MoreVert';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const StyledAppDrawer = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
      const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    
      const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const width = useWidth();

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
        })(({ theme, open }) => ({
        zIndex: (width === 'xs' || width === 'sm') ? theme.zIndex.drawer - 1 : theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: (width === 'xs' || width === 'sm') ? 0 : SIDE_DRAWER_MENU_WIDTH,
            width: (width === 'xs' || width === 'sm') ? '100%' : `calc(100% - ${SIDE_DRAWER_MENU_WIDTH}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));
    
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
        },
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
    }));
    
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const handleDrawerOpen = () => {
        props.setOpen(true);
    };

    return (
        <>
            <AppBar  position="fixed" open={props.open}>
                <Toolbar>
                    {
                        ['xl', 'lg', 'md'].includes(width) ?
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                            marginRight: 5,
                            ...(props.open && { display: 'none' }) ,
                            }}
                        >
                            <MenuIcon />
                        </IconButton> :
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={props.toggleDrawer('left', !props?.state.left)}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                // ...(state && { display: 'none' }) ,
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    }
                    <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Box>
                        <Box sx={{ display: { md: 'flex' } }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                            >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                            </IconButton>
                            <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                            >
                            <AccountCircle />
                            </IconButton>
                        </Box>
                        {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box> */}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default StyledAppDrawer;