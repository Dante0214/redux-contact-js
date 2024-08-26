const initialState = {
  contactList: [],
  searchName: "",
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: payload.name, phoneNum: payload.phoneNum },
        ],
      };
    case "SEARCH_NAME":
      return {
        ...state,
        searchName: payload.searchName,
      };
    default:
      return { ...state };
  }
}

export default reducer;
