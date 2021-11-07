import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

// import Divider from '@material-ui/core/Divider';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


// import DirectionsIcon from '@material-ui/icons/Directions';
import { Typography } from '@material-ui/core';
import { useState } from 'react';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:"8px",
    marginLeft:"2px",
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor:"rgb(37,69,69,0.5)",
    color:"white"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  box:{
    padding:"2px",
    borderRadius:"7px",
    height:"max-content",
    width:"15vw",
    color:"white",
    backgroundColor:"rgb(37,69,69,0.5)"
  }
}));

export default function CustomizedInputBase() {
  const classes = useStyles();
  const [disp,setDis] = useState(false)
  return (
    <>
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu" >
        <MenuIcon style={{color:"white"}} onClick={()=>setDis(!disp)} />
      </IconButton>
      <InputBase
        style={{color:"white"}}
        className={classes.input}
        placeholder="Search by author/book name"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon style={{color:"white"}}/>
      </IconButton>
    </Paper>
    <ClickAwayListener >
    <div className={classes.box} style={{display:disp?"block":"none"}}>
      <Typography pargraph>
        Files uploaded in public directory are accesible to everyone.
      </Typography>
      <Typography pargraph>
        Files uploaded in private directory are accesible to your followers.
      </Typography>
    </div>
    </ClickAwayListener>
    </>
  );
}