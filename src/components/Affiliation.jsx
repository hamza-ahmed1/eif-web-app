import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import './SelectAdmission.css'

export default function Affiliation() {
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
          color: '#fff' // Ensures text color is white
        }}
      >
        Affiliation
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Government organization</MenuItem>
        <MenuItem onClick={handleSubMenuClick}>Internatinal organizations</MenuItem>
        <MenuItem onClick={handleClose}>Educational institutes</MenuItem>
      </Menu>
      <Menu
        id="sub-menu"
        anchorEl={subMenuAnchorEl}
        open={openSubMenu}
        onClose={handleSubMenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>UNP</MenuItem>
        <MenuItem onClick={handleClose}>Sub Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Sub Option 3</MenuItem>
      </Menu>
    </div>
  );
}
