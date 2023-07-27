import { Apple, Google } from '@mui/icons-material';
import { Box, Button, Checkbox, Divider, FormControlLabel, InputBase, InputLabel, Paper, Stack, TextField, Typography, alpha, styled } from '@mui/material';
import { black } from '@mui/material/colors';
import React from 'react';

const LeftContent = () => {

    const StyledPaper = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: 'black',
        height: '98vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '70px',
        // Width: 400
    }));

    const StyledButton = styled(Button)(({ theme }) => ({
        textTransform: 'none',
        border: '1px solid black',
        color: 'black'
    }))

    const StyledInputField = styled(InputBase)(({ theme }) => ({
        'label + &': {
        //   marginTop: theme.spacing(3),
          color: 'black'
        },
        '& .MuiInputBase-input': {
          borderRadius: 4,
          position: 'relative',
          color: 'black',
        //   backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
          border: '1px solid',
          borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
          fontSize: 16,
          width: '100%',
          padding: '10px 12px',
          transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
          ]),
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
          },
        },
      }));

    return <>
        <StyledPaper elevation={0}>
            <Box >
                <Typography m={0} variant="h5" gutterBottom>
                    Get Started Now
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    Enter your credentials to access your account
                </Typography>
                <Stack mt={2} mb={3} direction={'row'} spacing={1} >
                    <StyledButton size='medium' variant="outlined" startIcon={<Google color='black'/>}>
                        Log in with Google
                    </StyledButton>
                    <StyledButton size='medium' variant="outlined" startIcon={<Apple color='black'/>}>
                        Log in with Apple
                    </StyledButton>
                </Stack>

                <Divider sx={{ width: {sx: 0, md: 400}}}>Or</Divider>

                <Stack mt={2}>
                    <InputLabel m={0} sx={{ color: 'grey' }} shrink htmlFor="bootstrap-input">
                    Name
                    </InputLabel>
                    <StyledInputField color="primary" id="outlined-basic" label="Outlined" variant="outlined" />
                    
                    <InputLabel sx={{ color: 'grey', mt: 2 }} shrink htmlFor="bootstrap-input">
                    Email address
                    </InputLabel>
                    <StyledInputField color="primary" id="outlined-basic" label="Outlined" variant="outlined" />
                    
                    <InputLabel sx={{ color: 'grey', mt: 2 }} shrink htmlFor="bootstrap-input">
                    Password
                    </InputLabel>
                    <StyledInputField color="primary" id="outlined-basic" label="Outlined" variant="outlined" />

                    <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to the terms and policy" />

                    <Button sx={{mt:3}} variant="contained" size="medium">
                        Medium
                    </Button>
                </Stack>

                <Typography mt={3} variant="caption" display="block" gutterBottom>
                    Have an account? <a href='#'>sign in</a>
                </Typography>
            </Box>

            
            
        </StyledPaper>
    </>
}

export default LeftContent;