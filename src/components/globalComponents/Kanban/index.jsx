import React, { useEffect } from 'react';
import { useState } from 'react'
import ListComponenct from './ListComponent';
import { Box, Fab, Grid, Stack, Tab, Tabs, styled, tabsClasses, useTheme } from '@mui/material';
import { AddCard, AddCircleOutline, Groups, Person } from '@mui/icons-material';
import { red } from '@mui/material/colors';

const initialState = [
    { 
        id: 1,
        name: 'Dashboard UI development with mock data',
        team: 'Frontend',
        state: 'todo', 
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui, porro corporis asperiores veritatis ratione architecto alias dolorum nobis magni.",
        assigned_to: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-with-baseball-bat-with-jacket-banana-cartoon-vector-icon-illustration-animal-nature_138676-5315.jpg?w=826&t=st=1702655648~exp=1702656248~hmac=152fbae129d172b152589001c718714c9e3ed3d2ecfee7eeab88a32a710bf486',
            name: 'Arun Paul',
            date: '12 Jan 2023'
        },
        assigned_by: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-holding-banana-baseball-bat-stick-cartoon-vector-icon-illustration-animal-sport_138676-7050.jpg?w=826&t=st=1702657828~exp=1702658428~hmac=55d59be963a5fb55dbec392fd874bc6d503613796309e657990c4f675b42d398',
            name: 'Laura S',
            date: '12 Jan 2023'
        },
        priority: 'High',
        task_type: 'feature'
    },
    { 
        id: 2,
        name: 'User login flow UI development',
        team: 'Frontend',
        state: 'todo',
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui, porro corporis asperiores veritatis ratione architecto alias dolorum nobis magni.",
        assigned_to: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-with-baseball-bat-with-jacket-banana-cartoon-vector-icon-illustration-animal-nature_138676-5315.jpg?w=826&t=st=1702655648~exp=1702656248~hmac=152fbae129d172b152589001c718714c9e3ed3d2ecfee7eeab88a32a710bf486',
            name: 'Laura S',
            date: '12 Jan 2023'
        },
        assigned_by: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-holding-banana-baseball-bat-stick-cartoon-vector-icon-illustration-animal-sport_138676-7050.jpg?w=826&t=st=1702657828~exp=1702658428~hmac=55d59be963a5fb55dbec392fd874bc6d503613796309e657990c4f675b42d398',
            name: 'Miller K',
            date: '12 Jan 2023'
        },
        priority: 'High',
        task_type: 'feature'
    },
    { 
        id: 3,
        name: 'Dynamic theme implimentation',
        team: 'Frontend',
        state: 'ip',
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui, porro corporis asperiores veritatis ratione architecto alias dolorum nobis magni.",
        assigned_to: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-with-baseball-bat-with-jacket-banana-cartoon-vector-icon-illustration-animal-nature_138676-5315.jpg?w=826&t=st=1702655648~exp=1702656248~hmac=152fbae129d172b152589001c718714c9e3ed3d2ecfee7eeab88a32a710bf486',
            name: 'Adam John',
            date: '12 Jan 2023'
        },
        assigned_by: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-holding-banana-baseball-bat-stick-cartoon-vector-icon-illustration-animal-sport_138676-7050.jpg?w=826&t=st=1702657828~exp=1702658428~hmac=55d59be963a5fb55dbec392fd874bc6d503613796309e657990c4f675b42d398',
            name: 'Jame Drake',
            date: '12 Jan 2023'
        },
        priority: 'Medium',
        task_type: 'bug'
    },
    { 
        id: 4,
        name: 'Login API creation',
        team: 'Backend',
        state: 'ip',
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui, porro corporis asperiores veritatis ratione architecto alias dolorum nobis magni.",
        assigned_to: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-with-baseball-bat-with-jacket-banana-cartoon-vector-icon-illustration-animal-nature_138676-5315.jpg?w=826&t=st=1702655648~exp=1702656248~hmac=152fbae129d172b152589001c718714c9e3ed3d2ecfee7eeab88a32a710bf486',
            name: 'Miller K',
            date: '12 Jan 2023'
        },
        assigned_by: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-holding-banana-baseball-bat-stick-cartoon-vector-icon-illustration-animal-sport_138676-7050.jpg?w=826&t=st=1702657828~exp=1702658428~hmac=55d59be963a5fb55dbec392fd874bc6d503613796309e657990c4f675b42d398',
            name: 'Claret Dany',
            date: '12 Jan 2023'
        },
        priority: 'Medium',
        task_type: 'feature'
    },
    { 
        id: 5,
        name: 'Dashboard API creation',
        team: 'Backend',
        state: 'ip',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iusto!",
        assigned_to: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-with-baseball-bat-with-jacket-banana-cartoon-vector-icon-illustration-animal-nature_138676-5315.jpg?w=826&t=st=1702655648~exp=1702656248~hmac=152fbae129d172b152589001c718714c9e3ed3d2ecfee7eeab88a32a710bf486',
            name: 'Jame Drake',
            date: '12 Jan 2023'
        },
        assigned_by: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-holding-banana-baseball-bat-stick-cartoon-vector-icon-illustration-animal-sport_138676-7050.jpg?w=826&t=st=1702657828~exp=1702658428~hmac=55d59be963a5fb55dbec392fd874bc6d503613796309e657990c4f675b42d398',
            name: 'Helen Jake',
            date: '12 Jan 2023'
        },
        priority: 'Low',
        task_type: 'feature'
    },
    { 
        id: 6,
        name: 'User table creation',
        team: 'Backend',
        state: 'todo',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iusto!",
        assigned_to: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-with-baseball-bat-with-jacket-banana-cartoon-vector-icon-illustration-animal-nature_138676-5315.jpg?w=826&t=st=1702655648~exp=1702656248~hmac=152fbae129d172b152589001c718714c9e3ed3d2ecfee7eeab88a32a710bf486',
            name: 'Helen Jake',
            date: '12 Jan 2023'
        },
        assigned_by: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-holding-banana-baseball-bat-stick-cartoon-vector-icon-illustration-animal-sport_138676-7050.jpg?w=826&t=st=1702657828~exp=1702658428~hmac=55d59be963a5fb55dbec392fd874bc6d503613796309e657990c4f675b42d398',
            name: 'Adam John',
            date: '12 Jan 2023'
        },
        priority: 'Low',
        task_type: 'feature'
    },
    { 
        id: 7,
        name: 'Client table creation',
        team: 'Backend',
        state: 'done',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iusto!",
        assigned_to: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-with-baseball-bat-with-jacket-banana-cartoon-vector-icon-illustration-animal-nature_138676-5315.jpg?w=826&t=st=1702655648~exp=1702656248~hmac=152fbae129d172b152589001c718714c9e3ed3d2ecfee7eeab88a32a710bf486',
            name: 'Kevin Copper',
            date: '12 Jan 2023'
        },
        assigned_by: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-holding-banana-baseball-bat-stick-cartoon-vector-icon-illustration-animal-sport_138676-7050.jpg?w=826&t=st=1702657828~exp=1702658428~hmac=55d59be963a5fb55dbec392fd874bc6d503613796309e657990c4f675b42d398',
            name: 'Eva Cody',
            date: '12 Jan 2023'
        },
        priority: 'High',
        task_type: 'feature' 
    },
    { 
        id: 8,
        name: 'Landing page design for prdouct website',
        team: 'Ui/Ux',
        state: 'done',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iusto!",
        assigned_to: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-with-baseball-bat-with-jacket-banana-cartoon-vector-icon-illustration-animal-nature_138676-5315.jpg?w=826&t=st=1702655648~exp=1702656248~hmac=152fbae129d172b152589001c718714c9e3ed3d2ecfee7eeab88a32a710bf486',
            name: 'Claret Dany',
            date: '12 Jan 2023'
        },
        assigned_by: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-holding-banana-baseball-bat-stick-cartoon-vector-icon-illustration-animal-sport_138676-7050.jpg?w=826&t=st=1702657828~exp=1702658428~hmac=55d59be963a5fb55dbec392fd874bc6d503613796309e657990c4f675b42d398',
            name: 'Kevin Copper',
            date: '12 Jan 2023'
        },
        priority: 'Low',
        task_type: 'feature'
    },
    { 
        id: 9,
        name: 'Research on new module',
        team: 'Ui/Ux',
        state: 'halted',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iusto!",
        assigned_to: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-with-baseball-bat-with-jacket-banana-cartoon-vector-icon-illustration-animal-nature_138676-5315.jpg?w=826&t=st=1702655648~exp=1702656248~hmac=152fbae129d172b152589001c718714c9e3ed3d2ecfee7eeab88a32a710bf486',
            name: 'Eva Cody',
            date: '12 Jan 2023'
        },
        assigned_by: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-holding-banana-baseball-bat-stick-cartoon-vector-icon-illustration-animal-sport_138676-7050.jpg?w=826&t=st=1702657828~exp=1702658428~hmac=55d59be963a5fb55dbec392fd874bc6d503613796309e657990c4f675b42d398',
            name: 'Claret Dany',
            date: '12 Jan 2023'
        },
        priority: 'Medium',
        task_type: 'feature'
    },
    { 
        id: 10,
        name: 'Landing page UI development',
        team: 'Frontend',
        state: 'halted',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iusto!",
        assigned_to: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-with-baseball-bat-with-jacket-banana-cartoon-vector-icon-illustration-animal-nature_138676-5315.jpg?w=826&t=st=1702655648~exp=1702656248~hmac=152fbae129d172b152589001c718714c9e3ed3d2ecfee7eeab88a32a710bf486',
            name: 'Lilly Koner',
            date: '12 Jan 2023'
        },
        assigned_by: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-holding-banana-baseball-bat-stick-cartoon-vector-icon-illustration-animal-sport_138676-7050.jpg?w=826&t=st=1702657828~exp=1702658428~hmac=55d59be963a5fb55dbec392fd874bc6d503613796309e657990c4f675b42d398',
            name: 'Amelia Willson',
            date: '12 Jan 2023'
        },
        priority: 'Medium',
        task_type: 'feature'
    },
    { 
        id: 11,
        name: 'Badgateway error',
        team: 'Backend',
        state: 'halted',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iusto!",
        assigned_to: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-with-baseball-bat-with-jacket-banana-cartoon-vector-icon-illustration-animal-nature_138676-5315.jpg?w=826&t=st=1702655648~exp=1702656248~hmac=152fbae129d172b152589001c718714c9e3ed3d2ecfee7eeab88a32a710bf486',
            name: 'Amelia Willson',
            date: '12 Jan 2023'
        },
        assigned_by: {
            avatar: 'https://img.freepik.com/free-vector/cute-monkey-holding-banana-baseball-bat-stick-cartoon-vector-icon-illustration-animal-sport_138676-7050.jpg?w=826&t=st=1702657828~exp=1702658428~hmac=55d59be963a5fb55dbec392fd874bc6d503613796309e657990c4f675b42d398',
            name: 'Claret Da',
            date: '12 Jan 2023'
        },
        priority: 'Low',
        task_type: 'bug'
    }
];

