import { LOGOUT } from '../../actions/types';
import store from '../../store';
import { useNavigate } from 'react-router-dom';
import React from 'react';

// LOGOUT / Clear Profile
const Logout = () => {
  store.dispatch({ type: LOGOUT });

  const Navigate = useNavigate();

  React.useEffect(() => {
    Navigate('/login');
  }, []);

  //   function handleClick() {
  //     Navigate('/login');
  //   }
  return null;
};

export default Logout;
