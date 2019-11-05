import React, { useState } from 'react';

export const AuthContext = React.createContext({
  login: (user, password) => {},
  logout: () => {},
  register: (user, email, password) => {},
  isAuthenticated: false,
  user: null
});

const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState('');

  const loginHandler = (userName, password) => {
    // TODO - check password
    setIsAuthenticated(true);
    setUser(userName);
    console.log(userName);
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const registerHandler = (userName, email, password) => {
    // TODO - create new user
  };

  return (
    <AuthContext.Provider
      value={{
        login: loginHandler,
        logout: logoutHandler,
        register: registerHandler,
        isAuthenticated: isAuthenticated,
        user: user
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;