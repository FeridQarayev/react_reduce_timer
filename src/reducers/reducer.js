const reducer = (state, action) => {
  switch (action.type) {
    case "SET_START":
      return {
        startBtn: true,
        stopBtn: false,
        resetBtn: false,
        myTime: ++state.myTime,
      };
    case "SET_STOP":
      return {
        startBtn: false,
        stopBtn: true,
        resetBtn: false,
        myTime: state.myTime,
      };
    case "SET_RESET":
      return {
        startBtn: false,
        stopBtn: false,
        resetBtn: true,
        myTime: 0,
      };
    default:
      return state;
  }
};

export default reducer;