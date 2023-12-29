import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import { getProjects } from '../../actions/projects';
import Pagination from './Pagination';
import data from './mock-data.json';
import './style.scss';
import Spinner from '../layout/Spinner';

import {
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from '@mui/material';

import Table from '../Table/index';
import { withStyles, makeStyles } from '@material-ui/core';

let PageSize = 10;

//export default function SearchProjectPaged() {
const SearchProjectPaged = ({
  getProjects,
  auth: { user },
  projects: { projects },
}) => {
  useEffect(() => {
    getProjects();
  }, [getProjects]);
  const [currentPage, setCurrentPage] = useState(0);

  //   var projectsDisplay = null;

  //   var projectsDisplay = projects.projects;

  //   console.log('Project Dashboard data is- ', projects.projects);
  //   const currentTableData = useMemo(() => {
  //     const firstPageIndex = (currentPage - 1) * PageSize;
  //     const lastPageIndex = firstPageIndex + PageSize;
  //     return projects.projects.slice(firstPageIndex, lastPageIndex);
  //   }, [currentPage, projects]);
  //const DisplayData = projectsDisplay.map((info) => {});

  const currentTableData = () => {
    if (projects !== null) {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return projects.projects.slice(firstPageIndex, lastPageIndex);
    } else {
      return <Spinner />;
    }
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
    tableHead: {
      fontWeight: 'bold',
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

  const StyledTableHead = withStyles((theme) => ({
    root: {
      padding: '0px 2px',
    },
    tableCell: {
      padding: '0px 16px',
    },
  }))(TableHead);

  const classes = useStyles();

  return (
    <>
      {projects !== null ? (
        <>
          {/* <table>
            <thead>
              <tr>
                <TableCell className={classes.tableHead}>Warehouse</TableCell>
                <TableCell className={classes.tableHead}>MCS #</TableCell>
                <TableCell className={classes.tableHead}>Item</TableCell>
                <TableCell className={classes.tableHead}>Score</TableCell>
                <TableCell className={classes.tableHead}>Status</TableCell>
                <TableCell className={classes.tableHead}>Start Date</TableCell>
                <TableCell className={classes.tableHead}>End Date</TableCell>
                <TableCell className={classes.tableHead}>Manager</TableCell>
                <TableCell className={classes.tableHead}>Key Status</TableCell>
              </tr>
            </thead>
            <tbody>
              {currentTableData.map((list) => {
                return (
                  <tr>
                    <td>{list.cityname + ' #' + list.warehouseID}</td>
                    <td>{list.mcsNumber}</td>
                    <td>{list.projitemname}</td>
                    <td>{list.mcsNumber}</td>
                    <td>{list.status_name}</td>
                    <td>{list.status_name}</td>
                    <td>{list.status_name}</td>
                    <td>{list.status_name}</td>
                    <td>{list.status_name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          /> */}

          <Table data={projects.projects} rowsperpage={15} />
        </>
      ) : (
        <>
          <Spinner />
        </>
      )}
    </>
  );
};

SearchProjectPaged.propTypes = {
  getProjects: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  projects: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  projects: state.projects,
});

export default connect(mapStateToProps, { getProjects })(SearchProjectPaged);
