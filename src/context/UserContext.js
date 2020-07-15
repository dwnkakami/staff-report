import React from "react";
// import qs from 'qs';
import axios from "axios";

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("id_token"),
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserState, useUserDispatch, loginUser, signOut, registerUser};

// ###########################################################

function loginUser(dispatch, login, password, history, setIsLoading, setError) {
  // setError(false);
  setIsLoading(true);

  if (!!login && !!password) {

    let userData = [];
      axios
        .get('/api/login/' + login)
        .then(response => {
          userData = response.data;
          console.log(userData[0].name);
          if (userData[0].password === password) {
            setTimeout(() => {
            localStorage.setItem('id_token', 1)
            setError(null)
            setIsLoading(true)
            dispatch({ type: 'LOGIN_SUCCESS' })
            history.push('/staff-report/dashboard')
          }, 2000);
        } else {
          setError(true)
          setIsLoading(false)
          console.log('パスワードが一致しません');
          
        }
        })
        .catch(() => {
          setError(true)
          setIsLoading(false)
          console.log('getData error');
        })


  //   setTimeout(() => {
  //     localStorage.setItem('id_token', 1)
  //     setError(null)
  //     setIsLoading(false)
  //     dispatch({ type: 'LOGIN_SUCCESS' })

  //     history.push('/app/dashboard')
  //   }, 2000);
  // } else {
  //   dispatch({ type: "LOGIN_FAILURE" });
  //   setError(true);
  //   setIsLoading(false);
  }
}

function signOut(dispatch, history) {
  localStorage.removeItem("id_token");
  dispatch({ type: "SIGN_OUT_SUCCESS" });
  history.push("/login");
}

function registerUser(dispatch, password, history, setIsLoading, setError) {
  setError(false);
  setIsLoading(true);

  if (!!password) {
    setTimeout(() => {
      localStorage.setItem('id_token', 1)
      setError(null)
      setIsLoading(false)
      dispatch({ type: 'LOGIN_SUCCESS' })

      history.push('/staff-report/dashboard')
    }, 2000);
  } else {
    dispatch({ type: "LOGIN_FAILURE" });
    setError(true);
    setIsLoading(false);
  }
}
