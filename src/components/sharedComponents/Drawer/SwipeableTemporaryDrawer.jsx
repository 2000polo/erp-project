import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { alpha, styled, useTheme } from '@mui/material';
import { SIDE_DRAWER_MENU_WIDTH } from '../../../config/appConfig';
import { router } from '../../../config/routes';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SwipeableTemporaryDrawer(props) {

  const theme = useTheme();
  const routes = router.routes[1].children;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);

  const navigate = useNavigate();

  const handleListItemClick = (event, index, pathname) => {
      console.log("pathname ", pathname)
      navigate(pathname);
  };

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

  const StyledSwipeableDrawer = styled(SwipeableDrawer)(
    ({ open }) => ({
        width: SIDE_DRAWER_MENU_WIDTH,
        // flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        '& .MuiDrawer-paper': {
          backgroundColor: theme.palette.background.default,
          backgroundImage: 'none'
        },
    }),
  );

  const CustomListItem = styled(ListItem)({
    '& .MuiListItem-container': {
        // '&:hover': {
            borderRadius: '5px',
            margin: '0 6px 0 5px',
            backgroundColor: theme.palette.background, // Customize the active background color
        // },
    },
  });

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={props?.toggleDrawer(anchor, false)}
      onKeyDown={props?.toggleDrawer(anchor, false)}
    >
      <CustomList>
        {routes.map((routeObj, index) => (
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
        ))}
      </CustomList>
      <Divider />
    </Box>
  );

  return (
    <div>
      <StyledSwipeableDrawer
        anchor={'left'}
        open={props?.state['left']}
        onClose={props?.toggleDrawer('left', false)}
        onOpen={props?.toggleDrawer('left', true)}
        disableBackdropTransition={true}
        disableDiscovery={true}
        swipeAreaWidth={50}
      >
        {list('left')}
      </StyledSwipeableDrawer>
    </div>
  );
}