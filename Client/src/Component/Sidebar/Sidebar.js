import React, {useEffect, useState} from "react";
import { Box, makeStyles } from "@material-ui/core";
// import Icon from "@material-ui/core/Icon";
import LinearWithValueLabel from "./ProgressBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "@material-ui/core";

import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import { useSelector } from "react-redux";
// import {signin} from "../../actions/auth";
import jwt_decode from 'jwt-decode';


import Typography from "@material-ui/core/Typography";
import DialogBox from '../DialogBox';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';



import "../../stylesheets/DialogBox.css";
import EditIcon from "@material-ui/icons/Edit";


import Avatar from "@material-ui/core/Avatar";


import Button from "@material-ui/core/Button";
import AddCircle from "@material-ui/icons/AddCircle";
import StarBorderIcon from '@material-ui/icons/StarBorder';



import SearchField from "react-search-field";
import "../../stylesheets/general.css";

import {LinearProgress } from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  SideBar: {
    margin: "10px",
    width: "75%",
    // padding: "25px 20px 20px 10px",
    display: "block",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 3.5px )",
    border: "1px solid rgba( 255, 255, 255, 0.2 )",
    backgroundColor: "rgba( 86, 84, 84, 0.40 )",
  },

  imgStyle: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  box1Style: {
    padding: "25px 10px 20px 15px",
    margin: "0px 0px 0px 0px",
    display: "block",
    backgroundColor: "#2f4f4f",
  },

  ProfileNameStyle: {
    textAlign: "center",
    lineHeight: "20px",
    display: "block",
    color: "#fff",
    fontWeight: "200",
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: "1.5px",
  },
  box2Style: {
    display: "block",
    lineHeight: "2px",

    backdropFilter: "blur(30px)",
    marginBottom: "1em",
  },
  box5Style: {
    display: "block",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },

  box6Style: {
    display: "block",
  },
  box3Style: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    width: "30%",
    margin: "10px",
    textAlign: "center",
    padding: "2px",
  },
  box4Style: {
    margin: "auto",
    width: "30%",
    lineHeight: "10px",
    paddingRight: "0px",
    background: "rgba(0, 0, 0, 0.562)",
    backdropFilter: "blur(30px)",
  },
  ImageSectiondiv: {
    // backgroundColor: '#abcdef',
    backgroundColor: "#2f4f4f",
    padding: "13px",
  },
  TrendingItemsStyle: {
    color: "black",
    textDecoration: "none",
    display: "inline-block",
    width: "max-content",
  },
  summaryStyle: {
    padding: "10px",
    fontFamily: "Trebuchet MS",
  },
  progress: {
    padding: "10px",
  },
  liveclasses: {
    display: "flex",
    justifyContent:"space-around",
    margin: "5px",
  },
  create: {
    fontSize: "16px",
    overflow:"hidden",
    display: "inline",
    padding: "7px 14px 7px 14px",
    color: "white",
    fontFamily:"'Montserrat', sans-serif",
    background:"rgba(53, 179, 127, 0.98)",
    outline:"none",
    border:"none",
    cursor:"pointer",
    transition:"0.3s ease-in-out",

    "&:hover":{
        background:"rgba(53, 179, 127, 0.78)"
    }
  },
  
  createcontent: {
    display: "flex",
    flexDirection:"column",
    alignContent: "center",
    alignItems: "center",
    border: "1px solid rgba( 255, 255, 255, 0.2 )",
    justifyContent:"center",
    margin: "10px 0",
    
    paddingTop: "15px",
    paddingBottom: "15px",
    height: "auto",
    marginBottom: "20px",
  },
  CourseCode: {
    borderRadius: "50px",
    // margin: "15px",
    padding: "5px 10px 5px 10px",
    // marginRight: "10px",
    // marginLeft: "30px",
    background: "none",
    display: "block",
    color: "#000000",
    border: "none",
    marginBottom:"1em",
    marginTop:"-0.5em",
    fontFamily: "'Montserrat', sans-serif",
    fontSize:"1.5em",
    fontWeight:700,
    color:"black",
  },
  Start: {
    fontSize: "16px",
    overflow:"hidden",
    display: "inline",
    padding: "7px 14px 7px 14px",
    color: "white",
    fontFamily:"'Montserrat', sans-serif",
    background:"rgba(95, 13, 54, 0.98)",
    outline:"none",
    border:"none",
    cursor:"pointer",
    transition:"0.3s ease-in-out",

    "&:hover":{
        background:"rgba(95, 13, 54, 0.58)"
    }
  },
  joincontent: {
    display: "flex",
    flexDirection:"column",
    alignContent: "center",
    alignItems: "center",
    border: "1px solid rgba( 255, 255, 255, 0.2 )",
    justifyContent:"center",
    margin: "10px 0 0 0",
    
    paddingTop: "15px",
    paddingBottom: "15px",
    height: "auto",
   
  },
  search: {
    border:"none",
    outline:"none",
  },
  recent: {
    
    backgroundColor: "rgba(53, 179, 127, 0.98)",
    color: "white",
    
    
    margin: "7px 25px 7px 20px",

    fontSize: "15px",
    fontFamily:"'Montserrat', sans-serif",
    padding:"0.3em 1em"
    
  },
  scheduleContent: {
    display: "block",
    alignContent: "center",
    alignItems: "center",
    border: "5px",

    margin: "0px 10px 0px 10px",
    borderRadius: "10%",
    height: "auto",
    marginBottom: "20px",
  },
  scheduleItem: {
    marginBottom: "8px",
    paddingBottom: "15px",
    borderRadius: "5%",
    backgroundColor: "#2f9c9c",
    display: "block",
    margin: "5px",
    paddingTop: "10px",
    color: "white",
  },
  dates: {
    paddingTop: "5px",
    display: "inline-block",
  },
  dat: {
    display: "inline",
    marginLeft: "15px",
    marginRight: "20px",
  },
  tim: {
    display: "inline",
    marginLeft: "45px",
  },
  teacherName: {
    fontSize: "18px",
    fontWeight: "700",
    marginLeft: "80px",
    display: "block",
    marginBottom: "8px",
  },
  coursecode: {
    padding: "10px",
    fontSize: "15px",
    marginLeft: "20px",
    display: "inline",
    paddingTop: "15px",
  },
  duration: {
    display: "inline",
    paddingLeft: "50px",
  },
}));

