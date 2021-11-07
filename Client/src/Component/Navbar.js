//Assigned to parvez mir.
//Routing feature added
import { Link, useHistory, useLocation } from "react-router-dom";
// this navbar component contains navabar,search results and filters completely.

import React, { useState } from "react";
import "../stylesheets/navbar.css";
import filter from "../media/filter.png";
import logo from "../media/logo-2.png";
// import smallLogo from "../media/SolvokitIcon.png";

//data imports
import { languages, subjects } from "../data/subjects";
// component imports
import TopicSearch from "./TopicSearch";
import DropDown from "./DropDown";
import { useSelector } from "react-redux";
// material UI imports
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import LockIcon from "@material-ui/icons/Lock";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import Rating from "@material-ui/lab/Rating";
import Slider from "@material-ui/core/Slider";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import DuoIcon from "@material-ui/icons/Duo";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { Button, Typography, Box } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Search_user } from "../actions/auth";
import { getData } from "../actions/auth";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
const Navbar = (props) => {
  const dispatch = useDispatch()
  const [ratingValue, setRatingValue] = useState(0);
  const [rate, setRate] = useState([0, 100]);
  const [language, setLanguage] = useState("english");
  const [subject, setSubject] = useState("any");
  const [open, setOpen] = React.useState(false);
  const [onClose, setonClose] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let teacher_data = useSelector((state)=>{
    return state.Search})
  // search functionality start
  const [data, setData] = useState(teacher_data); //current data that is being shown in search result.
  useEffect(()=>setData(teacher_data),[teacher_data])
  // search functionality start
  const [smallScreen, setSmallScreen] = React.useState(true);

  React.useEffect(() => {
    // Update the document title using the browser API
    const nav_links = document.querySelectorAll('.element>a');
     [...nav_links].map((item)=>{
          item.addEventListener('click',function(){
            document.querySelector('.search_result').classList.remove('active');
          })
      })
      
  });

  // document.querySelector('.navbar').addEventListener('click',function(){
    
  //   document.querySelector(".search_result").classList.remove('active')

  // })

  const navbar_toggle = () => {
    const element_list = document.querySelector(".left_section");
    element_list.classList.toggle("active");
  };

  // setting current active link in navbar
  function set_active_nav_link(e) {
    const nav_links = document.querySelectorAll(".element>a");
    [...nav_links].map((item) => {
      item.classList.remove("active");
      e.target.classList.add("active");
    });
  }

  const handleChange = (event, newValue) => {
    //htmlFor price slider
    setRate(newValue);
  };

  const search = (e) => {
    let searched_data = teacher_data.filter((item) =>
      item.teacher_name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(searched_data);
  };
// console.log(teacher_data)
  // search functionality END

  // search results open and close implementation
  let result =localStorage.getItem("token");


  const toggle_search_result = (id) => {
    const search_result = document.querySelector(".search_result");
    search_result.classList.add("active");
    result=jwt_decode(result)
    console.log(result)
    dispatch(getData(result.id))
  };

  // search results open and close implementation END

  // handling people btn in search results
  const handlePeaopleBtn = () => {
  };


  const filtering_data = (e) => {
    e.preventDefault();

    const experience = document.querySelector(
      'input[name="experience"]:checked'
    );

    const language = document.querySelector('input[name="languages"]:checked');
    console.log(language)

    // let languages = document.querySelectorAll('.languages');
    // [...languages].forEach((item)=>{
    //    if(item.selected){
    //      setLanguage(item.value)
    //    }
    // })

    let subject = document.querySelector("#combo-box-demo").value;
    console.log(subject)
    let object = {
      experience: experience.value,
      rating: ratingValue,
      min_rate: rate[0],
      max_rate: rate[1],
      language: language.value,
      subject: subject,
    };
    console.log(object.language,object.subject,"called");
    if (object.language !== "any" && object.subject !== "") {
      let searched_data = teacher_data.filter(
        (item) =>
          item.experience >= object.experience && //filtering experience
          //filtering minimum rate per hour
          item.rate <= object.max_rate && //filtering maximum rate per hour
          item.language.includes(object.language) && //filtering language
          item.subjects.includes(object.subject)
      );
      console.log(object.language,"called");
      setData(searched_data);
    } else if (object.language === "any" && object.subject !== "") {
      let searched_data = teacher_data.filter(
        (item) =>
        item.experience >= object.experience && //filtering experience
        //filtering minimum rate per hour
          item.rate <= object.max_rate && //filtering maximum rate per hour
          (item.subjects.filter((subject)=>{console.log(subject,object.subject) 
            return subject[0]===object.subject}).length)?true:false
      );
      console.log(object,teacher_data,"called");
      setData(searched_data);
    } else if (object.subject === "" && object.language !== "any") {
      let searched_data = teacher_data.filter(
        (item) =>
        {console.log(item,object)
          return( item.experience >= object.experience && //filtering experience
            item.rating >= object.rating && // filtering ratings
            item.language.includes(object.language) )}//filtering language
            );
            console.log(object,teacher_data,"called");
            setData(searched_data);
          } else if (object.subject === "" && object.language === "any") {
            let searched_data = teacher_data.filter(
              (item) =>
              item.experience >= object.experience && //filtering experience
              //filtering minimum rate per hour
              item.rate <= object.max_rate //filtering maximum rate per hour
              );
              
              setData(searched_data);
    }
    handleClose();
    //close filter window after Apply
  };
  // filter selection window ENDS
  const location = useLocation();
  
  return (
    <>
      <div className="navbar">
        <img  style={{ width: "200px" }} className="solvokit_logo" />
        <img
          
          style={{ width: "50px" }}
          className="solvokit_logo active"
        />

        <ul className="left_section left_section_alignment">
          <div>
            <MenuIcon className="hamburger" onClick={navbar_toggle} />
          </div>
          <div>
            <CloseIcon className="close_icon" onClick={navbar_toggle} />
          </div>
          <li className="element">
            <Box
              component={Link}
              to="/post"
              onClick={(e) => {
                set_active_nav_link(e);
              }}
            >
              <LiveHelpIcon
                className="navbar_icons"
                style={{ pointerEvents: "none" }}
              />
              <span style={{ fontSize: "0.8em", pointerEvents: "none" }}>
                ask
              </span>
            </Box>
          </li>
          <li className="element">
            <Box
              component={Link}
              to="/discussion"
              onClick={(e) => {
                set_active_nav_link(e);
              }}
            >
              <LockIcon
                className="navbar_icons"
                style={{ pointerEvents: "none" }}
              />
              <span style={{ fontSize: "0.6em", pointerEvents: "none" }}>
                ask experts
              </span>
            </Box>
          </li>

          <li className="element">
            <Box
              component={Link}
              to="/video"
              onClick={(e) => {
                set_active_nav_link(e);
              }}
            >
              <VideoCallIcon
                className="navbar_icons"
                style={{ pointerEvents: "none" }}
              />
              <span style={{ fontSize: "0.8em", pointerEvents: "none" }}>
                Lectures{" "}
              </span>
            </Box>
          </li>
          <li className="element">
            <Box
              component={Link}
              to={location.pathname}
              onClick={(e) => {
                props.favToggler();
                set_active_nav_link(e);
              }}
            >
              {" "}
              {/*this function calls 2 fucntions*/}
              <FavoriteBorderIcon
                className="navbar_icons"
                style={{ pointerEvents: "none" }}
              />
              <span style={{ fontSize: "0.8em", pointerEvents: "none" }}>
                Favourites
              </span>
            </Box>
          </li>
          <div className="moreIcons">
            <MoreHorizIcon
              onClick={() =>
                document
                  .querySelector(".right_sec_icons")
                  .classList.toggle("active")
              }
            />
          </div>
        </ul>

        <div className="right_section">
          <div className="right_sec_icons">
            <ul className="left_section">
              <li className="element">
                <Box
                  component={Link}
                  to={location.pathname}
                  onClick={(e) => {
                    props.messageToggler();
                    set_active_nav_link(e);
                  }}
                >
                  <ChatIcon
                    className="navbar_icons"
                    style={{ pointerEvents: "none" }}
                  />
                </Box>
              </li>
              <li className="element">
                <Box
                  component={Link}
                  to="/profile"
                  onClick={(e) => {
                    set_active_nav_link(e);
                  }}
                >
                  <AssignmentIndIcon
                    className="navbar_icons"
                    style={{ pointerEvents: "none" }}
                  />
                </Box>
              </li>
              <li className="element">
                <Box
                  component={Link}
                  to={location.pathname}
                  onClick={(e) => {
                    props.notificationToggler();
                    set_active_nav_link(e);
                  }}
                >
                  <NotificationsActiveIcon
                    className="navbar_icons"
                    style={{ pointerEvents: "none" }}
                  />
                </Box>
              </li>

              <li></li>
            </ul>
          </div>

          <div className="search_bar_container">
            <input
              type="text"
              className="search_input"
              onChange={search}
              onClick={toggle_search_result}
              placeholder="search here"
            />
            <SearchIcon className="search_icon" />
            <div className="search_result">
              <div className="filters_section">
                <div className="icons_around_filter_btn_container">
                  <PeopleAltIcon
                    className="icons_around_filter_btn"
                    onClick={handlePeaopleBtn}
                  />
                  <p>people</p>
                </div>

                <div className="icons_around_filter_btn_container">
                  <RssFeedIcon className="icons_around_filter_btn" />
                  <p>posts</p>
                </div>

                <div className="icons_around_filter_btn_container">
                  <DuoIcon className="icons_around_filter_btn" />
                  <p>video</p>
                </div>

                <div className="icons_around_filter_btn_container">
                  <LocalLibraryIcon className="icons_around_filter_btn" />
                  <p>Tutor</p>
                </div>

                {/* <div
                  className="filters_btn  icons_around_filter_btn_container"
                  onClick={choosing_filter}
                >
                  <img src={filter} alt="" />
                </div> */}
               <div
                  className="filters_btn  icons_around_filter_btn_container"
                  onClick={handleClickOpen}
                >
                  <img src={filter} alt="" />
                </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          id="filter_dialog"
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
              Select Filters and Hit Apply
            </h1>
          
          <DialogContent style={{ padding: "1em" }}>
            
            {/* pop up htmlFor search filters  */}
        <div className="select_filters_container">
          <form className="select_filter" onSubmit={filtering_data}>
            {/* subjects fliter starts here */}
            <h1 className="filter_title">subject/skills</h1>
            <Autocomplete
              id="combo-box-demo"
              options={subjects}
              renderInput={(subjects) => (
                <TextField
                  id="filter_text"
                  style={{
                    marginBottom: "1em",
                    width: "59%",
                    marginLeft: "2.3em",
                  }}
                  {...subjects}
                  label="Subject or Skills"
                />
              )}
            />

            {/* subject filter ENDS */}
            {/* experience filter STARTS */}
            <h1 className="filter_title">minimum experience</h1>
            <div className="filters minimum_experience_container">
              <div className="option">
                <input
                  type="radio"
                  className="radio_in_filter"
                  id="exp0"
                  name="experience"
                  value="0"
                  defaultChecked
                />
                 
                <label
                  className="lables_in_filter active"
                  htmlFor="exp0"
                  style={{ padding: "0.4em 1.45em" }}
                >
                  Any
                </label>
              </div>

              <div className="option">
                <input
                  type="radio"
                  className="radio_in_filter"
                  id="exp1"
                  name="experience"
                  value="1"
                />
                 
                <label className="lables_in_filter active" htmlFor="exp1">
                  1 year
                </label>
              </div>

              <div className="option">
                <input
                  type="radio"
                  className="radio_in_filter"
                  id="exp2"
                  name="experience"
                  value="2"
                  
                />
                 
                <label className="lables_in_filter active" htmlFor="exp2">
                  2 year
                </label>
              </div>

              <div className="option">
                <input
                  type="radio"
                  className="radio_in_filter"
                  id="exp3"
                  name="experience"
                  value="3"
                  
                />
                 
                <label className="lables_in_filter active" htmlFor="exp3">
                  3 year
                </label>
              </div>

              <div className="option">
                <input
                  type="radio"
                  className="radio_in_filter"
                  id="exp4"
                  name="experience"
                  value="4"
                  
                />
                 
                <label className="lables_in_filter active" htmlFor="exp4">
                  4 year
                </label>
              </div>

              <div className="option">
                <input
                  type="radio"
                  className="radio_in_filter"
                  id="exp5"
                  name="experience"
                  value="5"
                  
                />
                 
                <label className="lables_in_filter active" htmlFor="exp5">
                  5 year
                </label>
              </div>
            </div>

            {/* experience filter ENDS */}

            {/* rating filter STARTS */}
            <h1 className="filter_title">minimum Rating</h1>
            <div className="filters">
              <Rating
                defaultValue={0}
                size="large"
                style={{width:"60%",justifyContent:"space-between"}}
                onChange={(e) => {
                  setRatingValue(e.target.value);
                }}
              />
            </div>
            {/* rating filter ENDS */}

            {/* rate filter START */}
            <h1 className="filter_title">Rate per hour</h1>

            <div className="filters rate_per_hour">
              <Slider
                className="rate_slider"
                value={rate}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                style={{    margin: 0,
                  transform: "translateX(-28px)"}}
              />

              <div className="price_display" style={{
                  transform: "translateX(-27px)"}}>
                <p >
                  {rate[0]}$ - {rate[1]}$
                </p>
              </div>
            </div>
            {/* rate filter ENDS */}

            {/* language filter START */}

            <h1 className="filter_title">Language</h1>
            <div className="filters minimum_experience_container">
              <div className="option">
                <input
                  type="radio"
                  className="radio_in_filter"
                  id="lang0"
                  name="languages"
                  value="any"
                  defaultChecked
                />
                 
                <label
                  className="lables_in_filter active"
                  htmlFor="lang0"
                  style={{ padding: "0.4em 1.45em" }}
                >
                  Any
                </label>
              </div>

              <div className="option">
                <input
                  type="radio"
                  className="radio_in_filter"
                  id="lang1"
                  name="languages"
                  value="arabic"
                />
                 
                <label
                  className="lables_in_filter active"
                  htmlFor="lang1"
                  style={{ padding: "0.4em 1.45em" }}
                >
                  Arabic
                </label>
              </div>

              <div className="option">
                <input
                  type="radio"
                  className="radio_in_filter"
                  id="lang2"
                  name="languages"
                  value="urdu"
                />
                 
                <label
                  className="lables_in_filter active"
                  htmlFor="lang2"
                  style={{ padding: "0.4em 1.45em" }}
                >
                  Urdu
                </label>
              </div>

              <div className="option">
                <input
                  type="radio"
                  className="radio_in_filter"
                  id="lang3"
                  name="languages"
                  value="English"
                />
                 
                <label
                  className="lables_in_filter active"
                  htmlFor="lang3"
                  style={{ padding: "0.4em 1.45em" }}
                >
                  English
                </label>
              </div>

              <div className="option">
                <input
                  type="radio"
                  className="radio_in_filter"
                  id="lang4"
                  name="languages"
                  value="hindi"
                />
                 
                <label
                  className="lables_in_filter active"
                  htmlFor="lang4"
                  style={{ padding: "0.4em 1.45em" }}
                >
                  Hindi
                </label>
              </div>
            </div>
            {/* language filter ENDS */}

            <input type="submit" value="apply" className="submit_btn" />
          </form>
        </div>
          </DialogContent>
        </Dialog>

                <div className="close_search" onClick={()=>document.querySelector('.search_result').classList.remove('active')}>
                  <CloseIcon className="close_icon_in_search_section" />
                </div>
              </div>
              <hr />

              {data.map((item, key) => {
                return (
                  <Link to="/search" onClick={()=>{
                    document.querySelector('.search_result').classList.remove('active');
                    dispatch(Search_user(item.email))}}>
                  <div className="profile" key={key}>
                    <div className="img_box"></div>
                    <div className="text">
                      <span className="name">{item.teacher_name}</span>

                      <span className="experience">
                        {item.experience} years experience
                      </span>
                    </div>

                    <div className="rating">{item.rating} star</div>
                  </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <DropDown style={{ zIndex: 112 }} />
        </div>

        

      </div>
    </>
  );
};

export default Navbar;
