import React, { useState } from "react";
import "../../stylesheets/timetable.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// material UI components
import { book_time_table } from "../../actions/actions";
import {useDispatch} from 'react-redux'
import TimerIcon from "@material-ui/icons/Timer";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { update_time_table } from "../../actions/actions";
import { get_time_table } from "../../actions/actions";
import Days from "./days";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
function TimeTable(props) {
  
  const dispatch = useDispatch()
  const [slots, set] = useState(1);
  function render_timer(e, slots) {
    const target_div = e.target.parentElement.childNodes[slots];
    set(slots + 1);
    // console.log(e.target.parentElement.childNodes);
    target_div.classList.toggle("active");
    target_div.classList.toggle("active");
  }

  const table=useSelector((state)=>{return state.Searched.table?state.Searched.table.days:[]})
  const temail=useSelector((state)=>state.Searched.email?state.Searched.email:"")
  const semail = useSelector((state)=>state.authReducer?state.authReducer.email:"")
  const student =useSelector((state)=>state.authReducer.name)
  const day = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  // console.log(table)
  useEffect(()=>dispatch(get_time_table(props.id)),[dispatch])
  const update_time=()=>{
    console.log("clicked",props.id)
    let update_data=[]
    let data = document.getElementsByName("start_time")
    let durations = document.getElementsByName("durations")
    for (let index = 0; index < data.length; index++) {
        if(data[index].value!="")
        {
          
          update_data.push([data[index].value,data[index].id,durations[index].value])
          if (data[index].parentElement.parentElement.className==="active")
          {
            data[index].parentElement.parentElement.remove()
          }
        }
    }
    dispatch(update_time_table(props.id,update_data))
    console.log(update_data)
    // data=data.map((item)=>{
    //   count+=1;
    //   return {timing:item.value,day:item.id,duration:document.getElementsByName("duration")[count].value}
    // })
  }

  return (
    <div className="timeTableContainer" style={{display: props.props[0]?"block":"none", background: "white",overflowX:"scroll" }}>
      <h1 style={{marginBottom:"1em"}}>Available Slots</h1>
      {day.map((item) => {
        return (<>
        <div className="container1" style={{display:"flex",flexDirection:"column"}}>
            <span className="first_span" style={{marginBottom:"5px"}}>{item}</span>
            <Grid container direction="row">
            {
            table.map((items) =>items[1]===item?
              <Grid item xs={12}>
            <div style={{ position: "relative", margin: "2em" }} >
              <div></div>
                <label
                    style={{
                        position: "absolute",
                        fontWeight: "600",
                        top: "-1.5em",
                        left: "3em",
                    }}
                >
                    Time
                </label>
                <span name="selected">
                    {" "}
                    <input
                        type="time"
                        className="starting_time"
                        name="start_time"
                        id={item}
                        
                        value={items[0]}
                    />{" "}
                </span>
                <label
                    htmlFor="durations"
                    style={{
                      position: "absolute",
                      fontWeight: "600",
                      top: "-1.5em",
                      left: "10em",
                    }}
                    >
                    Duration
                </label>
                <select
                    name="durations"
                    id="durations"
                    value={items[2]}
                    style={{
                      padding: "0.4em 1.2em",
                      fontWeight: "600",
                      borderRadius: "6px",
                    }}
                    >
                    <option value="30" className="duration">
                        30Min
                    </option>
                    <option value="60" className="duration">
                        60Min
                    </option>
                    <option value="90" className="duration">
                        90Min
                    </option>
                </select>
                      <button style={{margin:"5px"}}
                      onClick={(e)=>{e.target.innerHTML=e.target.innerHTML==="book"?"booked":"book"
                      dispatch(book_time_table(student,{semail,temail},items))
                      
                    }
                     }>book</button>
            </div></Grid>:<></>)}
            </Grid>
          </div>
          </>
        );
      })}

    </div>
  );
}

export default TimeTable;
