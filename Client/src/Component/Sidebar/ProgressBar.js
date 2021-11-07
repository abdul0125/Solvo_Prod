import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ListItem } from '@material-ui/core';

function LinearProgressWithLabel(props) {
    const classes = useStyles();
  return (
      <>

    <Box display="flex" alignItems="center">
        
        <Box margin="0" padding="10px" maxWidth="20px">
        <Typography variant="body2" color="textSecondary">{props.subject}</Typography>
      </Box>
      <Box width="60%" mr={1} margin="auto">
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${props.value}%`}</Typography>
      </Box>
    </Box>
    </>
  );
}



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  progress: {
    paddingLeft: "10px",
     fontSize: "25px",
     fontWeight: "bold",
  }
});

export default function LinearWithValueLabel(props) {
  props = props.props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <ListItem className={classes.progress} button><Typography variant="h5">Skills</Typography></ListItem>


     {
           props?
          props.map(function(itr){
            console.log(itr)
            return   <LinearProgressWithLabel value="70" subject={itr}/>
                      
            }):null
        }
      
      
      
    </div>
  );
  }


