import { React, useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
// import Image from "./testing.jpeg";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Video from "../Videos/Video/Video";
import SimpleMenu from "./SimpleMenu";
import TimeTable from "./TimeTable";
import RecentPosts from "../ProfilePosts/RecentPosts";
import Post from "../Posts/Post/Post";
// import EditIcon from "@material-ui/icons/Edit";
import DialogBox from '../DialogBox';

import { useSelector } from "react-redux";

const forgotten = makeStyles(() => ({
  component: {
    outline: "none",
    overflow: "hidden",
    minWidth: "300px",
    margin: "2px",
    height: "max-content",
    marginRight: "1%",
    borderRadius: "7px",
    backgroundColor: "rgba(32, 228, 176, 0.3)",
    border: " 1px solid rgba(226, 226, 226, 0.6)",

    marginBottom: "6px",
  },
}));

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width:"50%",
    marginLeft:"1em"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function Profile(props) {
  const aajao = forgotten();
  const [display, setValue] = useState(props.isTutor ? true : false);
  const [plan, setPlan] = useState(false);
  const [week, setWeek] = useState(false);
  const [month, setMonth] = useState(false);
  const [year, setYear] = useState(false);
  const [time, setTime] = useState(false);

  const classes = useStyles();
  const resultData = useSelector((state) => state.authReducer)

  return (
    <>
     {props.isTutor ?  <div
        style={{
          display: "flex-inline",
          marginRight: "5px",
          marginLeft: "-10%",
          marginTop: "1%",
          marginBottom: "2%",
          paddingTop: "1em",
          paddingRight: "5%",
        }}
      >
        <Button
          variant="outlined"
          style={{
            marginRight: "1%",
            background: "rgba(94, 145, 119, 0.8)",
            color: "white",
          }}
          aria-label="expand row"
          size="medium"
          onClick={() => {
            setValue(!display);
            setPlan(false);
            setTime(false);
          }}
        >
          About
        </Button>
        <Button
          variant="outlined"
          style={{
            marginRight: "1%",
            background: "rgba(94, 145, 119, 0.8)",
            color: "white",
          }}
          color="primary"
          aria-label="expand row"
          size="medium"
          onClick={() => {
            setTime(!time);
            setPlan(false);
            setValue(false);
          }}
        >
          Available Slots
        </Button>
        <Button
          variant="outlined"
          style={{
            marginRight: "1%",
            background: "rgba(94, 145, 119, 0.8)",
            color: "white",
          }}
          color="primary"
          aria-label="expand row"
          size="medium"
          onClick={() => {
            setPlan(!plan);
            setValue(false);
            setTime(false);
          }}
        >
          Plans
        </Button>
        <TimeTable props={[time]} id={resultData._id}/>
      </div> : ""}
      <Collapse
        in={display}
        timeout="auto"
        unmountOnExit
        style={{ transitionDuration: "3ms" }}
      >
        <div
          style={{
            overflow: "hidden",
            overflowX: "auto",
            border: "0px solid",
            marginLeft: "-9%",
            width: "100%",
            display: "flex",
            // backgroundColor:"#e1e3e6",
            borderRadius: "7px",
            background: "#2f4f4f",
            // opacity: 0.5,

            marginRight: "2%",
            padding: "1%",
            backgroundPosition: "center",
            height: "auto",
          }}
        >
          <Grid container direction="row">
            <Grid item xs={12} sm={12} md={12}>
              <div className={aajao.component} style={{ position: "relative" }}>
                <Typography
                  style={{
                    fontSize: "x-large",
                    fontFamily: "'Montserrat', sans-serif",
                    background: "white",
                    width: "max-content",
                    color: "black ",
                    fontWeight: "700",
                    padding: "0.1em 1em",
                    borderRadius: "3px",
                    border: "0px solid",
                  }}
                >
                  Expertise
                </Typography>
                <span  style={{
                    cursor: "pointer",
                    position: "absolute",
                    top: "0.4em",
                    right: "0.8em",
                  }}> <DialogBox title="expertise"/></span>
               
               
                

                <ul style={{ padding: "0 3em", marginTop: "6px" }}>
                 
                  {
                     resultData.thrust_area?
                  resultData.thrust_area.map(function(skill){
                      return   <li>
                              {" "}
                         <Typography style={{ fontSize: "large", color: "white" }}>{skill}</Typography>
                             </li>        
                  }):null
              }
                 
                  {/* <li>
                    
                    <Typography style={{ fontSize: "large", color: "white" }}>
                      To be added here
                    </Typography>
                  </li>
                  <li>
                    {" "}
                    <Typography style={{ fontSize: "large", color: "white" }}>
                      To be added here
                    </Typography>
                  </li>
                  <li>
                    <Typography style={{ fontSize: "large", color: "white" }}>
                      To be added here
                    </Typography>
                  </li>
                  <li>
                    <Typography style={{ fontSize: "large", color: "white" }}>
                      To be added here
                    </Typography>
                  </li> */}
                </ul>
              </div>
              <Grid container direction="row">
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={5}
                  className={aajao.component}
                  style={{ width: "48%" }}
                >
                  <Typography
                    style={{
                      fontSize: "x-large",
                      fontFamily: "'Montserrat', sans-serif",
                      background: "white",
                      width: "max-content",
                      color: "black ",
                      fontWeight: "700",
                      padding: "0.1em 1em",
                      borderRadius: "3px",
                      border: "0px solid",
                      marginBottom: "0.3em",
                    }}
                  >
                    Rating(1-5)
                  </Typography>
                  <StarBorderOutlinedIcon
                    style={{ marginLeft: "1em", color: "yellow" }}
                  />
                  <StarBorderOutlinedIcon style={{ color: "yellow" }} />
                  <StarBorderOutlinedIcon style={{ color: "yellow" }} />
                  <StarBorderOutlinedIcon style={{ color: "yellow" }} />
                  <StarBorderOutlinedIcon style={{ color: "yellow" }} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  className={aajao.component}
                  style={{ width: "49%", position: "relative" }}
                >
                  <Typography
                    style={{
                      fontSize: "x-large",
                      fontFamily: "'Montserrat', sans-serif",
                      background: "white",
                      width: "max-content",
                      color: "black ",
                      fontWeight: "700",
                      padding: "0.1em 1em",
                      borderRadius: "3px",
                      border: "0px solid",
                      marginBottom: "0.3em",
                    }}
                  >
                    Rates $
                  </Typography>
                   <span  style={{
                    cursor: "pointer",
                    position: "absolute",
                    top: "0.4em",
                    right: "0.8em",
                  }}> <DialogBox title="rates"/></span>
                  <Typography
                    style={{
                      fontSize: "large",
                      color: "white",
                      marginLeft: "1em",
                    }}
                  >
                    {resultData.rates}
                    
                  </Typography>
                </Grid>
              </Grid>
              <Grid container direction="row" alignItems="stretch">
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={5}
                  className={aajao.component}
                  style={{ width: "48%" }}
                >
                  <Typography
                    style={{
                      fontSize: "large",
                      fontFamily: "'Montserrat', sans-serif",
                      background: "white",
                      width: "max-content",
                      color: "black ",
                      fontWeight: "700",
                      padding: "0.1em 1em",
                      borderRadius: "3px",
                      border: "0px solid",
                      marginBottom: "0.3em",
                    }}
                  >
                    No. of Questions <br /> Answered
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "large",
                      paddingLeft: "1em",
                      color: "white",
                    }}
                  >
                    {resultData.question_answered}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  className={aajao.component}
                  style={{ width: "49%", height: "127px" }}
                >
                  <Typography
                    style={{
                      fontSize: "large",
                      fontFamily: "'Montserrat', sans-serif",
                      background: "white",
                      width: "max-content",
                      color: "black ",
                      fontWeight: "700",
                      padding: "0.1em 1em",
                      borderRadius: "3px",
                      border: "0px solid",
                      marginBottom: "0.3em",
                    }}
                  >
                    No. of Hours Taught
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "large",
                      paddingLeft: "1em",
                      color: "white",
                    }}
                  >
                    {resultData.taught_hours}
                  </Typography>
                </Grid>
              </Grid>
              <div className={aajao.component} style={{ position: "relative" }}>
                <Typography
                  style={{
                    fontSize: "x-large",
                    fontFamily: "'Montserrat', sans-serif",
                    background: "white",
                    width: "max-content",
                    color: "black ",
                    fontWeight: "700",
                    padding: "0.1em 1em",
                    borderRadius: "3px",
                    border: "0px solid",
                    marginBottom: "0.3em",
                  }}
                >
                  Experience
                  
                </Typography>
                 <span  style={{
                    cursor: "pointer",
                    position: "absolute",
                    top: "0.4em",
                    right: "0.8em",
                  }}> <DialogBox title="experience"/></span>
                <div
                  className="Most_previous_employment"
                  style={{ padding: "0.3em 1em" }}
                >
                  <h5
                    style={{
                      fontSize: "1em",
                      color: "rgba(238, 248, 158, 1)",
                      letterSpacing: "1px",
                    }}
                  >
                    Most previous employment :
                  </h5>
                  <div
                    className="job_title"
                    style={{ fontWeight: 400, color: "white" }}
                  >
                    Job-title : <span>Web developer</span>
                  </div>
                  <div
                    className="employer"
                    style={{ fontWeight: 400, color: "white" }}
                  >
                    employer: <span>Solvokit</span>
                  </div>
                  <div
                    className="worked"
                    style={{ fontWeight: 400, color: "white" }}
                  >
                    Worked: <span>July-2020 - Present</span>
                  </div>
                </div>
              </div>
              <div className={aajao.component} style={{ position: "relative" }}>
                <Typography
                  style={{
                    fontSize: "x-large",
                    fontFamily: "'Montserrat', sans-serif",
                    background: "white",
                    width: "max-content",
                    color: "black ",
                    fontWeight: "700",
                    padding: "0.1em 1em",
                    borderRadius: "3px",
                    border: "0px solid",
                  }}
                >
                  Languages
                </Typography>
                 <span  style={{
                    cursor: "pointer",
                    position: "absolute",
                    top: "0.4em",
                    right: "0.8em",
                  }}> <DialogBox title="languages"/></span>
                <ul style={{ padding: "0 3em", marginTop: "6px" }}>

                {
                     resultData.known_languages?
                     resultData.known_languages.map(function(language){
                         return   <li>
                                 {" "}
                            <Typography style={{ fontSize: "large", color: "white" }}>{language}</Typography>
                                </li>        
                     }):null
                 }
                  {/* <li>
                    {" "}
                    <Typography style={{ fontSize: "large", color: "white" }}>
                      Hindi
                    </Typography>
                  </li>
                  <li>
                    {" "}
                    <Typography style={{ fontSize: "large", color: "white" }}>
                      English
                    </Typography>
                  </li>
                  <li>
                    {" "}
                    <Typography style={{ fontSize: "large", color: "white" }}>
                      Urdu
                    </Typography> */}
                  {/* </li>
                  <li>
                    <Typography style={{ fontSize: "large", color: "white" }}>
                      Gujarati
                    </Typography>
                  </li>
                  <li>
                    <Typography style={{ fontSize: "large", color: "white" }}>
                      Arabic
                    </Typography>
                  </li> */}
                </ul>
              </div>
            </Grid>
          </Grid>
        </div>
      </Collapse>
      <Collapse
        in={plan}
        timeout="auto"
        unmountOnExit
        style={{ transitionDuration: "3ms" }}
      >
        <div
          style={{
            overflow: "hidden",
            overflowX: "auto",
            border: "0px solid",
            transform: "translateX(-20%)",
            width: "100%",
            display: "flex",
            // backgroundColor:"#e1e3e6",
            borderRadius: "7px",

            // opacity: 0.5,
            backgroundSize: "cover",
            marginRight: "2%",
            padding: "1%",
            backgroundPosition: "center",
            height: "auto",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              className={aajao.component}
              style={{ width: "60%", display: week ? "block" : "none" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    fontSize: "x-large",
                    width: "100%",
                    color: "white",
                    padding: "0",
                    margin: "0",
                    textAlign: "center",
                    border: "0px solid",
                    background: "#2f4f4f",
                  }}
                >
                  Weekly
                </Typography>
                <div
                  style={{
                    display: "inline-flex",
                    margin: "4px",
                    flexWrap: "wrap",
                  }}
                >
                  {[
                    { id: "Mon" },
                    { id: "Tue" },
                    { id: "Wed" },
                    { id: "Thu" },
                    { id: "Fri" },
                    { id: "Sat" },
                    { id: "Sun" },
                  ].map((id) => (
                    <div style={{ margin: "4px" }}>
                      <Typography
                        id={id.id}
                        style={{
                          fontSize: "large",

                          width: "max-content",
                          padding: "0.2em 0.6em",
                          color: "white",

                          cursor: "pointer",
                          borderRadius: "6px",

                          border: "1px solid rgba(0, 0, 0, 0.2)",
                        }}
                        onClick={() => {
                          document.getElementById(id.id).style.backgroundColor =
                            "rgb(89 178 219)";

                          document.getElementById(id.id).style.color =
                            "rgb(222 238 247)";
                        }}
                      >
                        {id.id}
                      
                      </Typography>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    margin: "4px",
                    alignSelf: "start",
                    paddingLeft: "0.6em",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography style={{ fontSize: "x-large" }}>
                    Timing:
                  </Typography>
                  <form className={classes.container} noValidate>
  <TextField
    id="time"
    type="time"
    defaultValue="07:30"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 300, // 5 min
    }}
  />
</form>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    margin: "4px",
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    marginLeft: "2.3em",
                  }}
                >
                  <Typography style={{ fontSize: "x-large" }}>
                    Duration:{" "}
                  </Typography>
                  <div>
                    <select
                      name="durations"
                      id="durations"
                      style={{
                        padding: "0.4em 2em",
                        fontWeight: "600",
                        borderRadius: "6px",
                        marginLeft: "2.3em",
                      }}
                    >
                      <option value="30" className="duration">
                        30 min
                      </option>
                      <option value="60" className="duration">
                        60 min
                      </option>
                      <option value="90" className="duration">
                        90 min
                      </option>
                    </select>
                  </div>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    margin: "4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography style={{ fontSize: "x-large" }}>
                    Price:{" "}
                  </Typography>
                  <input
                    type="text"
                    style={{
                      background: "rgba(255, 255, 255, 0.5)",
                      fontWeight: "700",
                      padding: "0.5em 1em",
                      marginLeft: "0.9em",
                      outline: "none",
                      border: "1px solid rgba(0, 0, 0, 0.5)",
                    }}
                    placeholder="Price"
                  />
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    margin: "4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    style={{ fontSize: "x-large", marginLeft: "0.3em" }}
                  >
                    Subject:{" "}
                  </Typography>
                  <input
                    type="text"
                    style={{
                      background: "rgba(255, 255, 255, 0.5)",
                      width: "180px",
                      fontWeight: "700",
                      padding: "0.5em 1em",
                      marginLeft: "0.9em",
                      outline: "none",
                      border: "1px solid rgba(0, 0, 0, 0.5)",
                    }}
                    placeholder="Subject"
                  />
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              className={aajao.component}
              style={{ width: "40%", display: month ? "block" : "none" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    fontSize: "x-large",
                    width: "100%",
                    color: "white",
                    padding: "0",
                    margin: "0",
                    textAlign: "center",
                    border: "0px solid",
                    background: "#2f4f4f",
                  }}
                >
                  Monthly
                </Typography>
                <div
                  style={{
                    display: "inline-flex",
                    margin: "4px",
                    flexWrap: "wrap",
                  }}
                >
                  {[
                    { id: "Mon" },
                    { id: "Tue" },
                    { id: "Wed" },
                    { id: "Thu" },
                    { id: "Fri" },
                    { id: "Sat" },
                    { id: "Sun" },
                  ].map((id) => (
                    <div style={{ margin: "4px" }}>
                      <Typography
                        id={id.id + "monthly"}
                        style={{
                          fontSize: "large",

                          width: "max-content",
                          padding: "0.2em 0.6em",
                          color: "white",

                          cursor: "pointer",
                          borderRadius: "6px",

                          border: "1px solid rgba(0, 0, 0, 0.2)",
                        }}
                        onClick={() => {
                          document.getElementById(
                            id.id + "monthly"
                          ).style.backgroundColor = "rgb(89 178 219)";
                          document.getElementById(
                            id.id + "monthly"
                          ).style.color = "rgb(222 238 247)";
                        }}
                      >
                        {id.id}
                  
                      </Typography>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    margin: "4px",
                    alignSelf: "start",
                    paddingLeft: "0.6em",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography style={{ fontSize: "x-large" }}>
                    Timing:
                  </Typography>
                  <form className={classes.container} noValidate>
  <TextField
    id="time"
    type="time"
    defaultValue="00:00"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 300, // 5 min
    }}
  />
</form>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    margin: "4px",
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    marginLeft: "2.3em",
                  }}
                >
                  <Typography style={{ fontSize: "x-large" }}>
                    Duration:{" "}
                  </Typography>
                  <div>
                    <select
                      name="durations"
                      id="durations"
                      style={{
                        padding: "0.4em 2em",
                        fontWeight: "600",
                        borderRadius: "6px",
                        marginLeft: "2.3em",
                      }}
                    >
                      <option value="30" className="duration">
                        30 min
                      </option>
                      <option value="60" className="duration">
                        60 min
                      </option>
                      <option value="90" className="duration">
                        90 min
                      </option>
                    </select>
                  </div>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    margin: "4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography style={{ fontSize: "x-large" }}>
                    Price:{" "}
                  </Typography>
                  <input
                    type="text"
                    style={{
                      background: "rgba(255, 255, 255, 0.5)",
                      fontWeight: "700",
                      padding: "0.5em 1em",
                      marginLeft: "0.9em",
                      outline: "none",
                      border: "1px solid rgba(0, 0, 0, 0.5)",
                    }}
                    placeholder="Price"
                  />
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    margin: "4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    style={{ fontSize: "x-large", marginLeft: "0.3em" }}
                  >
                    Subject:{" "}
                  </Typography>
                  <input
                    type="text"
                    style={{
                      background: "rgba(255, 255, 255, 0.5)",
                      width: "180px",
                      fontWeight: "700",
                      padding: "0.5em 1em",
                      marginLeft: "0.9em",
                      outline: "none",
                      border: "1px solid rgba(0, 0, 0, 0.5)",
                    }}
                    placeholder="Subject"
                  />
                </div>
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              className={aajao.component}
              style={{
                width: "48%",
                paddingTop: "120px",
                paddingBottom: "120px",
              }}
              justifyContent="center"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {/* <AddCircleOutlineRoundedIcon style={{fontSize:"xxx-large",color:"#56add8"}} onClick={SimpleMenu}/> */}
                <SimpleMenu props={[setWeek, setMonth, setYear]} />
              </div>
            </Grid>
          </Grid>
        </div>
      </Collapse>

      <div className="recentPostsDiv">
        <RecentPosts />
      </div>

      <div
        className="PostsDiv"
        style={{
          width: "120%",
          transform: "translate(-4.4em)",
          display: "none",
        }}
      >
        <Post />
        <Video />
        <Post />
        <Video />
      </div>
    </>
  );
}