import { Avatar, Stack, Typography, alpha, useTheme } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import React from 'react';

const AvatarDropDown = () => {

    const theme = useTheme();

    return (
        <>
            <Stack sx={{marginLeft: '12px'}} direction='row' spacing={1} alignItems="center">
                <Avatar sx={{ bgcolor: blue[900], color: grey[100] }}>A</Avatar>
                <Stack sx={{ display: { xs: 'none', sm: 'block' } }} direction='column'>
                    <Typography sx={{margin: 0, lineHeight: 1.5, fontWeight: 300, color: theme.palette.text.primary}} variant="overline" display="block" gutterBottom>
                        Arun Paul
                    </Typography>
                    <Typography sx={{margin: 0, fontWeight: 'light', color: alpha(theme.palette.text.secondary, 0.5)}} variant="caption" display="block" gutterBottom>
                        arunpaul@gmail.com
                    </Typography>
                </Stack>
            </Stack>
        </>
    )
}

export default AvatarDropDown;