import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardHeader,
  Autocomplete,
  Divider,
  List,
  ListItem,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  ListItemText,
  TextField,
} from '@mui/material';

// css style variables
export const cardStyle = {
  // marginLeft: '10rem',
  // marginRight: '10rem',
  maxWidth: 1000,
};

export const cardHeaderStyle = {
  background: '#1976d2',
  color: 'white',
  fontSize: '1.1em',
};

const Customtd = withStyles((theme) => ({
  head: {
    color: theme.palette.common.black,
    fontWeight: 'bold',
    border: 'none',
  },
  body: {
    fontSize: 10,
  },
}))(TableCell);

export const generalInfoNameStyle = {
  fontWeight: 'bold',
  borderWidth: '0px',
  borderColor: '#aaaaaa',
  borderRightColor: 'white',
  borderStyle: 'solid',
  height: '10px',
  // fontSize: '0.9em',
  verticalAlign: 'top',
};

export const generalInfoFieldsStyle = {
  // fontWeight: 'bold',
  borderWidth: '0px',
  borderColor: '#aaaaaa',
  borderStyle: 'solid',
  height: '10px',
  verticalAlign: 'top',
};

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: 0,
    fontSize: 8,
  },
  table: {},
  row: {
    // border: 'none',
    height: 28,
    padding:'0px',
    '&:nth-of-type(odd)': {
      backgroundColor: 'red',
    },
    borderTopWidth: 1,
    borderBottom: 'none',
  },
  body: {
    fontSize: 10,
    border: 'none',
  },

  notchedOutline: {
    borderColor: 'blue', // Set your desired border color here
  },

  select: {
    '&:before': {
      borderColor: 'blue',
    },
    '&:after': {
      borderColor: 'blue',
    },
  },
});

const generalInfotr = {
  height: '10px',
};

//for the select component
export const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: state.isFocused ? '#4f86e0' : '#4f86e0',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', // add box-shadow style
  }),
};

// const useStyles = makeStyles((theme) => ({
//   tr: {
//     height: 30,
//   },
//   td: {
//     padding: '0px 0px',
//   },
//   textfields: {
//     '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
//       borderColor: '#4f86e0', // set the border color here
//       boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', // set the shadow here
//       maxWidth: '200px', // set the maximum width here
//       minWidth: '200px', // set the minimum width here
//       height: '35px',
//     },
//   },
//   textAreas: {
//     '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
//       borderColor: '#4f86e0', // set the border color here
//       boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', // set the shadow here
//       maxWidth: '250px', // set the maximum width here
//       minWidth: '250px', // set the minimum width here
//       height: '110px',
//     },
//   },

//   inputText: {
//     color: 'rgba(0,0,0,0.87)',
//     fontSize: '16px',
//     letterSpacing: '0.5px',
//     lineHeight: '28px',
//     textAlign: 'center',
//   },

//   select: {
//     '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//       borderColor: 'red',
//     },
//   },

//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   notchedOutline: {
//     borderColor: 'blue',
//   },

//   tab: {
//     color: theme.palette.common.white, // set the text color to white
//   },
//   selected: {
//     color: theme.palette.primary.black, // set the selected tab text color to primary color
//     backgroundColor: 'black', // set the background color of the selected tab to white
//     color: 'yellow',
//   },

//   datePickerStyles: {
//     '& .react-datepicker__input-container input': {
//       border: '1px solid blue',
//       boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', // set the shadow here
//       borderRadius: 5,
//     },
//   },
// }));

// export const classes2 = useStyles();

export const classes = styles;
