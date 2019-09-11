## steps of how redux works
####  Dispatches takes the actions to the reducer using () => dispatch({})
```actions``` is basically a object  with type and payloads etc
we can make sepate file of actions wrapped in a fuction and then use tthat file by imporint as * as call all actions written, in the mapDispatchToProps.

####  Reducer is afucniton has all the switches or if/else it triggers and changes the state based on the action taken !
()=> Reducer(state={}, action)


## Redux-thunk is used to do asynchornous data handling of UI 
i.e we setState the state and want that first it goes to the server than updates the UI so here redux thunk is used

