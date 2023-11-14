import { Box, Card, Tabs, Typography, styled, tabsClasses, useTheme } from '@mui/material';
import Tab from '@mui/material/Tab';

import React from 'react';
import TaskListItem from './TaskListItem';

const TaskList = () => {

    const theme = useTheme();

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        return value == index && children
    }

    const StyledCard = styled(Card)({
        backgroundColor: theme.palette.background.default,
        borderRadius: '10px',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        padding: '12px',
    })

    const StyledTabs = styled((props) => (
        <Tabs
          {...props}
          TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        />
      ))({
        '& .MuiTabs-indicator': {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'transparent',
        //   backgroundColor: 'rgba(100, 95, 228, 0.2)',
        },
        '& .MuiTabs-indicatorSpan': {
          maxWidth: 40,
          width: '100%',
          backgroundColor: '#635ee7',
        },
      });
      
      const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
        ({ theme }) => ({
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
        }),
    );

    
    function a11yProps(index) {
        return {
          id: `scrollable-auto-tab-${index}`,
          "aria-controls": `scrollable-auto-tabpanel-${index}`
        };
    }

    return (
        <>
            <StyledCard>
                <Box sx={{ maxWidth: { xs: 320, sm: 480 } }}>
                    <StyledTabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons={false}
                        aria-label="scrollable auto tabs example"
                        sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                              '&.Mui-disabled': { opacity: 0.3 },
                            },
                        }}
                    >
                        <StyledTab label="Item One" {...a11yProps(0)}  >
                            q;efk2boej
                        </StyledTab>
                        <StyledTab label="Item Two" {...a11yProps(1)}  />
                        <StyledTab label="Item Three" />
                        <StyledTab label="Item Four" />
                        <StyledTab label="Item Five" />
                        <StyledTab label="Item Six" />
                        <StyledTab label="Item Seven" />
                    </StyledTabs>
                    <TabPanel value={value} index={0}>
                        <TaskListItem />
                        <TaskListItem />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item tow
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item One
                    </TabPanel>
                    
                </Box>
            </StyledCard>
        </>
    )
}

export default TaskList;