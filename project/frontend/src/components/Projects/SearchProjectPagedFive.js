import '../../../src/components/Projects/style.css';

import Table from '../Table/Table';

export default function SearchProjectPagedFive(data) {
  const columns = [
    { accessor: 'cityname', label: 'Warehouse' },
    { accessor: 'mcsNumber', label: 'MCS #' },
    { accessor: 'projitemname', label: 'Project Item' },
    {
      accessor: 'score',
      label: 'Score',
      color: (value) => (value ? '✔️' : '✖️'),
    },

    { accessor: 'status_name', label: 'Status' },
    {
      accessor: 'proposalSubmitted',
      label: 'Start Date',
      date: true,
    },
    { accessor: 'scheduledStartDate', label: 'End Date', date: true },
    { accessor: 'project_manager', label: 'Manager' },
    { accessor: 'keyStatus', label: 'Key Status' },
  ];

  //console.log('Project data is- ', data);
  const rows = [
    {
      id: 1,
      name: 'Liz Lemon',
      age: 36,
      is_manager: true,
      start_date: '02-28-1999',
    },
    {
      id: 2,
      name: 'Jack Donaghy',
      age: 40,
      is_manager: true,
      start_date: '03-05-1997',
    },
    {
      id: 3,
      name: 'Tracy Morgan',
      age: 39,
      is_manager: false,
      start_date: '07-12-2002',
    },
    {
      id: 4,
      name: 'Jenna Maroney',
      age: 40,
      is_manager: false,
      start_date: '02-28-1999',
    },
    {
      id: 5,
      name: 'Kenneth Parcell',
      age: Infinity,
      is_manager: false,
      start_date: '01-01-1970',
    },
    {
      id: 6,
      name: 'Pete Hornberger',
      age: 42,
      is_manager: true,
      start_date: '04-01-2000',
    },
    {
      id: 7,
      name: 'Frank Rossitano',
      age: 36,
      is_manager: false,
      start_date: '06-09-2004',
    },
    { id: 8, name: null, age: null, is_manager: null, start_date: null },
  ];

  return (
    <div className="App">
      <Table rows={data.projects} columns={columns} />
    </div>
  );
}
