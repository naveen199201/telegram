// DarkModeSwitch.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, FormControlLabel } from '@mui/material';
import { toggleTheme } from './themeSlice';

const DarkModeSwitch = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <FormControlLabel
      control={<Switch checked={isDarkMode} onChange={handleToggle} />}
      label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
    />
  );
};

export default DarkModeSwitch;
