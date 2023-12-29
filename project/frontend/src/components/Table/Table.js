import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { sortRows, filterRows, paginateRows } from './helpers';
import { Pagination } from '../Projects/Pagination';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { getProject } from '../../actions/projects';

const Table = ({ columns, rows, getProject }) => {
  const [activePage, setActivePage] = useState(1);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({ order: 'asc', orderBy: 'pid' });
  const rowsPerPage = 10;

  const filteredRows = useMemo(
    () => filterRows(rows, filters),
    [rows, filters]
  );
  const sortedRows = useMemo(
    () => sortRows(filteredRows, sort),
    [filteredRows, sort]
  );
  const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage);

  const count = filteredRows.length;
  const totalPages = Math.ceil(count / rowsPerPage);

  const handleSearch = (value, accessor) => {
    setActivePage(1);

    if (value) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [accessor]: value,
      }));
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters };
        delete updatedFilters[accessor];

        return updatedFilters;
      });
    }
  };

  const handleSort = (accessor) => {
    setActivePage(1);
    setSort((prevSort) => ({
      order:
        prevSort.order === 'asc' && prevSort.orderBy === accessor
          ? 'desc'
          : 'asc',
      orderBy: accessor,
    }));
  };

  const clearAll = () => {
    setSort({ order: 'asc', orderBy: 'pid' });
    setActivePage(1);
    setFilters({});
  };

  const fontStyling = {
    fontSize: 14,
    textAlign: 'center',
    height: '10px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    border: 'none',
  };

  const tableRow = {
    style: {
      height: '10px',
      border: 'none',
    },
  };
  const tableMain = {
    style: {
      borderCollapse: 'collapes',
      border: 'none',
      boxShadow: 'none',
    },
  };

  const navigate = useNavigate();

  function onRowClick(e) {
    e.preventDefault();
    //console.log(e.currentTarget.id);
    //getProject(e.currentTarget.id);
    navigate('/projects/viewproject', { state: e.currentTarget.id });
  }

  return (
    <>
      <table style={tableMain}>
        <thead>
          <tr>
            {columns.map((column) => {
              const sortIcon = () => {
                if (column.accessor === sort.orderBy) {
                  if (sort.order === 'asc') {
                    return '⬆️';
                  }
                  return '⬇️';
                } else {
                  return '️↕️';
                }
              };
              return (
                <th key={column.accessor}>
                  <span>{column.label}</span>
                  <button onClick={() => handleSort(column.accessor)}>
                    {sortIcon()}
                  </button>
                </th>
              );
            })}
          </tr>
          <tr style={tableRow}>
            {columns.map((column) => {
              return (
                <th>
                  <input
                    key={`${column.accessor}-search`}
                    type="search"
                    placeholder={`Search ${column.label}`}
                    value={filters[column.accessor]}
                    onChange={(event) =>
                      handleSearch(event.target.value, column.accessor)
                    }
                  />
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {calculatedRows.map((row) => {
            return (
              <tr id={row.pid} key={row.pid} onClick={onRowClick}>
                {columns.map((column) => {
                  if (column.color) {
                    return (
                      <td key={column.accessor} style={fontStyling}>
                        {column.color(row[column.accessor])}
                      </td>
                    );
                  } else if (column.date && row[column.accessor]) {
                    return (
                      <td key={column.accessor} style={fontStyling}>
                        {row[column.accessor].substring(0, 10)}
                      </td>
                    );
                  }
                  return (
                    <td key={column.accessor} style={fontStyling}>
                      {row[column.accessor]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {count > 0 ? (
        <Pagination
          activePage={activePage}
          count={count}
          rowsPerPage={rowsPerPage}
          totalPages={totalPages}
          setActivePage={setActivePage}
        />
      ) : (
        <p>No data found</p>
      )}

      <div>
        <p>
          <button onClick={clearAll}>Clear all</button>
        </p>
      </div>
    </>
  );
};

Table.propTypes = {
  getProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  project: state.project,
});

export default connect(mapStateToProps, { getProject })(Table);