const Sidebar = (props) => {
  const [disp, setDisp] = useState(false);
  const [disp1, setDisp1] = useState(false);
  const resultData = useSelector((state) => state.authReducer)
  const [showMore, setshowMore] = React.useState(true);
 
   const user = JSON.parse(localStorage.getItem('profile'));

   const options = user.communities;
 
  const classes = useStyles();
  var today = new Date();
  var date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes() + " PM";


  return (

    <>
    
      <div className={classes.SideBar}>
        <div
          className={classes.ImageSectiondiv}
          style={{ overflow: "hidden", overflowX: "auto" }}
        >
          <img
            className={classes.imgStyle}
            src="https://image.shutterstock.com/image-photo/picture-cheerful-businessman-sitting-office-260nw-568326445.jpg"
            alt="profile"
          />
          <div className={classes.ProfileNameStyle}>
            <h3>
            
               {resultData.name} 
              <br />
            </h3>
             {resultData.qualification} 
          </div>
        </div>
        <Box
          className={classes.box2Style}
          border={2}
          borderColor="#4290f5"
          style={{ marginTop: "1em" }}
        >
          <LinearWithValueLabel props={resultData.learning_skills} />
        </Box>

        <Box className={classes.box6Style} border={2} borderColor="#4290f5" id="create_box">
          <Typography
            style={{
              padding: "8px 16px 8px 10px",
              background: "#2f4f4f",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              letterSpacing: "2px",
              fontSize: "1.5em",
              color: "white",
            }}
            variant="h5"
          >
            Live Classes
          </Typography>
          <div className={classes.liveclasses}>
              <ClickAwayListener><IconButton style={{borderRadius:"0",padding:"0",position:"relative"}} id="create_btn"> <button className={classes.create} onClick={() => setDisp(true)}>
              Create 
            </button>
            </IconButton>
            </ClickAwayListener>
           
            
          </div>
          <div className={classes.livecontent}>
            <Box
              className={classes.createcontent}
              style={{display:"none"}} 
            >
              <input type="text" className="course_code" placeholder="Course Code" />

              <IconButton style={{borderRadius:"0",padding:"0",position:"relative"}} onClick={()=>5}><button className={classes.Start}>Start</button></IconButton>
              
            </Box>
            <Box
              className={classes.joincontent}
            >
              <div className={classes.search}>
                {" "}
                <SearchField
                  placeholder="Search..."
                  // searchText="This is initial search text"
                  classNames="test-class"
                />
              </div>
              <div>
                <Typography
                  variant="h5"
                  style={{ padding: "10px 0", textAlign: "center" }}
                >
                  Recents
                </Typography>
                <div className={classes.recents}>
                  <div className={classes.recent}>coursecode/meetcode</div>
                  <div className={classes.recent}>coursecode/meetcode</div>
                  <div className={classes.recent}>coursecode/meetcode</div>
                </div>
              </div>
            </Box>
          </div>
        </Box>

         
        <Box className={classes.box5Style} border={1} style={{marginTop:"0.9em"}} borderColor="#4290f5">
          <div className={classes.root}>
            <ListItem className={classes.progress} onClick={()=>{document.querySelector(".community_box").classList.toggle("active");
                
              }} button>
              <Typography variant="h5" style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  fontSize:"1.5em",
                }}>Communities</Typography>
            </ListItem>
            <List className="community_box" style={{marginTop:"0.1em",color:"#F3F2C9",fontFamily:"'Montserrat', sans-serif"}}>
            { options.map((opt)=>( 
              <div  key={opt._id} >
              <ListItem className={classes.SkillItems} style={{display:"flex",justifyContent:"space-around"}} button>
                <Avatar style={{    width: "29px",
                  height: "29px",marginRight:"0.8em"}}/>
                <Typography style={{fontFamily: "'Montserrat', sans-serif",fontSize:"1.4em",flex:1}}>{opt}</Typography>
                <StarBorderIcon />
              </ListItem>
             
             
              
              </div>
            ))}
            <div style={{display:"flex"}}>
              
              <DialogBox title="create_community" />
              <DialogBox title="available_communities" />
              
              </div>
            </List>
          </div>
        </Box>

        <Box className={classes.box5Style} border={1} borderColor="#4290f5" style={{marginTop:"1.2em"}}>
          <div className={classes.root}>
            <ListItem className={classes.progress}  onClick={()=>{document.querySelector(".hashtags_box").classList.toggle("active")}} button>
              <Typography variant="h5" style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  fontSize:"1.5em",
                }} >Followed Hashtags</Typography>
            </ListItem>
            <List className="hashtags_box" style={{marginTop:"0.1em",color:"#F3F2C9",fontFamily:"'Montserrat', sans-serif"}}>
              <ListItem className={classes.SkillItems} button>
              <Link
                href="https://www.google.com"
                style={{textDecoration:"none",color:"rgba(142, 179, 226, 1)",fontSize:"1.1em"}}
              >
                {" "}
                #JEEMains2021{" "}
              </Link>
              </ListItem>
              <ListItem className={classes.SkillItems} button>
              <Link
                href="https://www.google.com"
                style={{textDecoration:"none",color:"rgba(142, 179, 226, 1)",fontSize:"1.1em"}}
              >
                {" "}
                #JEEMains2021{" "}
              </Link>
              </ListItem>
              <ListItem className={classes.SkillItems} button>
              <Link
                href="https://www.google.com"
                style={{textDecoration:"none",color:"rgba(142, 179, 226, 1)",fontSize:"1.1em"}}
              >
                {" "}
                #JEEMains2021{" "}
              </Link>
              </ListItem>

              
                <DialogBox title="hashtags" />
              
            </List>
          </div>
        </Box>

        </div>

        <div className="show_more" onClick={() => setshowMore(!showMore)}>
          
             <span>{showMore ? "Show More" : "Show Less"}</span>
             <span className="expand_icon"><ExpandLessIcon style={showMore ? {transform : "rotate(180deg)"} : {transform : "rotate(0)"}}/></span>
        </div>

      
    </>
  );
};

export default Sidebar;
