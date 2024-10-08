import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import './Dropdown.css'; // Import the CSS file
import { bottom } from '@popperjs/core';
import { useNavigate } from 'react-router-dom';

export default function AboutUs() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const navigate=useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (navlink) => {
    if(navlink)
    {
      navigate(navlink);
      setAnchorEl(null);
      setSubMenuAnchorEl(null);
      return;
    }
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
          fontSize:'16px',
          fontWeight:'300',
        }}
      >
        AboutMIF
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={()=>{handleClose(null)}}
      >
        <MenuItem onClick={()=>{handleClose('/about/history')}} style={{ borderBottom: '1px solid rgba(74,67,121,0.6)' }}>
          <img src={'/assets/Icons/AboutUs/history.png'} alt="Logo" className="menu-item-logo" />
          <span className="menu-item-title" >History</span>

        </MenuItem>
        <MenuItem onClick={()=>{handleClose('/about/vision')}} style={{ borderBottom: '1px solid rgba(74,67,121,0.6)' }}>
          <img src={'/assets/Icons/AboutUs/vision.png'} alt="Logo" className="menu-item-logo" />

          <span className="menu-item-title">Vision and Mission</span>

        </MenuItem>
        <MenuItem onClick={()=>{handleClose('/about/international_collabration')}} style={{ borderBottom: '1px solid rgba(74,67,121,0.6)' }}>
          <img src={'/assets/Icons/AboutUs/international_collabration.png'} alt="Logo" className="menu-item-logo" />

          <span className="menu-item-title">International Collabration</span>

        </MenuItem>
        <MenuItem onClick={()=>{handleClose('/about/events')}} style={{ borderBottom: '1px solid rgba(74,67,121,0.6)' }}>
          <img src={'/assets/Icons/AboutUs/events.png'} alt="Logo" className="menu-item-logo" />

          <span className="menu-item-title">Events</span>
        </MenuItem>
        <MenuItem onClick={()=>{handleClose('/about/campuses')}} >
          <img src={'/assets/Icons/AboutUs/campuses.png'} alt="Logo" className="menu-item-logo" />

          <span className="menu-item-title">Campuses</span>
        </MenuItem>
      </Menu>
    </div>
  );
}
