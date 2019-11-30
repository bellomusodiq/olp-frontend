const reducer = (state = {}, action) => {
    switch (action.type) {
       case 'DO_SOMETHING':
          return { ...state, loading: true };
        case 'RETURN_SOMETHING':
            return {...state, loading: false, res: action.res}
       default:
          return state;
     }
  };
  export default reducer;