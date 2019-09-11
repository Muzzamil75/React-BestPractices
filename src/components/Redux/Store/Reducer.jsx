const initialState = {
  age: 50,
  history: [],
  enability: true
};

const Reducer = (state = initialState, action) => {
  let newState = { ...state };

  if (action.type === "Enable" || action.type === "Disable") {
    newState.enability = action.value;
  }

  if (action.type === "AgeUp" && newState.enability === true) {
    let obj = {
      age: state.age + action.value,
      history: state.history.concat({
        id: Math.random(),
        age: state.age + action.value
      }),
      enability: true
    };
    //copying the object
    newState = { ...obj };
  }
  if (action.type === "AgeDown" && newState.enability === true) {
    // let obj = {
    //   age: state.age - action.value,
    //   history: state.history.concat({id:Math.random(), age: state.age - action.value }),
    //   enability: true,
    // };
    // newState = { ...obj };

    //or we can write this code as under 

    return {
      ...state,
      age: state.age - action.value,
      history: state.history.concat({
        id: Math.random(),
        age: state.age - action.value
      })
    };

  }
  if (action.type === "Delete") {
    return {
        ...state,
        history : state.history.filter(el => el.id !== action.key)
    }
}
    
  return newState;
};

export default Reducer;
