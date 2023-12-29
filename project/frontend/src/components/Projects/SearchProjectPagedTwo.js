import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Records from './SearchProjectPageTwo/Records';
import Pagination from './SearchProjectPageTwo/Pagination';
import { connect } from 'react-redux';

import { getProjects } from '../../actions/projects';

const SearchProjectPagedTwo = () => {
  // To hold the actual data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  useEffect(() => {
    axios
      .post('http://localhost:3000/api/projects')
      .then((res) => {
        setData(res.data.projects);
        setLoading(false);
      })
      .catch(() => {
        alert('There was an error while retrieving the data');
      });
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <div className="container mt-5">
      <Records data={currentRecords} />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

SearchProjectPagedTwo.propTypes = {
  getProjects: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  projects: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  projects: state.projects,
});

export default connect(mapStateToProps, { getProjects })(SearchProjectPagedTwo);
