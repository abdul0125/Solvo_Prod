import React,{useState} from "react";
import "../stylesheets/timetable.css";

// material UI components
import TimerIcon from '@material-ui/icons/Timer';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';


function TimeTable() {
  const [timer_icon, settimer_icon] = useState(<AddCircleIcon style={{fontSize:"3em",color:"512D6D",pointerEvents:"none"}}/>)



function render_timer(e){
  const target_div = e.target.parentElement.childNodes[1];
  target_div.classList.toggle('active');
  // const target_btn_icon = e.target.parentElement.childNodes[2].firstChild;
  // target_btn_icon.classList.toggle('active')
}


  const day = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  return (
    <div className="timeTableContainer">
       <h1>available sls</h1>
       {day.map((item)=>{
         return(
          <div className="container">
          <span className="first_span">{item}</span>
          <div>
            <span><input type="time" className="starting_time"  /></span>
            <span><input type="time" className="ending_time"  /></span>
          </div>
          <button className="timer_toggler active" onClick={(e)=>{render_timer(e)}}>
          <AddCircleIcon style={{fontSize:"3em",color:"512D6D",pointerEvents:"none"}}/>
          </button>
    </div>
         )
       })}
    </div>
  );
}

export default TimeTable;
