import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Slider from "@material-ui/core/Slider";
import { edituser } from "../actions/auth";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import "../stylesheets/DialogBox.css";
import { useHistory } from "react-router";

import filter from "../media/filter.png";
import { useDispatch, useSelector } from "react-redux";
import { LinearProgress } from "@material-ui/core";
import { getCommunities } from "../actions/Communities";

export default function FormDialog(props) {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.authReducer);
  const [open, setOpen] = React.useState(false);
  const [rate, setRate] = useState([0, 100]);
  const [qualifications, setqualifications] = React.useState();
  const [known_languages, setlanguage] = useState();
  const [thrust_area, setArea] = useState();
  const [interest, setInterest] = useState();
  const [rates, setRates] = useState();
  const [question_answered, setQuestions] = useState();
  const [taught_hours, setHours] = useState();
  const [learning_skills, setSkills] = useState();
  const [mobile, setMobile] = useState();
  const [name, setName] = useState();
  const [experience, setExp] = useState();
  const [experties, setExperties] = React.useState([
    "Python",
    "machine learning",
  ]);
  const options = ["python", "love_react", "npm_i_humanity", "let us code"];

  useEffect(() => {
    if (form?.qualifications) {
      setqualifications(form.qualifications);
      setInterest(form.interest);
      setSkills(form.learning_skills);
      setlanguage(form.known_languages);
      setQuestions(form.question_answered);
      setArea(form.thrust_area);
      setRates(form.rates);
      setHours(form.taught_hours);
      setExp(form.experience);
      setName(form.name);
      setMobile(form.mobile);
    }
  }, [form]);

  useEffect(() => {
    dispatch(getCommunities());
  }, []);
  const { communities, isLoading } = useSelector((state) => state.Communities);

  // let commDisplay=[];
  // for(let i=0; i<=option.length-1; i++) {
  //   commDisplay[i] = communities.communities.filter((p)=>
  //   p.name===option[i]);
  // }

  //  console.log('usselec',communities,'comdis',commDisplay,'opt',option);

  const [addExpOpen, setaddExpOpen] = React.useState(false);

  // for terms_and_conditions
  const [scroll] = React.useState("paper");
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [form]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseLogout = () => {
    localStorage.clear();
    window.location.href = "/";
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    console.log("reacvhed");
    let element = event.target.parentElement.parentElement.innerText;
    element = element.split("\n");

    setSkills(
      learning_skills.map((item) => {
        if (item[0].toLowerCase() == element[0].toLowerCase()) {
          item[1] = newValue;
        }
        return item;
      })
    );

    console.log(learning_skills);
  };

  const handleQualifications = () => {
    let data_to_add = prompt("Enter the Qualifications you want to add.");
    console.log(data_to_add);

    if (data_to_add != null && data_to_add != "") {
      setqualifications((qualifications) => [...qualifications, data_to_add]);
    } else {
      alert("You need to enter something!");
    }
  };

  const handleInterests = () => {
    let data_to_add = prompt("Enter the Interests you want to add.");

    if (data_to_add != null && data_to_add != "") {
      setInterest((interest) => [...interest, data_to_add]);
    } else {
      alert("You need to enter something!");
    }
  };
  const handleSkills = () => {
    let data_to_add = prompt("Enter the Skill you want to add.");
    console.log(data_to_add);

    if (data_to_add != null && data_to_add != "") {
      setSkills((learning_skills) => [
        ...learning_skills,
        [data_to_add, "70%"],
      ]);
    } else {
      alert("You need to enter something!");
    }
  };
  const handleLanguages = () => {
    let data_to_add = prompt("Enter the Language you want to add.");
    console.log(data_to_add);

    if (data_to_add != null && data_to_add != "") {
      setlanguage((known_languages) => [...known_languages, data_to_add]);
    } else {
      alert("You need to enter something!");
    }
  };

  const handleArea = () => {
    let data_to_add = prompt("Enter the Expertise Area you want to add.");
    console.log(data_to_add);

    if (data_to_add != null && data_to_add != "") {
      setArea((thrust_area) => [...thrust_area, data_to_add]);
    } else {
      alert("You need to enter something!");
    }
  };
  // const  handleRates=(e)=>{
  //    setRates{(rates:  e.target.value})
  // }
  //   const  handleLanguages=()=>{
  //   let data_to_add = prompt("Enter the Language you want to add.");
  //   console.log(data_to_add);

  //   if(data_to_add != null && data_to_add != ""){
  //     setSkills((known_languages) => [...known_languages, data_to_add]);

  //   }
  //   else{
  //     alert("You need to enter something!")
  //   }

  // }
  function handleCloseClick(e) {
    const element = e.target.parentElement.parentElement.innerText;
    console.log(element);

    setqualifications(
      qualifications.filter(
        (item) => item.toLowerCase() !== element.toLowerCase()
      )
    );
  }

  function handleCloseInterest(e) {
    const element = e.target.parentElement.parentElement.innerText;
    console.log(element);

    setInterest(
      interest.filter((item) => item.toLowerCase() !== element.toLowerCase())
    );
  }

  function handleCloseSkills(e) {
    let element = e.target.parentElement.parentElement.innerText;
    element = element.split("\n");
    // console.log({element});

    setSkills(
      learning_skills.filter(
        (item) => item[0].toLowerCase() !== element[0].toLowerCase()
      )
    );
    // console.log(learning_skills)
  }

  function handleCloseArea(e) {
    const element = e.target.parentElement.parentElement.innerText;
    console.log(element);

    setArea(
      thrust_area.filter((item) => item.toLowerCase() !== element.toLowerCase())
    );
  }

  function handleCloseLanguages(e) {
    const element = e.target.parentElement.parentElement.innerText;
    console.log(element);

    setlanguage(
      known_languages.filter(
        (item) => item.toLowerCase() !== element.toLowerCase()
      )
    );
  }

  function handleSubmit(e) {
    console.log("handled");
    dispatch(
      edituser(
        form._id,
        name,
        mobile,
        qualifications,
        learning_skills,
        thrust_area,
        interest,
        known_languages,
        question_answered,
        taught_hours,
        experience,
        rates
      )
    );
    setOpen(false);
  }

  let component;

  if (props.title == "edit_profile") {
    component = (
      <>
        <EditIcon onClick={handleClickOpen} style={{ color: "white" }} />
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          style={{ marginTop: "2em" }}
        >
          <div
            style={{
              minWidth: "400px",
              position: "relative",
              overflowX: "hidden",
            }}
            className="edit_profile_container"
          >
            <h1
              style={{
                textTransform: "uppercase",
                color: "white",
                background: "#2f4f4f",
                padding: "0.3em 1em",
                textAlign: "center",
              }}
            >
              Edit Profile
            </h1>

            <div className="main_content" style={{ overflowY: "scroll" }}>
              <div
                className="profile_pic"
                style={{ position: "relative", marginBottom: "1em" }}
              >
                <span>
                  <EditIcon
                    style={{
                      position: "absolute",
                      bottom: "0.6em",
                      right: "3",
                      color: "white",
                      background: "#2f4f4f",
                      borderRadius: "50%",
                      padding: "0.2em",
                      pointerEvents: "none",
                      zIndex: 2,
                    }}
                  />
                </span>
                <div className="img_box">
                  <img src="https://image.shutterstock.com/image-photo/picture-cheerful-businessman-sitting-office-260nw-568326445.jpg" />
                </div>
              </div>

              <TextField
                className="username"
                label="Name"
                variant="filled"
                defaultValue={form.name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                className="username"
                label="Mobile"
                variant="filled"
                defaultValue={form.mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <TextField
                className="username"
                label="Rates"
                variant="filled"
                defaultValue={form.rates}
                onChange={(e) => setRates(e.target.value)}
              />

              <div
                className="qualifications_edit"
                style={{ padding: "1em", paddingRight: "0" }}
              >
                <h3 style={{ color: "#2f4f4f" }}>Edit Qualifications</h3>
                <List>
                  {qualifications ? (
                    qualifications.map((qualification) => (
                      <ListItem
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                          textTransform: "capitalize",
                          padding: "0 16px",
                        }}
                      >
                        <div style={{ fontFamily: "arial" }}>
                          {qualification}
                        </div>
                        <IconButton onClick={(e) => handleCloseClick(e)}>
                          <CloseIcon style={{ pointerEvents: "none" }} />
                        </IconButton>
                      </ListItem>
                    ))
                  ) : (
                    <div>Loading Data</div>
                  )}

                  <ListItem
                    autoFocus
                    button
                    onClick={() => handleQualifications()}
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <AddIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>Add Qualification</ListItemText>
                  </ListItem>
                </List>

                <hr style={{ background: "white" }} />

                <div className="interest_edit" style={{ marginTop: "1em " }}>
                  <h3 style={{ color: "#2f4f4f" }}>Edit Interests</h3>
                  <List>
                    {interest ? (
                      interest.map((inte) => (
                        <ListItem
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            textTransform: "capitalize",
                            padding: "0 16px",
                          }}
                        >
                          <div style={{ fontFamily: "arial" }}>{inte}</div>
                          <IconButton onClick={(e) => handleCloseInterest(e)}>
                            <CloseIcon style={{ pointerEvents: "none" }} />
                          </IconButton>
                        </ListItem>
                      ))
                    ) : (
                      <div></div>
                    )}

                    <ListItem
                      autoFocus
                      button
                      onClick={() => handleInterests()}
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <AddIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText>Add Interest</ListItemText>
                    </ListItem>
                  </List>
                </div>

                <hr style={{ background: "white" }} />

                <div className="skills_edit" style={{ marginTop: "1em " }}>
                  <h3 style={{ color: "#2f4f4f" }}>Edit Skills</h3>
                  <List>
                    {learning_skills ? (
                      learning_skills.map((skill) => (
                        <ListItem
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            textTransform: "capitalize",
                            padding: "0 16px",
                          }}
                        >
                          <div style={{ fontFamily: "arial", flex: "1" }}>
                            {skill[0]}
                          </div>
                          <Slider
                            className="rate_slider"
                            defaultValue={skill[1].split("%")[0]}
                            onChange={(e) => {
                              console.log("onchange", e.target.style.left);
                              return handleChange(e, e.target.style.left);
                            }}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                          />
                          <IconButton onClick={(e) => handleCloseSkills(e)}>
                            <CloseIcon style={{ pointerEvents: "none" }} />
                          </IconButton>
                        </ListItem>
                      ))
                    ) : (
                      <div></div>
                    )}

                    <ListItem autoFocus button onClick={() => handleSkills()}>
                      <ListItemAvatar>
                        <Avatar>
                          <AddIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText>Add Skill</ListItemText>
                    </ListItem>
                  </List>
                </div>

                <hr style={{ background: "white" }} />

                <div className="interest_edit" style={{ marginTop: "1em " }}>
                  <h3 style={{ color: "#2f4f4f" }}>Edit Experties</h3>
                  <List>
                    {thrust_area ? (
                      thrust_area.map((area) => (
                        <ListItem
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            textTransform: "capitalize",
                            padding: "0 16px",
                          }}
                        >
                          <div style={{ fontFamily: "arial" }}>{area}</div>
                          <IconButton onClick={(e) => handleCloseArea(e)}>
                            <CloseIcon style={{ pointerEvents: "none" }} />
                          </IconButton>
                        </ListItem>
                      ))
                    ) : (
                      <div></div>
                    )}

                    <ListItem autoFocus button onClick={() => handleArea()}>
                      <ListItemAvatar>
                        <Avatar>
                          <AddIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText>Add Expertise</ListItemText>
                    </ListItem>
                  </List>
                </div>

                <hr style={{ background: "white" }} />

                <div className="interest_edit" style={{ marginTop: "1em " }}>
                  <h3 style={{ color: "#2f4f4f" }}>Edit Languages</h3>
                  <List>
                    {known_languages ? (
                      known_languages.map((language) => (
                        <ListItem
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            textTransform: "capitalize",
                            padding: "0 16px",
                          }}
                        >
                          <div style={{ fontFamily: "arial" }}>{language}</div>
                          <IconButton onClick={(e) => handleCloseLanguages(e)}>
                            <CloseIcon style={{ pointerEvents: "none" }} />
                          </IconButton>
                        </ListItem>
                      ))
                    ) : (
                      <div></div>
                    )}

                    <ListItem
                      autoFocus
                      button
                      onClick={() => handleLanguages()}
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <AddIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText>Add Languages</ListItemText>
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>

            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSubmit} color="primary">
                Save Changes
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </>
    );
  } else if (props.title == "subscription") {
    component = (
      <>
        <Typography onClick={handleClickOpen} style={{ color: "black" }}>
          Subscription Plan
        </Typography>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" style={{ textAlign: "left" }}>
            Subscription Plan
          </DialogTitle>
          <DialogContent style={{ padding: "1em", width: "600px" }}>
            <div
              className="subscription_content1"
              style={{
                backgroundColor: "rgba(128, 128, 128, 0.226)",
                padding: "2em 1em",
                borderRadius: "7px",
                display: "flex",
              }}
            >
              <Avatar
                alt="Cindy Baker"
                src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
              />

              <div className="content" style={{ flex: 1, marginLeft: "1em" }}>
                <div
                  className="upper_content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3> We can write some text here.</h3>

                  <Autocomplete
                    id="disabled-options-demo"
                    options={communities}
                    getOptionDisabled={(option) =>
                      option === options[0] || option === options[2]
                    }
                    style={{ width: 300, marginBottom: "1em" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search Community"
                        name
                        variant="outlined"
                      />
                    )}
                  />

                  <div className="available_communities_container">
                    {isLoading ? (
                      <LinearProgress color="success" />
                    ) : (
                      communities.map((com) => (
                        <div className="profile" key={com._id}>
                          <div className="img_box"></div>
                          <div className="text">
                            <span className="name">{com.name}</span>

                            <span className="experience">
                              Members{com.members.length}
                            </span>
                          </div>

                          <div className="rating">Join +</div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  } else if (props.title == "logout") {
    component = (
      <>
        <Typography onClick={handleClickOpen} style={{ color: "black" }}>
          Logout
        </Typography>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
            style={{ minWidth: "300px" }}
          >
            Confirm Logout
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>Sorry to See you Go.</Typography>
            <Typography gutterBottom>Please Confirm Logout.</Typography>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={handleCloseLogout}
              style={{ color: "red" }}
            >
              Logout
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  } else if (props.title == "feedback") {
    component = (
      <>
        <Typography onClick={handleClickOpen} style={{ color: "black" }}>
          Feedback
        </Typography>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          style={{ marginTop: "2em" }}
        >
          <div
            style={{
              minWidth: "400px",
              position: "relative",
              overflowX: "hidden",
            }}
            className="edit_profile_container"
          >
            <h1
              style={{
                textTransform: "uppercase",
                color: "white",
                background: "#2f4f4f",
                padding: "0.3em 1em",
                textAlign: "center",
              }}
            >
              Feedback
            </h1>

            <div className="main_content" style={{ overflowY: "scroll" }}>
              <h3>Help Solvokit to improve,</h3>
              <h3 style={{ marginBottom: "1em" }}>We love to hear from you.</h3>

              <TextField
                className="name"
                label="Your Name"
                style={{ marginBottom: "1em", width: "90%" }}
              />
              <TextField
                className="email"
                label="Your Email"
                style={{ marginBottom: "2em", width: "90%" }}
              />

              <label htmlFor="textarea" className="label_for_text_area">
                Things You liked the most
              </label>
              <TextareaAutosize
                minRows={3}
                placeholder="Minimum 3 rows"
                style={{ width: "90%", padding: "1em", marginBottom: "1em" }}
              />

              <label htmlFor="textarea" className="label_for_text_area">
                Things You liked the least
              </label>
              <TextareaAutosize
                minRows={3}
                placeholder="Minimum 3 rows"
                style={{ width: "90%", padding: "1em", marginBottom: "1em" }}
              />

              <label htmlFor="textarea" className="label_for_text_area">
                Message
              </label>
              <TextareaAutosize
                minRows={3}
                placeholder="Minimum 3 rows"
                style={{ width: "90%", padding: "1em", marginBottom: "1em" }}
              />
            </div>
          </div>

          <DialogActions style={{ justifyContent: "center" }}>
            <Button
              onClick={handleClose}
              style={{
                width: "90%",
                background: "green",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

  return <div>{component}</div>;
}
