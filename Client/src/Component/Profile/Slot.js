import React from 'react';

function Slot() {
    return (
        <>
            <div style={{ position: "relative",marginLeft:"1em" }} className="active">
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
        </>
    )
}

export default Slot
