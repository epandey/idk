import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useTable } from 'react-table';

import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import CardView from '../CardView/CardView';
import { JsonToTable } from 'react-json-to-table';
import {
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from '@mui/material';
import { withStyles, makeStyles } from '@material-ui/core';
import { tableRowClasses } from '@mui/material/TableRow';

import { getUserProjects } from '../../actions/projects';
import Spinner from '../layout/Spinner';

const ProjectsDashboard = ({
  getUserProjects,
  auth: { user },
  projects: { projects },
}) => {
  useEffect(() => {
    getUserProjects();
  }, [getUserProjects]);

  var projectsDisplay = null;
  if (projects !== null) {
    var projectsDisplay = projects.projects;
    console.log('Project Dashboard data is- ', projects.projects);
    const DisplayData = projectsDisplay.map((info) => {
      return (
        <tr>
          <td>{info.id}</td>
          <td>{info.warehouse}</td>
          <td>{info.item}</td>
        </tr>
      );
    });
  }

  const ProjectsBody = (props) => {
    return (
      <>
        <Typography variant="body2" color="text.secondary">
          {props.bodyTitle && Array.isArray(props.bodyTitle) ? (
            <div className="content-wrapper bodytitle-wrapper">
              {props.bodyTitle.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          ) : (
            <p>{props.bodyTitle}</p>
          )}
          {Array.isArray(props.content) ? (
            <ul>
              <div>
                {props.content.map((item, index) => (
                  <li key={index} className="content-wrapper">
                    <span>{item.name}</span>
                    <span>
                      {item.score === 'red' ? (
                        <CircleIcon className="circle-red" />
                      ) : (
                        <CircleIcon className="circle-green" />
                      )}
                    </span>
                    <span>{item.status}</span>
                  </li>
                ))}
              </div>
            </ul>
          ) : (
            <p>{props.content}</p>
          )}
        </Typography>
      </>
    );
  };

  const ellipsisStyle = {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '130px',
    maxWidth: '130px',
    height: '10px',
    maxHeight: '10px',
  };

  const useStyles = makeStyles({
    table: {
      minWidth: 130,
    },
    tableRow: {
      height: 30,
    },
    tableCell: {
      padding: '0px 16px',
    },
  });
  const StyledTableRow = withStyles((theme) => ({
    root: {
      height: 20,
    },
  }))(TableRow);

  const StyledTableCell = withStyles((theme) => ({
    root: {
      padding: '0px 2px',
    },
  }))(TableCell);
  const classes = useStyles();
  return (
    <>
      {projects !== null ? (
        // <tbody>
        //   <tr>
        //     <th>Warehouse</th>
        //     <th>MCS #</th>
        //     <th>Item</th>
        //   </tr>
        //   {console.log(projectsDisplay)}

        //   {projectsDisplay.map((info) => {
        //     return (
        //       <tr>
        //         <td>{info.pid}</td>
        //         <td>{info.mcsNumber}</td>
        //         <td>{info.name}</td>
        //       </tr>
        //     );
        //   })}
        // </tbody>
        <TableContainer>
          <Table className={classes.table}>
            <TableHead>
              <TableRow className={classes.tableRow}>
                <TableCell>Warehouse</TableCell>
                <TableCell>MCS #</TableCell>
                <TableCell>Item</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projectsDisplay.map((list, index) => (
                <TableRow
                  key={index}
                  className={classes.tableRow}
                  style={
                    index % 2
                      ? { background: '#ededed' }
                      : { background: 'white' }
                  }
                >
                  <TableCell>{list.name + '' + list.warehouseID}</TableCell>
                  <TableCell>{list.mcsNumber}</TableCell>
                  <TableCell>{list.mcsNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Spinner />
      )}
    </>
  );
};

ProjectsDashboard.propTypes = {
  getUserProjects: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  projects: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  projects: state.projects,
});

export default connect(mapStateToProps, { getUserProjects })(ProjectsDashboard);
