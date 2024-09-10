import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import '../../Dropdown.css'; // Make sure this path is correct
import { useNavigate } from 'react-router-dom';



export default function SelectLanguages() {
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
          fontSize:'16px',
          fontWeight:'300',
          textTransform: 'none', // Transforms text to uppercase
          color: '#fff' // Ensures text color is white
        }}
      >
        Language
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose(null)}
      >
        <MenuItem onClick={() => handleClose('https://swd.sindh.gov.pk/')}>
          <img src={'/assets/Icons/Language/english.png'} alt="Logo" className="menu-item-logo" />
          <span className="menu-item-title">English</span>
        </MenuItem>
        <MenuItem onClick={() => handleClose('http://www.dgre.gov.pk/')} >
          <img src={'/assets/Icons/Language/urdu.png'} alt="Logo" className="menu-item-logo" />
          <span className="menu-item-title">اردو</span>
        </MenuItem>
        <MenuItem onClick={() => handleClose('http://www.dgre.gov.pk/')} >
          <img src={'/assets/Icons/Language/arabic.png'} alt="Logo" className="menu-item-logo" />
          <span className="menu-item-title">العربية</span>
        </MenuItem>
        <MenuItem onClick={() => handleClose('http://www.dgre.gov.pk/')} >
          <img src={'/assets/Icons/Language/persian.png'} alt="Logo" className="menu-item-logo" />
          <span className="menu-item-title">فارسی</span>
        </MenuItem>
      </Menu>
    </div>
  );
}
