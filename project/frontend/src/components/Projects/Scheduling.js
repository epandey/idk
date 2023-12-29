import * as React from 'react';
import { useState } from 'react';

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
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Datetime from 'react-datetime';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

import { generalInfoFieldsStyle, generalInfoNameStyle, classes } from './Style';
import { transform } from 'framer-motion';
import { BiBold } from 'react-icons/bi';



// const generalInfoNameStyle = {
//   fontWeight: 'bold',
//   borderWidth: '1px',
//   borderColor: '#aaaaaa',
//   borderRightColor: 'white',
//   borderStyle: 'solid',
// };
const tableCellTextStyle = {
  fontWeight: 'bold',
  
};

const tableCellFieldStyle = {
  fontWeight: 'bold',
 
};


const Scheduling = (projectArguments) => {
  const { project } = projectArguments;

  const [startDate, setStartDate] = useState(new Date());

  //declaring state variable for handling form values
  const [projectInitiatedDate, setProjectInitiatedDate] = React.useState(
    project.project[0].projectInitiatedDate
      ? moment(project.project[0].projectInitiatedDate).toDate()
      : null
  );
  const [siteSurveyDate, setSiteSurveyDate] = React.useState(
    project.project[0].siteSurvey ? moment(project.project[0].siteSurvey).toDate() : null
  );
  const [budgetaryDueDate, setBudgetaryDueDate] = React.useState(
    project.project[0].budgetaryDue ? moment(project.project[0].budgetaryDue).toDate() : null
  );
  const [budgetarySubmittedDate, setBudgetarySubmittedDate] = React.useState(
    project.project[0].budgetarySubmitted
      ? moment(project.project[0].budgetarySubmitted).toDate()
      : null
  );
  const [proposalScopeDate, setProposalScopeDate] = React.useState(
    project.project[0].proposalScopeDate
      ? moment(project.project[0].proposalScopeDate).toDate()
      : null
  );
  const [draftScheduleDate, setDraftScheduleDate] = React.useState(
    project.project[0].draftScheduleDate
      ? moment(project.project[0].draftScheduleDate).toDate()
      : null
  );
  const [proposalDueDate, setProposalDueDate] = React.useState(
    project.project[0].proposalDue ? moment(project.project[0].proposalDue).toDate() : null
  );
  const [proposalSubmittedDate, setProposalSubmittedDate] = React.useState(
    project.project[0].proposalSubmitted
      ? moment(project.project[0].proposalSubmitted).toDate()
      : null
  );
  const [scheduledStartDate, setScheduledStartDate] = React.useState(
    project.project[0].proposalSubmitted
      ? moment(project.project[0].scheduledStartDate).toDate()
      : null
  );
  const [scheduledTurnoverDate, setScheduledTurnoverDate] = React.useState(
    project.project[0].proposalSubmitted
      ? moment(project.project[0].scheduledTurnover).toDate()
      : null
  );
  const [actualTurnoverDate, setActualTurnoverDate] = React.useState(
    project.project[0].proposalSubmitted
      ? moment(project.project[0].actualTurnover).toDate()
      : null
  );

  const useStyles = makeStyles((theme) => ({
    tr:{
      height:'20px',
    },
    td: {
      padding: '0px 0px',
    },
    textfields: {
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: 'none', // set the border color here
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', // set the shadow here
        maxWidth: '200px', // set the maximum width here
        minWidth: '200px', // set the minimum width here
        height: '35px',
      },
    },
    textAreas: {
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: 'none', // set the border color here
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', // set the shadow here
        maxWidth: '250px', // set the maximum width here
        minWidth: '250px', // set the minimum width here
        height: '110px',
      },
    },

    inputText: {
      color: 'rgba(0,0,0,0.87)',
      fontSize: '16px',
      letterSpacing: '0.5px',
      lineHeight: '28px',
      textAlign: 'center',
    },

    select: {
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'red',
      },
    },

    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    notchedOutline: {
      borderColor: 'blue',
    },

    tab: {
      color: theme.palette.common.white, // set the text color to white
    },
    selected: {
      color: theme.palette.primary.black, // set the selected tab text color to primary color
      backgroundColor: 'black', // set the background color of the selected tab to white
      color: 'yellow',
    },

    datePickerStyles: {
      '& .react-datepicker__input-container input': {
        border: 'none',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', // set the shadow here
        borderRadius: 5,
        backgroundColor:'white',
        height:'35px'
      },
    },
  }));

  const classes2 = useStyles();

  return (
    <>
      {/* <Card>
        <CardHeader
          style={{ background: '#1976d2', color: 'white' }}
          title="Project Info"
        ></CardHeader>
      </Card> */}
      <Card>
        <CardHeader
         style={{ background: '#467eac', color: 'white'}}
          title={<h1 style={{ fontSize: '18px',marginLeft:'12px' ,fontFamily:'Helvetica',fontWeight:'bold'}}>Scheduling</h1>}
          action={
            <>
              <Button
                variant="contained"
                style={{ marginLeft: '0.4rem',marginRight:'1.5rem', background: 'green' ,textTransform:'none'}}
              >
                Save Changes
              </Button>
            </>
          }
        ></CardHeader>
        <TableContainer component={Paper} style={{padding:'25px'}}>
          
          <Table
            sx={{ minWidth: 1150 }}
            style={{
             border:'none'
            }}
            aria-label="simple table"
          >
            <TableHead>
              <tr>
                <td style={{fontWeight: 'bold',border:'none'}} >Initiation Date</td>
                <td align="left" style={generalInfoNameStyle}>
                  <div className={classes2.datePickerStyles}>
                    <DatePicker
                    className={classes2.datePickerStyles}
                      dateFormat="MM/dd/yyyy"
                      selected={projectInitiatedDate}
                      onChange={(date) => setProjectInitiatedDate(date)}
                        
                    />
                  </div>
                </td>
                <td style={{border:'none' ,fontWeight: 'bold'}}>Site Survey Date</td>
                <td align="left" style={generalInfoNameStyle}>
                  <div className={classes2.datePickerStyles}>
                    <DatePicker
                      dateFormat="MM/dd/yyyy"
                      selected={siteSurveyDate}
                      onChange={(date) => setSiteSurveyDate(date)}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{border:'none' ,fontWeight: 'bold'}}>Budgetary Due Date</td>
                <td align="left" style={generalInfoNameStyle}>
                  <div className={classes2.datePickerStyles}>
                    <DatePicker
                      dateFormat="MM/dd/yyyy"
                      selected={budgetaryDueDate}
                      onChange={(date) => setBudgetaryDueDate(date)}
                    />
                  </div>
                </td>
                <td style={{border:'none' ,fontWeight: 'bold'}}>Budgetary Submitted Date</td>
                <td align="left" style={generalInfoNameStyle}>
                  <div className={classes2.datePickerStyles}>
                    <DatePicker
                      dateFormat="MM/dd/yyyy"
                      selected={budgetarySubmittedDate}
                      onChange={(date) => setBudgetarySubmittedDate(date)}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{border:'none' ,fontWeight: 'bold'}}>Proposal Scope Date</td>
                <td align="left" style={generalInfoNameStyle}>
                  <div className={classes2.datePickerStyles}>
                    <DatePicker
                      dateFormat="MM/dd/yyyy"
                      selected={proposalScopeDate}
                      onChange={(date) => setProposalScopeDate(date)}
                    />
                  </div>
                </td>
                <td style={{border:'none' ,fontWeight: 'bold'}}>Draft Schedule Date</td>
                <td align="left" style={generalInfoNameStyle}>
                  <div className={classes2.datePickerStyles}>
                    <DatePicker
                      dateFormat="MM/dd/yyyy"
                      selected={draftScheduleDate}
                      onChange={(date) => setDraftScheduleDate(date)}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{border:'none' ,fontWeight: 'bold'}}>Proposal Due Date</td>
                <td align="left" style={generalInfoNameStyle}>
                  <div className={classes2.datePickerStyles}>
                    <DatePicker
                      dateFormat="MM/dd/yyyy"
                      selected={proposalDueDate}
                      onChange={(date) => setProposalDueDate(date)}
                    />
                  </div>
                </td>
                <td style={{border:'none' ,fontWeight: 'bold'}}>Proposal Submitted Date</td>
                <td align="left" style={generalInfoNameStyle}>
                  <div className={classes2.datePickerStyles}>
                    <DatePicker
                      dateFormat="MM/dd/yyyy"
                      selected={proposalSubmittedDate}
                      onChange={(date) => setProposalSubmittedDate(date)}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{border:'none' ,fontWeight: 'bold'}}>Scheduled Start Date</td>
                <td align="left" style={generalInfoNameStyle}>
                  <div className={classes2.datePickerStyles}>
                    <div className={classes2.datePickerStyles}>
                      <DatePicker
                        dateFormat="MM/dd/yyyy"
                        selected={scheduledStartDate}
                        onChange={(date) => setScheduledStartDate(date)}
                      />
                    </div>
                  </div>
                </td>
                <td style={{border:'none' ,fontWeight: 'bold'}}>Scheduled Turnover</td>
                <td align="left" style={generalInfoNameStyle}>
                  <div className={classes2.datePickerStyles}>
                    <DatePicker
                      dateFormat="MM/dd/yyyy"
                      selected={scheduledTurnoverDate}
                      onChange={(date) => setScheduledTurnoverDate(date)}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{border:'none' ,fontWeight: 'bold'}}>Actual Turnover</td>
                <td align="left" style={generalInfoNameStyle}>
                  <div className={classes2.datePickerStyles}>
                    <DatePicker
                      dateFormat="MM/dd/yyyy"
                      selected={actualTurnoverDate}
                      onChange={(date) => setActualTurnoverDate(date)}
                    />
                  </div>
                </td>
              </tr>
            </TableHead>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default Scheduling;
