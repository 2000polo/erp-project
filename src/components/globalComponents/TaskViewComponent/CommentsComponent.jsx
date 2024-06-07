import React from 'react'
import Comment from './Comment'
import { Box, Card, Grid, List, Stack, styled, useTheme, useThemeProps } from '@mui/material';
import CommentInput from './CommentInput';

const CommentsComponent = () => {

  const theme = useTheme();

  const comments = [
    {
      userId: 1234,
      userName: "Project Manager 1",
      dateTime: '12 March 2024 11:00',
      comment: 'some sample comments about the task'
    },
    {
      userId: 4356,
      userName: "Developer 1",
      dateTime: '12 March 2024 11:00',
      comment: 'adipisicing elit. Aut at sapiente eius'
    },
    {
      userId: 1155,
      userName: "Team Lead",
      dateTime: '12 March 2024 11:00',
      comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut at sapiente eius'
    },
    {
      userId: 6820,
      userName: "Developer 2",
      dateTime: '12 March 2024 11:00',
      comment: 'some sample comments about the task'
    },
    {
      userId: 6820,
      userName: "Developer 2",
      dateTime: '12 March 2024 11:00',
      comment: 'some sample comments about the task'
    },
    {
      userId: 6820,
      userName: "Developer 2",
      dateTime: '12 March 2024 11:00',
      comment: 'some sample comments about the task'
    },
    {
      userId: 6820,
      userName: "Developer 2",
      dateTime: '12 March 2024 11:00',
      comment: 'some sample comments about the task'
    },
    {
      userId: 6820,
      userName: "Developer 2",
      dateTime: '12 March 2024 11:00',
      comment: 'some sample comments about the task'
    },

  ]

  return (
    <>
      {/* <Box sx={{ height: '100%'}} direction={'column'} justifyContent={'space-between'}> */}
        <Stack direction={'column'} justifyContent={'space-between'}>
          <Box sx={{ height: '100%'}} direction={'column'} justifyContent={'space-between'}>
            <Grid xs={12} item>
              <List 
                sx={{
                  // width: '100%',
                  // maxWidth: 360,
                  // bgcolor: 'background.paper',
                  // position: 'relative',
                  overflow: 'auto',
                  height: 600,
                  '& ul': { paddingRight: 1},
                  '&::-webkit-scrollbar': {
                    width: '2px'

                  },
                  '&::-webkit-scrollbar-track': {
                    // boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                    // webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                    backgroundColor: '#53525259',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    // backgroundColor: '#1d73f9',
                    backgroundColor: '#ffffff82',
                    width: '4px'
                    // outline: '1px solid slategrey'
                  }
                }}
              >
                {
                  comments?.map((obj, i) => {
                    return (
                      <li key={`section-${i}`}>
                        <ul><Comment data={obj} /></ul>
                      </li>
                    )
                  })
                }
              </List>
            </Grid>
            <Grid xs={12} item>
              <CommentInput />
            </Grid>
          </Box>
          
          
        </Stack>
        
        
      {/* </Box> */}
      
    </>
  )
}

export default CommentsComponent
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import Paper from '@mui/material/Paper';
// import Fab from '@mui/material/Fab';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
// import Avatar from '@mui/material/Avatar';
// import MenuIcon from '@mui/icons-material/Menu';
// import AddIcon from '@mui/icons-material/Add';
// import SearchIcon from '@mui/icons-material/Search';
// import MoreIcon from '@mui/icons-material/MoreVert';

// const messages = [
//   {
//     id: 1,
//     primary: 'Brunch this week?',
//     secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
//     person: '/static/images/avatar/5.jpg',
//   },
//   {
//     id: 2,
//     primary: 'Birthday Gift',
//     secondary: `Do you have a suggestion for a good present for John on his work
//       anniversary. I am really confused & would love your thoughts on it.`,
//     person: '/static/images/avatar/1.jpg',
//   },
//   {
//     id: 3,
//     primary: 'Recipe to try',
//     secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
//     person: '/static/images/avatar/2.jpg',
//   },
//   {
//     id: 4,
//     primary: 'Yes!',
//     secondary: 'I have the tickets to the ReactConf for this year.',
//     person: '/static/images/avatar/3.jpg',
//   },
//   {
//     id: 5,
//     primary: "Doctor's Appointment",
//     secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
//     person: '/static/images/avatar/4.jpg',
//   },
//   {
//     id: 6,
//     primary: 'Discussion',
//     secondary: `Menus that are generated by the bottom app bar (such as a bottom
//       navigation drawer or overflow menu) open as bottom sheets at a higher elevation
//       than the bar.`,
//     person: '/static/images/avatar/5.jpg',
//   },
//   {
//     id: 7,
//     primary: 'Summer BBQ',
//     secondary: `Who wants to have a cookout this weekend? I just got some furniture
//       for my backyard and would love to fire up the grill.`,
//     person: '/static/images/avatar/1.jpg',
//   },
// ];

// const StyledFab = styled(Fab)({
//   position: 'absolute',
//   zIndex: 1,
//   top: -30,
//   left: 0,
//   right: 0,
//   margin: '0 auto',
// });

// export default function BottomAppBar() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Paper square sx={{ pb: '50px' }}>
//         <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
//           Inbox
//         </Typography>
//         <List sx={{ mb: 2 }}>
//           {messages.map(({ id, primary, secondary, person }) => (
//             <React.Fragment key={id}>
//               {id === 1 && (
//                 <ListSubheader sx={{ bgcolor: 'background.paper' }}>
//                   Today
//                 </ListSubheader>
//               )}

//               {id === 3 && (
//                 <ListSubheader sx={{ bgcolor: 'background.paper' }}>
//                   Yesterday
//                 </ListSubheader>
//               )}

//               <ListItemButton>
//                 <ListItemAvatar>
//                   <Avatar alt="Profile Picture" src={person} />
//                 </ListItemAvatar>
//                 <ListItemText primary={primary} secondary={secondary} />
//               </ListItemButton>
//             </React.Fragment>
//           ))}
//         </List>
//       </Paper>
//       <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, right: 0 }}>
//         <Toolbar>
//           <IconButton color="inherit" aria-label="open drawer">
//             <MenuIcon />
//           </IconButton>
//           <StyledFab color="secondary" aria-label="add">
//             <AddIcon />
//           </StyledFab>
//           <Box sx={{ flexGrow: 1 }} />
//           <IconButton color="inherit">
//             <SearchIcon />
//           </IconButton>
//           <IconButton color="inherit">
//             <MoreIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// }