
function speakerReducer(state, action) {
  function updateFavourite(favouriteValue) {
    return state.map((item, index) =>{
      if(item.id === action.sessionId){
        item.favourite = true;
      }
      return item;
    });
  }
  switch (action.type) {
    case 'setSpeakerList': {
      return action.data;
    }
    case "favourite":{
      return updateFavourite(true);
    
    }
    case "unfavourite":{
      return updateFavourite(false);
    }
    default:
      return state;
  }
}

export default speakerReducer;