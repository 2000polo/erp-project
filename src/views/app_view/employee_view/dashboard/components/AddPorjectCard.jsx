import { Box, Card, CardActionArea, Typography, alpha, styled, useTheme } from '@mui/material'
import React from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import { AddCardRounded } from '@mui/icons-material';

const AddPorjectCard = () => {

    const theme = useTheme();

    const StyledCard = styled(Card)({
        // maxWidth: '345px',
        // minHeight: '129px',
        backgroundColor: theme.palette.background.default,
        // background: 'linear-gradient(to top, #396afc, #2948ff);',
        borderRadius: '10px',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        // transition: 'all ease-in 2s',
        padding: '12px',

        // '&:hover':{
        //     // transform: 'scale(1.05)',
        //     background: 'linear-gradient(to top, #396afc, #2948ff);',
        // }
    })

    const DottedCard = styled(Card)({
        // maxWidth: '345px',
        minHeight: '107px',
        backgroundColor: theme.palette.background.default,
        // background: 'linear-gradient(to top, #396afc, #2948ff);',
        borderRadius: '10px',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        // transition: 'all ease-in 2s',
        padding: '12px',
        border: '2px dashed #cacaca',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // '&:hover':{
        //     // transform: 'scale(1.05)',
        //     background: 'linear-gradient(to top, #396afc, #2948ff);',
        // }
    })
        
    return (
        <CardActionArea>
            <StyledCard>
                <DottedCard>
                    <Box 
                        sx={{
                            // width: '100%',
                            height: '100%',
                            // backgroundColor: 'primary.dark',
                            // '&:hover': {
                            backgroundColor: alpha(theme.palette.primary.main, 0.3),
                            // opacity: [0.2, 0.5, 0.5],
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '5px',
                            padding: '5px',
                            marginBottom: '5px'
                            // },
                        }}
                    >
                        <AddCardRounded />
                    </Box>
                    <Typography color={alpha(theme.palette.text.primary, 0.7)} variant="caption" display="block" gutterBottom>
                        Click to add New Project
                    </Typography>
                </DottedCard>
            </StyledCard>
        </CardActionArea>
    )
}

export default AddPorjectCard;