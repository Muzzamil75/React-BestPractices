const { createStore } = require("redux");

const initialState = {
  age: 24
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === "ADD") {
    newState.age += action.val;
  }

  return newState;
};

const store = createStore(reducer);

// subscribe is automatically  called whenever the state changes in the store (it lets us being update)
store.subscribe(() => {
  console.log("here", store.getState());
});

store.dispatch({ type: "ADD", val: 20 });
