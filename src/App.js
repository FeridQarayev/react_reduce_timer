import { Button } from "@mui/material";
import { useReducer, useRef } from "react";
import "./App.css";
import reducer from "./reducers/reducer";

function App() {
  let time = useRef(0);

  const [state, dispatch] = useReducer(reducer, {
    startBtn: false,
    stopBtn: false,
    resetBtn: false,
    myTime: 0,
  });

  function startTime() {
    time.current = setInterval(() => {
      dispatch({ type: "SET_START" });
    }, 1000);
  }
  function stopTime() {
    clearInterval(time.current);
    dispatch({ type: "SET_STOP" });
  }
  function resetTime() {
    clearInterval(time.current);
    dispatch({ type: "SET_RESET" });
  }

  return (
    <div className="container">
      <div style={{ fontSize: 40 }}>
        <p>Stop Watching ...</p>
        <span style={{ display: "inline-block", marginRight: 20 }}>Timmer</span>
        <span ref={time}>{state.myTime}s</span>
      </div>
      <div>
        <Button
          style={{ marginRight: 10 }}
          onClick={() => {
            startTime();
          }}
          variant={state.startBtn ? "outlined" : "contained"}
          color="success"
        >
          START
        </Button>
        <Button
          style={{ marginRight: 10 }}
          onClick={() => {
            stopTime();
          }}
          variant={state.stopBtn ? "outlined" : "contained"}
          color="error"
        >
          STOP
        </Button>
        <Button
          style={{ marginRight: 10 }}
          onClick={() => {
            resetTime();
          }}
          variant={state.resetBtn ? "outlined" : "contained"}
          color="warning"
        >
          RESET
        </Button>
      </div>
    </div>
  );
}

export default App;
