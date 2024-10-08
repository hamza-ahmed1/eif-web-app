import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import './Dropdown.css'; // Import the CSS file

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
    // setOpenSubMenu(false);
  };

  // const handleSubMenuClick = (event) => {
  //   setSubMenuAnchorEl(event.currentTarget);
  //   setOpenSubMenu(true);
  // };

  // const handleSubMenuClose = () => {
  //   setSubMenuAnchorEl(null);
  //   setOpenSubMenu(false);
  // };

  return (
    <div>
      <Button
        onClick={handleClick}
        endIcon={<ArrowDropDown />}
        sx={{
          textTransform: 'none',
          color: '#fff',
          fontSize: '16px',
          fontWeight:'300',
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
        <MenuItem onClick={handleClose} style={{borderBottom:'1px solid rgba(74,67,121,0.6)'}}>
          <span className="menu-item-title">Hifz Program</span> 
        </MenuItem>
        <MenuItem onClick={handleClose} style={{borderBottom:'1px solid rgba(74,67,121,0.6)'}}>
          <span className="menu-item-title">Nazra Program</span> 
        </MenuItem>
        <MenuItem onClick={handleClose} style={{borderBottom:'1px solid rgba(74,67,121,0.6)'}}>
          <span className="menu-item-title" >Dropout Prevention Program</span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span className="menu-item-title">Evening Tuition Program</span>
        </MenuItem>
      </Menu>
    </div>
  );
}
