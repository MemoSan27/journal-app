import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startNewNote } from '../../store/journal';


export const JournalPage = () => {

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  return (

    <JournalLayout>
      
      {/* <Typography>Amet et exercitation laborum nostrud laborum quis consectetur consectetur Lorem excepteur culpa nostrud commodo. Ea duis ex aliqua nisi voluptate dolore adipisicing in duis id. Do in ex aute cupidatat ut aute commodo ad pariatur ad in voluptate. Adipisicing duis tempor duis sit et qui non nisi cillum in sint duis. Eiusmod est non cupidatat ipsum aute est labore do adipisicing cupidatat deserunt. </Typography> */}
    
      <NothingSelectedView />
      {/*  <NoteView />  */}

      <IconButton
        onClick={ onClickNewNote }
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: 'error.main', opacity: 0.7 },
          position: "fixed",
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>

    </JournalLayout>
  )
}
