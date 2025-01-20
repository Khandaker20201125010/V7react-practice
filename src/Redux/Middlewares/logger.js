const logger  = (store) => (next) => (action) => {
   const currentState = store.getState();
   console.log("current State =>",currentState );
   console.log("action dispatched=>",action);
   //logeer
   next(action);
   console.log("updated state =>",store.getState());
}
export default logger