const DragAndDrop = () => {

    const theme = useTheme();
    const [cards, setCards] = useState(initialState);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        return value == index && children
    }

    useEffect(() => {
        document.addEventListener('dragstart', dragStart)
        document.addEventListener('dragend', dragEnd)
    
        return () => {
            document.removeEventListener('dragstart', dragStart)
            document.removeEventListener('dragend', dragEnd)
        }
    }, [])

    const dragStart = event => {
        if (event.target.className.includes('card')) {
            event.target.classList.add('dragging')
        }
    }
    
    const dragEnd = event => {
        if (event.target.className.includes('card')) {
            event.target.classList.remove('dragging')
        }
    }

    const StyledTabs = styled((props) => (
        <Tabs
            textColor='primary'
          {...props}
          TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        />
      ))({
        // '& .MuiTabs-indicator': {
        //   display: 'flex',
        //   justifyContent: 'center',
        //   backgroundColor: 'transparent',
        // //   backgroundColor: 'rgba(100, 95, 228, 0.2)',
        // },
        // '& .MuiTabs-indicatorSpan': {
        //   maxWidth: 40,
        //   width: '100%',
        //   backgroundColor: '#635ee7',
        // },
        '& .Mui-selected': {
            backgroundColor: '#635ee7',
        },
        '& .MuiTab-textColorPrimary': {
            textColorPrimary: red
        },


    });

    const StyledTab = styled(Tab)({
        // textTransform: 'none',
        // minWidth: 100,
        // fontWeight: 'bold',
        // marginRight: '20px',
        // color: '#555',
        // '&.Mui-selected': {
        //   color: '#1976d2',
        // },
        // '&.Mui-focusVisible': {
        //   backgroundColor: 'rgba(100, 95, 228, 0.32)',
        // },
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
        color: '#fff',
        },
        '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
      });

    function a11yProps(index) {
        return {
          id: `scrollable-auto-tab-${index}`,
          "aria-controls": `scrollable-auto-tabpanel-${index}`
        };
    }

    return (
        <main className="board">
                <Grid container spacing={2} direction="column" >
                    <Grid container item spacing={2} direction="row" justifyContent= 'space-between'>
                        <Grid item xs={3} >
                            <ListComponenct setCards={setCards} title={'Todo'} state={'todo'} cards={cards} />
                        </Grid>
                        <Grid item xs={3}>
                            <ListComponenct setCards={setCards} title={'In Progress'} state={'ip'} cards={cards} />
                        </Grid>
                        <Grid item xs={3}>
                            <ListComponenct setCards={setCards} title={'Done'} state={'done'} cards={cards} />
                        </Grid>
                        <Grid item xs={3}>
                            <ListComponenct setCards={setCards} title={'Halted'} state={'halted'} cards={cards} /> 
                        </Grid>
                    </Grid>
                </Grid>
        </main>
    )
}
    
export default DragAndDrop
