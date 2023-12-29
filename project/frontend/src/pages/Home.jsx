import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  else{
    return <Navigate to="/login" />;
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Home);
