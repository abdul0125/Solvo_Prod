import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import { Link } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Avatar from "@material-ui/core/Avatar";
import LinearWithValueLabel from "./ProgressBar";
import DialogBox from '../DialogBox'
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { addcontact } from "../../actions/messages";
// import MessageIcon from "@material-ui/icons/Message";
// import PersonAddIcon from "@material-ui/icons/PersonAdd";
import jwt_decode from 'jwt-decode';
import Button from "@material-ui/core/Button";
// import AddCircle from "@material-ui/icons/AddCircle";
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useSelector } from "react-redux";

// importing general.css for all general css, specialy material UI
import "../../stylesheets/general.css";

const useStyles = makeStyles((theme) => ({
  SideBar: {
    margin: "10px",

    // padding: "25px 20px 20px 10px",

    width: "65%",
    display: "block",
    position:"sticky",
    top:"5em",
    
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    background:"rgba( 86, 84, 84, 0.70 )",
    backdropFilter: "blur( 3.5px )",
    border: "1px solid rgba( 255, 255, 255, 0.2 )",
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
    background: "none",
    backdropFilter: "blur(30px)",
    marginBottom:"1em",
  },
  box3Style: {
    display: "block",
    backgroundColor: "#2f4f4f",
    marginBottom: "10px",
    background: "rgba(0, 0, 0, 0.562)",
    backdropFilter: "blur(30px)",
  },
  box5Style: {
    display: "block",
    
    background: "rgba(0, 0, 0, 0.562)",
    backdropFilter: "blur(30px)",

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
    backgroundColor: "#2f4f4f",
    padding: "13px",
  },

  TrendingItemsStyle: {
    textDecoration: "none",
    display: "inline-block",
    width: "max-content",
  },
  summaryStyle: {
    padding: "10px",
    fontFamily: "Trebuchet MS",
  },

  root: {
    width: "100%",
  },
  progress: {
    paddingLeft: "15px",
    color: "white",
    textTransform: "capitalize",
    background:"#2f4f4f",
  },
  SkillItems: {
    paddingLeft: "10%",
    fontSize: "10px",
    
  },
  IconsDiv: {
    padding: "5%",
  },
}));

