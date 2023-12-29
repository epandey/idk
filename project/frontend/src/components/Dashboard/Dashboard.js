import React, { useState } from 'react';
import CardView from '../CardView/CardView';
import './Dashboard.css';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import CircleIcon from '@mui/icons-material/Circle';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandableTable from '../ExpandableTable/ExpandableTable';

// newly added
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import ProjectsDashboard from './projectsDashboard';
import { Navigate } from 'react-router-dom';

const invoiceInfo = [
  {
    projectName: 'Project 1',
    customer: 'Costco',
    total: 9,
    children: [
      {
        pricingElement: 'PE1',
        pending: '200$',
        invoices: '5',
      },
      {
        pricingElement: 'PE2',
        pending: '400$',
        invoices: '15',
      },
    ],
  },
  {
    projectName: 'Project 2',
    customer: 'Costco',
    total: 9,
    children: [
      {
        pricingElement: 'PE1',
        pending: '900$',
        invoices: '5',
      },
      {
        pricingElement: 'PE2',
        pending: '1400$',
        invoices: '15',
      },
    ],
  },
];

function generateInvoiceBody() {
  return invoiceInfo.map((item, index) => (
    <GenerateInvoiceBodyRow item={item} key={index} />
  ));
}

function GenerateInvoiceBodyRow({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {item.projectName}
        </TableCell>
        <TableCell align="right">{item.customer}</TableCell>
        <TableCell align="right">{item.total}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Info
              </Typography>

              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>PE Title</TableCell>
                    <TableCell>Invoices Pending</TableCell>
                    <TableCell align="right">Invoices Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {item.children.map((ele, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {ele.pricingElement}
                      </TableCell>
                      <TableCell>{ele.pending}</TableCell>
                      <TableCell align="right">{ele.invoices}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
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

// const Dashboard = ({
//   getCurrentProfile,
//   deleteAccount,
//   auth: { user },
//   profile: { profile, loading },
// }) => {
//   useEffect(() => {
//     getCurrentProfile();
//   }, []);

//   return (
//     <div className="Dashboard">
//       <CardView
//         title={'Assigned Projects to '}
//         children={
//           <ProjectsBody
//             bodyTitle={['Name', 'Score', 'Status']}
//             content={[
//               { name: 'Project 1', score: 'red', status: 'Closeout' },
//               { name: 'Project 2', score: 'green', status: 'Closeout' },
//               { name: 'Project 3', score: 'red', status: 'Closeout' },
//               { name: 'Project 4', score: 'green', status: 'Closeout' },
//             ]}
//           />
//         }
//       />

//       <CardView title={'Calendar'} />

//       {invoiceInfo && Array.isArray(invoiceInfo) && (
//         <CardView
//           title={'Invoices'}
//           children={
//             <ExpandableTable
//               tableBody={generateInvoiceBody()}
//               header={['Project', 'Customer', 'No. of Pricing Elements']}
//             />
//           }
//         />
//       )}
//     </div>
//   );
// };

// Dashboard.propTypes = {
//   getCurrentProfile: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   profile: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   profle: state.profile,
// });

// export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

const Dashboard = ({
  getCurrentProfile,
  auth: { auth },
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  console.log('Authentication state is- ', auth);

  // if (!auth.isAuthenticated || auth.isAuthenticated === false) {
  //   console.log('Not logged in');
  //   return <Navigate to="/login" />;
  // }
  return (
    <section>
      {/* <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p> */}
      {profile !== null ? (
        <div className="Dashboard">
          <CardView
            title={'Assigned Projects to '}
            children={
              <>
                <ProjectsDashboard />
              </>
            }
          />
          <CardView title={'Calendar'} />

          {invoiceInfo && Array.isArray(invoiceInfo) && (
            <CardView
              title={'Invoices'}
              children={
                <ExpandableTable
                  tableBody={generateInvoiceBody()}
                  header={['Project', 'Customer', 'No. of Pricing Elements']}
                />
              }
            />
          )}
        </div>
      ) : (
        <>
          <Spinner />
        </>
      )}
    </section>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
