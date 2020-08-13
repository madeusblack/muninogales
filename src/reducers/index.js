const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        reading: state.news.find((item) => item.id === Number(action.payload)) ||
        [],
      };
    default:
      return state;
  }
};
export default reducer;
