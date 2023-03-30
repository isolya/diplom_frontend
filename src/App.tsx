
import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import { memo, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.component';
import { fetchUser } from './store/apis/auth';
import { useAppDispatch } from './store/hooks';

export const App = memo(() => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className="App">
      <CssBaseline/>
    <Header/>
     <Box sx={{marginTop:'82px'}}>
      <Outlet/>
     </Box>
    </div>
  );
});
