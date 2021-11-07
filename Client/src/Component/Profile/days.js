import "../../stylesheets/timetable.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import React, { useState } from "react";
function Days({ table, item }) {
    const [timer_icon, settimer_icon] = useState(
        <AddCircleIcon
          style={{ fontSize: "3em", color: "512D6D", pointerEvents: "none" }}
        />
      );
    const [slots, set] = useState(1);
    function render_timer(e, slots) {
        console.log("loaded")
        const target_div = e.target.parentElement.childNodes[slots];
        console.log(e.target.parentElement.childNodes)
        set(slots + 1);
        // console.log(e.target.parentElement.childNodes);
        target_div.classList.toggle("active");
        
    }
    return (<>
        
            <div name="hided" style={{ position: "relative",marginLeft:"1em" }}>
              <label
                htmlFor="start_time"
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  top: "-1.5em",
                  left: "3em",
                }}
              >
                Time
              </label>
              <span>
                {" "}
                <input
                  type="time"
                  className="starting_time"
                  name="start_time"
                  id={item}
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
            </div>
            <div style={{ position: "relative",marginLeft:"1em" }}>
              <label
                htmlFor="start_time"
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  top: "-1.5em",
                  left: "3em",
                }}
              >
                Time
              </label>
              <span>
                {" "}
                <input
                  type="time"
                  className="starting_time"
                  name="start_time"
                  id={item}
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
            </div>
            <div style={{ position: "relative",marginLeft:"1em" }}>
              <label
                htmlFor="start_time"
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  top: "-1.5em",
                  left: "3em",
                }}
              >
                Time
              </label>
              <span>
                {" "}
                <input
                  type="time"
                  className="starting_time"
                  name="start_time"
                  id={item}
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
            </div>
            <div style={{ position: "relative",marginLeft:"1em" }}>
              <label
                htmlFor="start_time"
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  top: "-1.5em",
                  left: "3em",
                }}
              >
                Time
              </label>
              <span>
                {" "}
                <input
                  type="time"
                  className="starting_time"
                  name="start_time"
                  id={item}

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
            </div>  
            <button
             
              className="timer_toggler active"
              onClick={(e) => {
                render_timer(e, slots);
              }}
            >
              <AddCircleIcon
              
                style={{
                  fontSize: "3em",
                  color: "512D6D",
                  pointerEvents: "none",
                }}
              />
            </button>
            
    </>)
}

export default Days