const Sidebar_expert_search = (props) => {
const dispatch = useDispatch()
let sender=""
  // const token = localStorage.getItem("token");
  // const resultData = jwt_decode(token);
  const resultData = useSelector((state) =>{
    sender = state.authReducer.email
    return state.Searched})
  const classes = useStyles();
  return (
    <>
      <div className={classes.SideBar}>
        {props.myProfile ?  <span className="icons_in_sidebar" style={{position:"absolute",top:"0.29em",right:"-0.8em",cursor:"pointer",transition:"0.2s ease",transform:"translateX(-40%)"}} onClick={()=>{document.querySelector('.profile_options').classList.toggle('active')}}>
              <MoreVertIcon style={{fontSize:"2em",color:"white"}}/></span> : ''}
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
            <h3 style={{ lineHeight: "35px" }}>
              {resultData.name}
              <br />
            </h3>
            {resultData.qualification}
          </div>
        </div>
        <Box
          className={classes.IconsDiv}
          border={1}
          borderColor="#4290f5"
          borderTop={0}
          borderBottom={0}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              position:"relative",
              width:"100%"
            }}
          >
            {props.myProfile ? "" : <div><span className="icons_in_sidebar">
              <Button style={{background:"#2f4f4f",fontWeight:"900",fontSize:"0.9em",boxShadow:"0px 3px 5px black",color:"white"}} >Follow</Button>
            </span>
            <span className="icons_in_sidebar" style={{marginLeft:"2em"}}>
              <Button onClick={()=>{
                // console.log(resultData.email)
                document.querySelector('.messages').classList.toggle('active')
                document.querySelector('.search_result').classList.remove('active');
                dispatch(addcontact(resultData.email,resultData.name,sender))}} style={{background:"#2f4f4f",fontWeight:"900",fontSize:"0.9em",boxShadow:"0px 3px 5px black",color:"white"}} >Message</Button>
            </span>
            <span className="icons_in_sidebar" style={{position:"absolute",top:"0.29em",right:"-0.8em",cursor:"pointer",transition:"0.2s ease"}} onClick={()=>{document.querySelector('.profile_options').classList.toggle('active')}}>
              <MoreVertIcon style={{fontSize:"2em"}}/></span></div>}
              <div className="profile_options" style={{zIndex:"2",boxShadow:"0px 0px 10px black",transform: "translateX(13.5em)",top:props.myProfile ? 0 : "27%"}}>
                <ul style={{cursor:"pointer"}} onClick={()=>{document.querySelector('.profile_options').classList.remove('active')}}>
                <li>Edit Profile <DialogBox title="edit_profile" /></li>
                <li>Report</li>
                  <li>Follow</li>
                  <li>Message</li>
                  <li>Profile</li>
                  <li>Favorite</li>
                </ul>
              </div>
            
          </div>
        </Box>
        <Box className={classes.box6Style} border={1} borderColor="#4290f5">
        <Box className={classes.box2Style}>
          <div className={classes.root}>
            
            <ListItem className={classes.progress} onClick={()=>{document.querySelector(".skills_box").classList.toggle("active");
                }}onClick={()=>{document.querySelector(".qualifications_box").classList.toggle("active");
              }} button>
              <Typography
                variant="h5"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  fontSize:"1.5em",
                }}
                
              >
                Qualifications
              </Typography>
             
            </ListItem>
            
            <List style={{marginTop:"0.1em",color:"#F3F2C9",fontFamily:"'Montserrat', sans-serif"}}>

            {
              resultData.qualifications?
                  resultData.qualifications.map(function(qualification){
                      return   <ListItem className={classes.SkillItems} button>
                                    <Typography style={{fontFamily: "'Montserrat', sans-serif",fontSize:"1.4em"}}>{qualification}</Typography>
                               </ListItem>
                  }):null
              }
              
            </List>
           
          </div>
          </Box>
        </Box>
        <Box
          className={classes.box2Style}
          border={2}
          borderColor="#4290f5"
          style={{ marginTop: "1em" }}
        >
          <LinearWithValueLabel props={resultData.learning_skills} />
        </Box>

        <Box className={classes.box5Style} border={1} borderColor="#4290f5">
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
            <List style={{marginTop:"0.1em",color:"#F3F2C9",fontFamily:"'Montserrat', sans-serif"}}>

                
        

                 { resultData.learning_skills?
                  resultData.learning_skills.map(function(skill){
                      return   <ListItem className={classes.SkillItems} button>
                                    <Typography style={{fontFamily: "'Montserrat', sans-serif",fontSize:"1.4em"}}>{skill}</Typography>
                               </ListItem>
                  }):null
              }
            </List>
          </div>
        </Box>

        <Box className={classes.box5Style} style={{marginTop:"1.4em"}} border={1} borderColor="#4290f5">
          <div className={classes.root}>
            <ListItem className={classes.progress} onClick={()=>{document.querySelector(".interest_box").classList.toggle("active");
                
              }} button>
              <Typography variant="h5" style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  fontSize:"1.5em",
                }}>Interests</Typography>
                
            </ListItem>

          <List style={{marginTop:"0.1em",color:"#F3F2C9",fontFamily:"'Montserrat', sans-serif"}}>
            
            {
              resultData.interest? 
                resultData.interest.map(function(itr){
                  return   <ListItem className={classes.SkillItems} button>
                              <Typography style={{fontFamily: "'Montserrat', sans-serif",fontSize:"1.4em"}}>{itr}</Typography>
                            </ListItem>
                  }):null
              }
            
            </List>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Sidebar_expert_search;