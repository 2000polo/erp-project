import { Card, Tabs, styled, useTheme } from '@mui/material';
import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
import React from 'react';

const TaskList = () => {

    const theme = useTheme();

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const StyledCard = styled(Card)({
        backgroundColor: theme.palette.background.default,
        borderRadius: '10px',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        padding: '12px',
    })

    return (
        <>
            <StyledCard>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons={false}
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
                >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                {/* <Tab label="Item Three" />
                <Tab label="Item Four" />
                <Tab label="Item Five" />
                <Tab label="Item Six" />
                <Tab label="Item Seven" /> */}
            </Tabs>
            </StyledCard>
        </>
    )
}

export default TaskList;