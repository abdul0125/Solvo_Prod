import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
// import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import ExpandLessTwoToneIcon from '@material-ui/icons/ExpandLessTwoTone';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import { IconButton } from "@material-ui/core"
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:'center',
    margin:"2px"
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComposition(props) {
  const classes = useStyles();
  const [text,setText]=React.useState(false)
 
  
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
   

  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    console.log("yes")

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();

      console.log("yes")

      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
            <div>
        <div style={{display:"inline-flex"}}>
        <Button  
        ref={anchorRef}
        style={{padding:"0px",paddingLeft:"15px",display:"flex",justifyContent:"center",color:"white",backgroundColor:"rgb(37,69,69,0.5)"}}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        variant="outlined"
        onClick={
            handleToggle}> 
        <Typography variant="h7">{text?"public":"restricted"}</Typography>
        <IconButton>
        <ExpandLessTwoToneIcon
          style={{display:(open)?"block":"none",color:"white"}}
        />
        
        <ExpandMoreTwoToneIcon
        
        style={{display:!(open)?"block":"none",color:"white"}}/> 
        </IconButton>
        </Button>
        </div>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{zIndex:"1"}}>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: 'center-top' ,zIndex:"1"}}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList style={{backgroundColor:"rgb(0,0,0)"}} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} zIndex={1}>
                    <MenuItem
                    
                    onClick={()=>{
                        setText(true)
                        
                    setOpen(false)}}
                    style={{display:text?"none":"block",zIndex:"1",color:"white",backgroundColor:"rgb(0,0,0,0.9)"}}>Public</MenuItem>
                    <MenuItem 
                    onClick={()=>{
                      
                    setText(false)
                    
                    setOpen(false)}}
                    style={{display:!text?"none":"block",zIndex:"1",color:"white",backgroundColor:"rgb(0,0,0,0.9)"}}>Restricted</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}