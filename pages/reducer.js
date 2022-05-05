const initialState = {
    posts:[]
  }
  const reducer = (state = initialState, action)=>{
    switch(action.type){
        case 'GET_KROFILE':
          const allKProfileState = {
            ...state,
            posts: action.playload
          }
          return allKProfileState;
        default:
          break;
    }
    return state;
  }
  export default reducer;