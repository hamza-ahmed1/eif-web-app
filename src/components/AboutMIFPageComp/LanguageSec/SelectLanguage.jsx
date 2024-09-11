import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import '../../Dropdown.css'; // Make sure this path is correct
import { useNavigate } from 'react-router-dom';

export default function SelectLanguages() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedValue, setSelectedValue] = useState("English");
  const [selectedValueLogo, setSelectedValueLogo] = useState("/assets/Icons/Language/english.png"); // Default text for the button
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (logo_link,language) => {
    // check if both are MT
    if(!logo_link && !language)
    {
          alert("language is not available");
    }

    if (logo_link && language) {
      setSelectedValue(language);
      setSelectedValueLogo(logo_link);
    }

    
  // Update the button text with the selected language
    setAnchorEl(null);
    setSubMenuAnchorEl(null);
    setOpenSubMenu(false);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        endIcon={<ArrowDropDown />}
        sx={{
          fontSize: '16px',
          fontWeight: '300',
          textTransform: 'none',
          color: '#fff'
        }}
      >
          <img src={selectedValueLogo} alt="Select" className="menu-item-logo" />
        {selectedValue} {/* Display selected language */}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose(null, selectedValue)}
      >
        <MenuItem onClick={()=>{handleClose('/assets/Icons/Language/english.png','English')}}>
          <img src={'/assets/Icons/Language/english.png'} alt="Logo" className="menu-item-logo" />
          <span className="menu-item-title">English</span>
        </MenuItem>
        <MenuItem onClick={()=>{handleClose(null,null)}}>
          <img src={'/assets/Icons/Language/urdu.png'} alt="Logo" className="menu-item-logo" />
          <span className="menu-item-title">اردو</span>
        </MenuItem>
        <MenuItem onClick={()=>{handleClose(null,null)}}>
          <img src={'/assets/Icons/Language/arabic.png'} alt="Logo" className="menu-item-logo" />
          <span className="menu-item-title">العربية</span>
        </MenuItem>
        <MenuItem onClick={()=>{handleClose(null,null)}}>
          <img src={'/assets/Icons/Language/persian.png'} alt="Logo" className="menu-item-logo" />
          <span className="menu-item-title">فارسی</span>
        </MenuItem>
      </Menu>
    </div>
  );
}
