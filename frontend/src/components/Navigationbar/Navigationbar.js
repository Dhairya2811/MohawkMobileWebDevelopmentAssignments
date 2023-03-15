import React, { useEffect } from 'react';
import styles from './Navigationbar.module.css';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigationbar = () => {
  const [value, setValue] = React.useState('/');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    setValue(location.pathname);
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };
  
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="">
          <Tab label="Home" value="/" />
          <Tab label="About" value="/about" />
          <Tab label="Inventory" value="/inventory" />
          <Tab label="Search" value="/search" />
        </Tabs>
      </Box>
    </Box>
  );
};

export default Navigationbar;