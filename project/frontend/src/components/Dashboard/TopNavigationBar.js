import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Dashboard from "./Dashboard";
import Projects from "../../pages/Projects";
import FinancialContent from "../Projects/FinancialContent";
import AddProject from "../Projects/AddProject";
import AddProjectTwo from "../Projects/AddProjectTwo";
import FindProject from "../../pages/FindProject";
import FindProjectPaged from "../../pages/FindProjectPaged";
import miller_logo from "../Dashboard/miller_logo.png";
import Logout from "../auth/Logout";
import Login from "../auth/login";
import Viewproject from "../Projects/viewproject";
import ControlledTreeView from "../Sidebar/ControlledTreeView";

function currentSideBar(activeSideBar) {
  console.log("currentSideBar called- ", activeSideBar);

  switch (activeSideBar) {
    case "projects":
      console.log("Side Navigation - Projects");
      return <ControlledTreeView />;

    default:
      return <></>;
  }
}

export default function TopNavigationBar({ activeSideBar }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [logoRotation, setLogoRotation] = React.useState(0);

  console.log("Top navigation bar- ", activeSideBar);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoClick = () => {
    setLogoRotation((rotation) => rotation + 90);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#467eac", fontFamily: "Helvetica" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img
              src={miller_logo}
              alt="Logo"
              style={{ transform: `rotate(${logoRotation}deg)` }}
              onClick={handleLogoClick}
            />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ marginRight: "50px", fontFamily: "Helvetica" }}
          >
            <NavLink
              to="/dashboard"
              style={{ textDecoration: "none", color: "inherit" }}
              activeClassName="active"
            >
              Dashboard
            </NavLink>
          </Typography>

          <div onMouseEnter={handleClick} onMouseLeave={handleClose}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, marginRight: "50px", fontFamily: "Helvetica" }}
            >
              <NavLink
                to="/projects"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontFamily: "Helvetica",
                }}
                activeClassName="active"
              >
                Projects
              </NavLink>
            </Typography>

            <Menu
              id="projects-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "projects-menu",
              }}
            >
              <MenuItem onClick={handleClose}>
                <NavLink
                  to="/projects/addproject"
                  style={{ textDecoration: "none", color: "inherit" }}
                  activeClassName="active"
                >
                  Add Projects
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink
                  to="/projects/findproject"
                  style={{ textDecoration: "none", color: "inherit" }}
                  activeClassName="active"
                >
                  Find Projects
                </NavLink>
              </MenuItem>
            </Menu>
          </div>

          <Typography
            variant="h6"
            component="div"
            sx={{ marginRight: "50px", fontFamily: "Helvetica" }}
          >
            <NavLink
              to="/proposals"
              style={{ textDecoration: "none", color: "inherit" }}
              activeClassName="active"
            >
              Proposals
            </NavLink>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ marginRight: "50px", fontFamily: "Helvetica" }}
          >
            <NavLink
              to="/financial"
              style={{ textDecoration: "none", color: "inherit" }}
              activeClassName="active"
            >
              Financial
            </NavLink>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ marginRight: "50px", fontFamily: "Helvetica" }}
          >
            <NavLink
              to="/tasks"
              style={{ textDecoration: "none", color: "inherit" }}
              activeClassName="active"
            >
              Tasks
            </NavLink>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ marginRight: "50px", fontFamily: "Helvetica" }}
          >
            <NavLink
              to="/invoices"
              style={{ textDecoration: "none", color: "inherit" }}
              activeClassName="active"
            >
              Invoices
            </NavLink>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ marginRight: "50px", fontFamily: "Helvetica" }}
          >
            <NavLink
              to="/tools"
              style={{ textDecoration: "none", color: "inherit" }}
              activeClassName="active"
            >
              Tools
            </NavLink>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ marginRight: "50px", fontFamily: "Helvetica" }}
          >
            <NavLink
              to="/users"
              style={{ textDecoration: "none", color: "inherit" }}
              activeClassName="active"
            >
              Users
            </NavLink>
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "Helvetica" }}
          ></Typography>
          <NavLink
            to="/logout"
            style={{ textDecoration: "none", color: "inherit" }}
            activeClassName="active"
          >
            Logout
          </NavLink>
        </Toolbar>
      </AppBar>

      {/* {currentSideBar(activeSideBar)} */}
      {/* <ControlledTreeView /> */}

      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/proposals" />
        <Route path="/financial" element={<FinancialContent />} />
        <Route path="/projects/addproject" element={<AddProjectTwo />} />
        <Route path="/projects/findproject" element={<FindProjectPaged />} />
        <Route path="/projects/viewproject" element={<Viewproject />} />
        <Route path="/tasks" />
        <Route path="/tools" />
        <Route path="/users" />
        <Route path="/logout" element={<Logout />} />
      </Routes> */}
    </Box>
  );
}
