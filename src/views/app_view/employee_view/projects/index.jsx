import { Add, Done, Pause, Search } from '@mui/icons-material';
import Folder from '@mui/icons-material/Folder';
import { Box, Button, Grid, InputBase, Stack, Tab, Tabs, alpha, styled, useTheme } from '@mui/material';
import { blue, red } from '@mui/material/colors';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MainProjectCard from './MainProjectCard';
import AddProjectForm from '../../../../components/globalComponents/forms/AddProjectForm';
import { useSelector } from 'react-redux';

const Projects = () => {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const projects = useSelector((state) => state.projects.projectList)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        return value == index && children
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

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius + 5,
        backgroundColor: alpha(theme.palette.common.white, 0.05),
        '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.05),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
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

    console.log('project list from store', projects)
    return (
        <>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons={false}
                        aria-label="scrollable auto tabs example"
                        // sx={{
                        //     [`& .${tabsClasses.scrollButtons}`]: {
                        //         '&.Mui-disabled': { opacity: 0.3 },
                        //     },
                        // }}
                        // action={}
                    >
                        <StyledTab label="All Projects" {...a11yProps(0)} iconPosition="start"  icon={<Folder/>}  />
                        <StyledTab label="Completed" {...a11yProps(1)} iconPosition="start"  icon={<Done/>} />
                        <StyledTab label="Halted" {...a11yProps(2)} iconPosition="start"  icon={<Pause/>} />
                    </Tabs>
                </Box>

                <Box >
                    <Stack direction={'row'}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        {/* <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<Add />}
                            sx={{bgcolor: blue[900]}}
                        >
                            Add Project
                            <VisuallyHiddenInput type="file" />
                        </Button> */}
                        <AddProjectForm />
                    </Stack>
                </Box>
            </Stack>

            {/* <MainProjectCard /> */}
            <Box sx={{ marginTop: '16px'}}> 
                <Grid container item spacing={2} direction="row">
                    {
                        projects?.map((project) => {
                            return (
                                <Grid item xs={3}>
                                    <MainProjectCard data={project} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
        
        
  )
}

export default Projects