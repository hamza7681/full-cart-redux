const initialState = {
  token: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Login":
      return {
        token:localStorage.getItem('token')
      }
    default:
      return {
        ...state,
        token: localStorage.getItem("token")
          ? localStorage.getItem("token")
          : null,
      };
  }
};

export default AuthReducer