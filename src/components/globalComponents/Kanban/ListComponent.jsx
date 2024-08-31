import React, { useEffect, useState } from 'react'
import './style.css';
import styled from 'styled-components';
import { Button, Card, Divider, IconButton, Stack, Typography, alpha, useTheme } from '@mui/material';
import TaskCard from './TaskCard';
import { SearchOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { updateTaskStatus } from '../../../app/tasks/taskSlice';

const ListComponent = (props) => {

    const dispatch = useDispatch();
    const { state, cards, title, setCards } = props;
    const theme = useTheme();

    const [ currentStatus, setCurrentStatus ] = useState();


    const StyledCard = styled(Card)({
        // maxWidth: '345px',
        // minHeight: '200px',
        backgroundColor: theme.palette.background.default,
        // background: 'linear-gradient(to top, #396afc, #2948ff);',
        borderRadius: '10px',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        // transition: 'all ease-in 2s',
        padding: '12px',
        width: '400px',
        // '&:hover':{
        //     // transform: 'scale(1.05)',
        //     background: 'linear-gradient(to top, #396afc, #2948ff);',
        // }
    })

    useEffect(() => {
        document.addEventListener('dragstart', dragStart)
        document.addEventListener('dragend', dragEnd)
    
        return () => {
            document.removeEventListener('dragstart', dragStart)
            document.removeEventListener('dragend', dragEnd)
        }
    }, [])

    const dragEnter = event => {
        event.currentTarget.classList.add('drop');
        
    };
    
    const dragLeave = event => {
        event.currentTarget.classList.remove('drop');
        

    };

    const drop = event => {
        const column = event.currentTarget.dataset.column;
        const id = Number(event.dataTransfer.getData('text/plain'));
    
        console.log("column and id printing", column, id, cards[state], state, cards)
        
        event.currentTarget.classList.remove('drop')
    
        event.preventDefault()
    
        const updatedState = cards.map(card => {
            if (card.id === id) {
                // card.status = column;
                return {...card, status: column}
            }
            return card
        })

        console.log("selected card", cards[state], state, props.task, title)
        dispatch(updateTaskStatus({
            id: id,
            column: column,
            updatedData: updatedState,
            currentStatus: currentStatus,
        }));
        // setCards(updatedState)
    }

    const allowDrop = event => {
        event.preventDefault()
    };

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

    const drag = (event, task) => {
        event.dataTransfer.setData('text/plain', event.currentTarget.dataset.id);
        event.dataTransfer.setData('status', task.status);
        console.log("target", task)
        setCurrentStatus(() => task.status);
    };

    console.log("cards", cards)

    return (
        <Stack spacing={1} direction={'column'}> 
            <StyledCard> 
                <Stack spacing={1} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography align='center' height={24} color={alpha(theme.palette.text.primary, 0.8)} variant="h6">
                        {title}
                    </Typography>
                    <IconButton color={alpha(theme.palette.text.primary, 0.8)} aria-label="search task">
                        <SearchOutlined sx={{color: alpha(theme.palette.text.primary, 0.8), fontSize: '1rem' }}/>
                    </IconButton>
                </Stack>
            </StyledCard>
            
            {/* <Divider sx={{mb: 2, mt: .5}} /> */}
            <div
                className={`column`}
                data-column={state}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDragOver={allowDrop}
                onDrop={(event) => drop(event)}
            >
                
                {
                    cards?.filter(card => card.status === state).map(todo => (
                        <TaskCard 
                            name={todo?.taskName} 
                            team={todo?.department} 
                            value={todo} 
                            key={todo.id} 
                            className="card" 
                            draggable="true" 
                            onDragStart={(e) =>drag(e, todo)} 
                            data_id={todo.id}
                            data={todo}
                        />
                    ))
                }
                {/* {
                    props.state === 'todo' &&
                    <Button sx={{color: alpha(theme.palette.text.primary, 0.8), border: '1px solid alpha(theme.palette.text.primary, 0.8)'}} fullWidth variant="outlined"  >Add Task</Button>
                } */}
                
            </div>
        </Stack>
    )
}

export default ListComponent;