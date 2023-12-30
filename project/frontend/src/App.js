import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import FindProject from "./pages/FindProject";
import AddProject from "./components/Projects/AddProject";
import Reports from "./pages/Reports";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Tools from "./pages/Tools";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Invoices from "./pages/Invoices";
import TasksSystem from "./components/Projects/TasksSystem"; // Your component
import Alert from "./components/layouts/Alert";
import PrivateRoute from "./components/routing/PrivateRoute";
import Posts from "./components/posts/Posts";
// import Example from './components/Example';
import ButtonAppBar from "./components/Dashboard/ButtonAppBar";
import ControlledTreeView from "./components/Sidebar/ControlledTreeView";
import Navbar from "./components/layout/Navbar";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import { LOGOUT } from "./actions/types";
import FindProjectPaged from "./pages/FindProjectPaged";
import viewproject from "./components/Projects/viewproject";
import Test from "./components/test";
import AddProjectOne from "./components/Projects/AddProjectOne";
import AddProjectTwo from "./components/Projects/AddProjectTwo";

// doing the sidebar thing
const SidebarLayout = () => (
  <div className="sidebarlayout">
    <SideBar />
    <Outlet />
  </div>
);

// if (localStorage.token) {
//   console.log('local storage token exists in App.js');
//   setAuthToken(localStorage.token);
// }

