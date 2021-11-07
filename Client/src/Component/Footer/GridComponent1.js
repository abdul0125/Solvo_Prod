import React from "react"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link';
import {Grid ,Typography} from '@material-ui/core';
import Test from "./Test" 
import logo from '../../media/SolvokitLOGO.png';
 export default function GridComponent1(props)
 {
     
     return(
        <Grid item  xs={12} sm={6} md={6}>
        <div className={props.props.card} style={{position: "relative"}}>
          <div className={props.props.cardContent}>
          <img src={logo} alt="" srcset="" style={{width:"345px",height:"345px",position:"absolute",top:"-188px",left:"-22px"}}/>
           <div style={{transform:"translateY(41px)"}}>
           <Typography variant="body1"  papragraph="true">
              Solvokit aims to provide oppurtunities to students to enhance their learning skill as well as to teachers <br/>to develop teaching skills by providing a right platform.
            </Typography>
            <br/>
            <Typography>
            <Link color='inherit' href='#' className={props.props.Links}><FacebookIcon fontSize="large"/></Link>
            {'  '}
            <Link color='inherit' href='#' className={props.props.Links}><InstagramIcon fontSize="large"/></Link>
            {'  '}
            <Link color='inherit' href='#' className={props.props.Links}><EmailIcon fontSize="large"/></Link>
            {' '}
            <Link color='inherit' href='#' className={props.props.Links}><TwitterIcon fontSize="large"/></Link>
            </Typography>
           </div>
            </div>
          </div>
      </Grid>
     )
 }