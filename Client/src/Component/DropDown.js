import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

import DialogBox from '../Component/DialogBox';


  
  function DropDown() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} style={{transform:"translateX(25px)"}}>
        <ArrowDropDownCircleIcon fontSize="large" style={{color:"464660"}}/>
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}><a href="/Profile" style={{color:"black"}}>Profile</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="/" style={{color:"black"}}>SignIn</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="#" style={{color:"black"}}>Create new account</a></MenuItem>

          <MenuItem onClick={handleClose}><a href="#" style={{color:"black"}}><DialogBox title="subscription"/></a></MenuItem>
          <MenuItem onClick={handleClose}><a href="#" style={{color:"black"}}><DialogBox title="logout"/></a></MenuItem>
          <MenuItem onClick={handleClose}><a href="#" style={{color:"black"}}><DialogBox title="feedback"/></a></MenuItem>
        </Menu>
      </div>
    );
  }


export default DropDown;