function App() {
  const isLoggedIn = 1;
  //const state = store.getState();
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  //const state = store.getState();
  console.log(
    "State in App.js is - " +
      JSON.stringify(store.getState().auth.isAuthenticated)
  );

  //if (state.isAuthenticated === true) {
  ///if (store.getState().auth.isAuthenticated !== true) {
  //if (localStorage.isAuthenticated !== 'true') {
  // if (false)
  //   //alert('if');
  //   return (
  //     <Provider store={store}>
  //       <Router>
  //         <Fragment>
  //           <Alert />
  //           <Routes>
  //             <Route path="/" element={<Login />} />
  //           </Routes>
  //         </Fragment>
  //       </Router>
  //     </Provider>
  //   );
  // } else {
  //   //alert('else');
  //   return (
  //     <Provider store={store}>
  //       <Router>
  //         <SideBar />
  //         <Routes>
  //           <Route path="/dashboard" element={<Dashboard />} />
  //           <Route path="/users" element={<Users />} />
  //           <Route path="/reports" element={<Reports />} />
  //           <Route path="/projects" element={<Projects />} />
  //           <Route path="/projects/addproject" element={<AddProject />} />
  //           <Route path="/projects/findproject" element={<FindProject />} />
  //           <Route path="/order" element={<Order />} />
  //           <Route path="/saved" element={<Saved />} />
  //           <Route path="/tools" element={<Tools />} />
  //           <Route path="*" element={<> not found</>} />
  //         </Routes>
  //       </Router>
  //     </Provider>
  //   );
  // }

  let pathName = window.location.pathname;
  let arr = pathName.toString().split("/");
  let currentPath = arr[arr.length - 1];
  console.log("current path:", currentPath);

  if (
    currentPath === "dashboard" ||
    currentPath === "addproject" ||
    currentPath === "findproject" ||
    currentPath === "TasksSystem" ||
    currentPath === "invoices"
  ) {
    return (
      <Provider store={store}>
        <Router>
          {/* <React.Fragment>
          <Navbar />
        </React.Fragment> */}
          <ButtonAppBar>
            <Login />
          </ButtonAppBar>

          {/* <ControlledTreeView></ControlledTreeView> */}

          {currentPath.length > 0}
          {/* <Routes>
          <Route element={<SidebarLayout />}> 
            <Route index element={<Home />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/addproject" element={<AddProject />} />
            <Route path="/projects/findproject" element={<FindProject />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/tools" element={<Tools />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<> not found</>} />
        </Routes> */}
        </Router>
      </Provider>
    );
  } else if (currentPath === "login") {
    return (
      <Provider store={store}>
        <Router>
          {/* <React.Fragment>
          <Navbar />
        </React.Fragment> */}
          <Login />
          {/* <ButtonAppBar>
        <Routes>
            <Route path="/" element={<Login />} />
            
            <Route
              path="/dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route path="/users" element={<PrivateRoute component={Users} />} />
            <Route
              path="/reports"
              element={<PrivateRoute component={Reports} />}
            />
            <Route
              path="/projects"
              element={<PrivateRoute component={Projects} />}
            />
            <Route
              path="/projects/addproject"
              element={<PrivateRoute component={AddProjectTwo} />}
            />
            <Route
              path="/projects/addprojectone"
              element={<PrivateRoute component={AddProjectOne} />}
            />
            <Route
              path="/projects/addprojecttwo"
              element={<PrivateRoute component={AddProjectTwo} />}
            />
            <Route
              path="/projects/findproject"
              element={<PrivateRoute component={FindProjectPaged} />}
            />
            <Route
              path="dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route
              path="/projects/findprojectpaged"
              element={<FindProjectPaged />}
            />
            <Route
              path="/viewproject"
              element={<PrivateRoute component={ViewProject} />}
            />

            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<> not found</>} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </ButtonAppBar> */}
          {/* <ControlledTreeView></ControlledTreeView> */}
          {/* <SideBar >
          <Routes>
            <Route path="/" element={<Login />} />
            
            <Route
              path="/dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route path="/users" element={<PrivateRoute component={Users} />} />
            <Route
              path="/reports"
              element={<PrivateRoute component={Reports} />}
            />
            <Route
              path="/projects"
              element={<PrivateRoute component={Projects} />}
            />
            <Route
              path="/projects/addproject"
              element={<PrivateRoute component={AddProjectTwo} />}
            />
            <Route
              path="/projects/addprojectone"
              element={<PrivateRoute component={AddProjectOne} />}
            />
            <Route
              path="/projects/addprojecttwo"
              element={<PrivateRoute component={AddProjectTwo} />}
            />
            <Route
              path="/projects/findproject"
              element={<PrivateRoute component={FindProjectPaged} />}
            />
            <Route
              path="dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route
              path="/projects/findprojectpaged"
              element={<FindProjectPaged />}
            />
            <Route
              path="/viewproject"
              element={<PrivateRoute component={ViewProject} />}
            />

            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<> not found</>} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </SideBar> */}

          {currentPath.length > 0}
          {/* <Routes>
          <Route element={<SidebarLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/addproject" element={<AddProject />} />
            <Route path="/projects/findproject" element={<FindProject />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/tools" element={<Tools />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<> not found</>} />
        </Routes> */}
        </Router>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <Router>
          {/* <React.Fragment>
          <Navbar />
        </React.Fragment> */}
          <ButtonAppBar>
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={<PrivateRoute component={Dashboard} />}
              />
              <Route
                path="/TasksSystem"
                element={<PrivateRoute component={TasksSystem} />}
              />
              <Route
                path="/users"
                element={<PrivateRoute component={Users} />}
              />
              <Route
                path="/reports"
                element={<PrivateRoute component={Reports} />}
              />
              <Route
                path="/projects"
                element={<PrivateRoute component={Projects} />}
              />
              <Route
                path="/projects/addproject"
                element={<PrivateRoute component={AddProjectTwo} />}
              />
              <Route
                path="/projects/addprojectone"
                element={<PrivateRoute component={AddProjectOne} />}
              />
              <Route
                path="/projects/addprojecttwo"
                element={<PrivateRoute component={AddProjectTwo} />}
              />
              <Route
                path="/projects/findproject"
                element={<PrivateRoute component={FindProjectPaged} />}
              />
              <Route
                path="/projects/viewproject"
                element={<PrivateRoute component={FindProjectPaged} />}
              />
              <Route
                path="dashboard"
                element={<PrivateRoute component={Dashboard} />}
              />
              <Route
                path="/projects/findprojectpaged"
                element={<FindProjectPaged />}
              />
              {/* <Route
              path="/viewproject"
              element={<PrivateRoute component={ViewProject} />}
            /> */}
              <Route path="/TasksSystem" element={Dashboard} />

              <Route path="/order" element={<Order />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/login" element={<Login />} />
              <Route path="/test" element={<Test />} />
              <Route path="*" element={<> not found</>} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </ButtonAppBar>
          <ControlledTreeView></ControlledTreeView>
          {/* <SideBar >
          <Routes>
            <Route path="/" element={<Login />} />
            
            <Route
              path="/dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route path="/users" element={<PrivateRoute component={Users} />} />
            <Route
              path="/reports"
              element={<PrivateRoute component={Reports} />}
            />
            <Route
              path="/projects"
              element={<PrivateRoute component={Projects} />}
            />
            <Route
              path="/projects/addproject"
              element={<PrivateRoute component={AddProjectTwo} />}
            />
            <Route                                                                                                                                                                                                                                                                                                                 
              path="/projects/addprojectone"
              element={<PrivateRoute component={AddProjectOne} />}
            />
            <Route
              path="/projects/addprojecttwo"
              element={<PrivateRoute component={AddProjectTwo} />}
            />
            <Route
              path="/projects/findproject"
              element={<PrivateRoute component={FindProjectPaged} />}
            />
            <Route
              path="dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route
              path="/projects/findprojectpaged"
              element={<FindProjectPaged />}
            />
            <Route
              path="/viewproject"
              element={<PrivateRoute component={ViewProject} />}
            />

            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<> not found</>} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </SideBar> */}

          {currentPath.length > 0}
          {/* <Routes>
          <Route element={<SidebarLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/addproject" element={<AddProject />} />
            <Route path="/projects/findproject" element={<FindProject />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/tools" element={<Tools />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<> not found</>} />
        </Routes> */}
        </Router>
      </Provider>
    );
  }
}

export default App;
