import React from "react";


import { makeStyles } from "@material-ui/core";
import CustomizedInputBase from "./Search";
import { Typography } from "@material-ui/core";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import MenuListComposition from "./simple Menu";
import PublishTwoToneIcon from "@material-ui/icons/PublishTwoTone";
import { ListItem } from "@material-ui/core";
// import { IconButton } from "@material-ui/core";
import { Box } from "@material-ui/core";
// import SearchField from "react-search-field";

import { useState } from "react";
import List from "@material-ui/core/List";
import { Link } from "@material-ui/core";
import {uploadNotes,} from '../../actions/Notes'
import {useDispatch,useSelector} from 'react-redux';
import './resource.css';
import axios from "axios";
import {saveAs} from 'file-saver';

const useStyles = makeStyles((theme) => ({
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
    marginTop: "1.1  em",
  },
  box6Style: {
    display: "block",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginBottom: "10px",
  },
  box3Style: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
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
    color: "white",
    display: "inline-block",
    textTransform: "capitalize",
    fontSize: "1.1em",
    padding: "0.3em 0.7em",
    background: "rgba(37, 69, 69, 0.5)",
    outline: "none",
    border: "1px solid rgba(52, 52, 52, 0.45)",
    transition: "0.2s ease",
    cursor: "pointer",

    "&:hover": {
      background: "rgba(37, 69, 69, 1)",
      color: "white",
    },
  },

  btns: {
    color: "white",
    display: "inline-block",
    textTransform: "capitalize",
    fontSize: "1.1em",
    padding: "0.3em 0.9em",
 
    background: "rgba(37, 69, 69, 0.5)",
    outline: "none",
    border: "1px solid rgba(52, 52, 52, 0.45)",
    transition: "0.2s ease",
    cursor: "pointer",

    "&:hover": {
      background: "rgba(37, 69, 69, 1)",
      color: "white",
    },
  },

  summaryStyle: {
    padding: "10px",
    fontFamily: "Trebuchet MS",
  },
  progress: {
    padding: "10px",
  },
  liveclasses: {
    display: "inline",
    margin: "5px",
  },
  create: {
    fontSize: "20px",
    borderRadius: "50px",
    margin: "15px",
    display: "inline",
    padding: "5px 10px 5px 10px",
    marginRight: "50px",
    marginLeft: "30px",
    backgroundColor: "#2f4f4f",
    color: "#ffffff",
  },
  join: {
    fontSize: "20px",
    borderRadius: "50px",
    margin: "10px",
    display: "inline",
    padding: "5px 15px 5px 15px",
    marginLeft: "5px",
    backgroundColor: "#ffffff",
    color: "#350d7a",
  },
  createcontent: {
    display: "block",
    alignContent: "center",
    alignItems: "center",
    border: "1px solid rgba( 255, 255, 255, 0.2 )",
    backgroundColor: "#f5a6e8",
    margin: "10px",
    borderRadius: "10%",
    paddingTop: "15px",
    paddingBottom: "15px",
    height: "auto",
    marginBottom: "20px",
  },
  CourseCode: {
    fontSize: "20px",
    borderRadius: "50px",
    // margin: "15px",
    padding: "5px 10px 5px 10px",
    marginLeft: "25%",
    // marginRight: "10px",
    // marginLeft: "30px",
    backgroundColor: "#ffffff",
    display: "block",
    color: "#000000",
    border: "none",
  },
  Start: {
    fontSize: "20px",
    borderRadius: "50px",
    marginLeft: "35%",
    marginTop: "15px",
    // margin: "10px",
    // display: "inline",
    padding: "5px 15px 5px 15px",
    // marginLeft: "5px",
    backgroundColor: "#2f4f4f",
    display: "block",
    color: "#ffffff",
  },
  joincontent: {
    display: "block",
    alignContent: "center",
    alignItems: "center",
    border: "5px",
    backgroundColor: "#f5a6e8",
    margin: "10px",
    borderRadius: "10%",
    paddingTop: "15px",
    paddingBottom: "15px",
    height: "auto",
    marginBottom: "20px",
  },
  search: {
    marginLeft: "15px",
  },
  recent: {
    display: "block",
    backgroundColor: "#9990f0",
    color: "white",
    borderEndStartRadius: "25%",
    borderStartEndRadius: "25%",
    margin: "7px 25px 7px 20px",

    fontSize: "17px",
    textAlign: "center",
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
    backgroundColor: "rgba(53, 179, 127, 0.98)",
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

const style = makeStyles(() => ({
  root: {
    boxShadow: " 0px 0px 10px rgba(0, 0, 0, 0.300)",
    minHeight: "75vh",
    width: "80%",
    marginTop: "0.7em",
    transform: "translateX(22%)",
    borderRadius: "7px",
    background: "rgba( 86, 84, 84, 0.40 )",
    backdropFilter: "blur(3.5px)",
  },

  CourseCode: {
    fontSize: "20px",
    borderRadius: "50px",
    // margin: "15px",
    padding: "5px 10px 5px 10px",
    marginLeft: "25%",
    // marginRight: "10px",
    // marginLeft: "30px",
    backgroundColor: "#ffffff",
    display: "block",
    color: "#000000",
    border: "none",
  },

  scheduleItem: {
    marginBottom: "8px",
    paddingBottom: "15px",
    borderRadius: "5%",
    backgroundColor: "rgba(53, 179, 127, 0.98)",
    display: "block",
    margin: "5px",
    paddingTop: "10px",
    color: "white",
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
  
}));
export default function Resource() {
  const styling = style();
  const dispatch = useDispatch();
  const [disp, setDisp] = useState(false);
  const [disp1, setDisp1] = useState(false);
  const classes = useStyles();
  var today = new Date();
  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes() + " PM";
   // for onchange event
   const [pdfFile, setPdfFile]=useState({name:'', selectedFile:''});
   const [pdfFileError, setPdfFileError]=useState('');
   const user = JSON.parse(localStorage.getItem('profile'));
   // onchange event
   const fileType=['application/pdf'];
   const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

   const downloadPdf = ()=>{
      API.get('http://localhost:5000/notes/fetch',{responseType:'blob'})
     .then((res)=>{
       console.log('data',res);
       const pdfBlob = new Blob([res.data], {type:'application/pdf'});
       console.log('data',pdfBlob);
       saveAs(pdfBlob,'newPdf.pdf');
     })
   }

   const handlePdfFileChange=(e)=>{
     let selectFile=e.target.files[0];
     if(selectFile){
       if(selectFile&&fileType.includes(selectFile.type)){
         let reader = new FileReader();
             reader.readAsDataURL(selectFile);
             reader.onloadend = (e) =>{
               setPdfFile({...pdfFile, selectedFile:e.target.result});
               setPdfFileError('');
             }
       }
       else{
         setPdfFile(null);
         setPdfFileError('Please select valid pdf file');
       }
     }
     else{
       console.log('select your file');
     }
   }
   const clear = (e)=>{
    
    setPdfFile({name:'', selectedFile:''});
    
  };
   // form submit
   const handleChange=(e)=>{
    e.preventDefault();
   if(pdfFile.name!==null && pdfFile.selectedFile!== null)
   {
    dispatch(uploadNotes(pdfFile))
    console.log(" selected file", pdfFile);
   }else{
    console.log(" please select file");
   }
    
   clear();
  
  }

  return (
    <div className={styling.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#2f4f4f", marginBottom: "0.6em" }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6">Share Notes</Typography>
        </Toolbar>
      </AppBar>
      <MenuListComposition />
      <CustomizedInputBase />
      <div style={{ height: "36vh" }}>
        <Button onClick={downloadPdf}>Download Pdf</Button>

      </div>
      <div
        style={{
          position: "relative",
          bottom: "0",
          width: "100%",
          background: "rgba(53, 179, 127, 0.98)",
          marginBottom: "1em",
        }}
      >

        
        <ListItem
          
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >

          <form autoComplete='off' noValidate onSubmit={handleChange}>

         <input type="text" value={pdfFile.name}
          required onChange={(e) =>setPdfFile({...pdfFile, name:e.target.value})}
       placeholder="Name of PDF File" />
        <br></br>
        <input type="file" 
          required onChange={handlePdfFileChange}
        />
        <div className='error-msg'>{}</div>
        <br></br>
        
      
         
        
           
          
           <Button type="submit" 
        variant="contained"
        color="primary"
        
        
      >
        
          UPLOAD PDF
        </Button>   
         
          </form>
         
          
        </ListItem>
        
      </div>
      <hr style={{ background: "white",marginBottom:"1.1em"}} />

      <Box className={classes.box5Style}  border={2} borderColor="#4290f5">
        <Box className={classes.box3Style}>
          <button
            onClick={() => setDisp1(true)}
            className={classes.btns}
          >
            {" "}
            Schedule{" "}
          </button>
        </Box>

        <Box
          className={classes.scheduleContent}
          style={{ display: !disp1 ? "none" : "block" }}
        >
          <div className={classes.scheduleItem}>
            <span className={classes.teacherName}>Prof. XYZ </span>
            <div className={classes.coursecode}>CourseCode</div>
            <div className={classes.duration}>Dur: 1 hr</div>
            <div className={classes.dates}>
              <div className={classes.dat}>
                <span style={{ fontWeight: "600" }}>On</span> {date}
              </div>
              <div className={classes.tim}>
                <span style={{ fontWeight: "600" }}>At</span> {time}
              </div>
            </div>
          </div>

          <div className={classes.scheduleItem}>
            <span className={classes.teacherName}>Prof. XYZ </span>
            <div className={classes.coursecode}>CourseCode</div>
            <div className={classes.duration}>Dur: 1 hr</div>
            <div className={classes.dates}>
              <div className={classes.dat}>
                <span style={{ fontWeight: "600" }}>On</span> {date}
              </div>
              <div className={classes.tim}>
                <span style={{ fontWeight: "600" }}>At</span> {time}
              </div>
            </div>
          </div>
        </Box>

        <Box
          className={classes.box3Style}
          
        >
          <a
            href="https://www.google.com"
            className={classes.TrendingItemsStyle}
          >
            {" "}
            BookMark{" "}
          </a>
        </Box>
        <Box
          className={classes.box3Style}
        >
          <button
            onClick={() => setDisp1(false)}
            className={classes.btns}
            style={{padding:"0.4em 1em"}}
          >
            {" "}
            Trending{" "}
          </button>
        </Box>
        <div
          className={classes.TrendingItems}
          style={{ display: disp1 ? "none" : "block"}}
        >
          <List style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"-1em"}}>
            <ListItem button style={{ width: "max-content" }}>
              {" "}
              <Link
                href="https://www.google.com"
                style={{textDecoration:"none"}}
              >
                {" "}
                #JEEMains2021{" "}
              </Link>
            </ListItem>
            <ListItem button style={{ width: "max-content" }}>
              {" "}
              <Link
                href="https://www.google.com"
                style={{textDecoration:"none"}}
              >
                {" "}
                #JEEAdvanced2021
              </Link>{" "}
            </ListItem>
            <ListItem button style={{ width: "max-content" }}>
              {" "}
              <Link
                href="https://www.google.com"
                style={{textDecoration:"none"}}
              >
                {" "}
                #NEET2021
              </Link>{" "}
            </ListItem>
            <ListItem button style={{ width: "max-content" }}>
              <Link
                href="https://www.google.com"
                style={{textDecoration:"none"}}
              >
                {" "}
                #GATE2022{" "}
              </Link>
            </ListItem>
          </List>
        </div>
      </Box>
    </div>
  );
}
