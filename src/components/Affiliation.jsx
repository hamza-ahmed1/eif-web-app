import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import './Dropdown.css'; // Make sure this path is correct
import { useNavigate } from 'react-router-dom';



export default function Affiliation() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (link) => {
    if(link)
    {
      window.open(link, '_blank');
    }
    
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
        onClose={() => handleClose(null)}
      >
        <MenuItem onClick={() => handleClose('https://swd.sindh.gov.pk/')} style={{borderBottom:'2px solid   rgba(74,67,121,0.6)'}}>
          <img src={'/assets/Logo/external_orgs/swd.png'} alt="Logo" className="menu-item-logo" />
          <span className="menu-item-title">Social Welfare Department</span>
        </MenuItem>
        <MenuItem onClick={() => handleClose('http://www.dgre.gov.pk/')} >
          <img src={'/assets/Logo/external_orgs/dgre.png'} alt="Logo" className="menu-item-logo" />
          <span className="menu-item-title">DGRE</span>
        </MenuItem>
      </Menu>
    </div>
  );
}
