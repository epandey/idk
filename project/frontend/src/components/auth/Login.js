import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Provider } from 'react-redux';
import store from '../../store';

import { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setAlert } from '../../actions/alert';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';

import mcs_logo from '../../logo/mcs_logo.webp';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" to="https://mui.com/">
        MCS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

//export default function SignIn() {
//const Login = ({ setAlert, login, isAuthenticated }) => {
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setAlert('Password length is less that 6 characters', 'danger');
      //alert('wrong pass');
    } else if (email.length === 0) {
      setAlert('Please enter name', 'danger');
    } else {
      login({ email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard"></Navigate>;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={mcs_logo} alt="Logo" />

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                autoComplete="email"
                autoFocus
                onChange={(e) => onChange(e)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                value={password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => onChange(e)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps, { setAlert, login })(Login);
