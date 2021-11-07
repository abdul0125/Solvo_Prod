import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Grid } from '@material-ui/core';
import Image from "./Ahad_2.jpeg"
import Copyright from "./Copyright"
import GridComponent1 from './GridComponent1';
import GridComponent2 from './GridComponent2';
import GridCompnent3 from './GridComponent3';
// import logo from '../../media/SolvokitLOGO.png';




const useStyles = makeStyles((theme) => ({
  Links:{
  "&:hover": {
    color: "#367875",
    textDecoration:"none",
  }
},
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    // height: '100%',
    display: 'flex',
    flexDirection: 'column',
    color:"#e8edea",  
  },
  cardContent: {
    flexGrow: 1,
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '2em',
    margin: 'auto',
    // backgroundSize: '100%',
  },
  main: {
    // marginTop: theme.spacing(8),
    // marginBottom: theme.spacing(2),
  },
  footer: {
    backgroundImage: `url(${Image})`,
    // backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: 'auto',

  },   
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div style={{}}>
      <footer className={classes.footer} style={{overflowX:"auto"}}>    
      <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}  direction="row" justify="center" alignItems="center" style={{overflow:"hidden",overflowX:"auto",paddingLeft:"8px"}} >
              <GridComponent1 props={classes}/>
              <GridComponent2 classes={classes}/>
              <GridCompnent3 classes={classes}/>
              <Grid item  xs={12} >
              <Typography variant='body2' align='center' paragraph><Copyright props={classes}/></Typography>
                </Grid>
          </Grid>

        </Container>
        
      </footer>
    </div>
  )}