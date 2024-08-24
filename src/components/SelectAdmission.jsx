import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';

export default function SelectAdmission() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubMenuAnchorEl(null);
    setOpenSubMenu(false);
  };

  const handleSubMenuClick = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
    setOpenSubMenu(true);
  };

  const handleSubMenuClose = () => {
    setSubMenuAnchorEl(null);
    setOpenSubMenu(false);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        endIcon={<ArrowDropDown />}
        sx={{
          textTransform: 'none', // Transforms text to uppercase
          color: '#fff',// Ensures text color is white
          fontSize: '16px'
       }}
      >
        Admissions
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Hifz Program (for memorizing the Quran)</MenuItem>
        <MenuItem onClick={handleSubMenuClick}>Nazra Program (for Quranic reading and recitation)</MenuItem>
        <MenuItem onClick={handleClose}>Underprivileged Student Support Program</MenuItem>
        <MenuItem onClick={handleClose}>School Dropout Prevention Program</MenuItem>
        <MenuItem onClick={handleClose}>Evening Tuition Assistance Program</MenuItem>
      </Menu>
    </div>
  );
}
