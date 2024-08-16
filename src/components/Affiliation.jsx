import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
// importing css
import './SelectAdmission'

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
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<ArrowDropDown />}
        sx={{ color: '#fff' }}
      >
        Affiliation
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleSubMenuClick}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
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
        <MenuItem onClick={handleClose}>Sub Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Sub Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Sub Option 3</MenuItem>
      </Menu>
    </div>
  );
}
