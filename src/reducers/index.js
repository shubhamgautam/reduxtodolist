export default (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: action.id, task: action.text }];
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

/*
  [{
    id : asdsdsd,
    task : ""
  }, {
id : asdsdsd,
    task : ""
  }]
*/
