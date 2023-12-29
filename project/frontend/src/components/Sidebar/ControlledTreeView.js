import { PropTypes } from "prop-types";
import React, { useState, useEffect } from "react";
import { getProject } from "../../actions/projects";
import { getProjectItems } from "../../actions/projectItem";
import { getProjectClasses } from "../../actions/projectClass";
import { getStages } from "../../actions/projectStages";
import { getStatuses } from "../../actions/projectStatus";
import { getTypes } from "../../actions/projectTypes";
import GeneralInfo from "../Projects/GeneralInfo";
import FinancialContent from "../Projects/FinancialContent";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Scheduling from "../Projects/Scheduling";
import Tasks from "../Projects/Tasks";
import AddTask from "../Projects/AddTask";
import PricingInfo from "../Projects/PricingInfo";
import CustomerNotes from "../Projects/CustomerNotes";
import Equipment from "../Projects/Equipment";
import AIA from "../Projects/AIA";
import PricingElements from "../Projects/PricingElements";
import PermitsInspections from "../Projects/PermitsInspections";
import CloseoutDocuments from "../Projects/CloseoutDocuments";
import WarrantyLettersandFinalLiens from "../Projects/WarrantyLettersandFinalLiens";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import viewproject from "../Projects/viewproject";
import { getWarehouses } from "../../actions/warehouses";
import { getManagers } from "../../actions/managers";
import { getCustomerApprovals } from "../../actions/customerApproval";
import Scorecard from "../Projects/Scorecard";

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

const ControlledTreeView = ({
  getProject,
  project,
  getProjectItems,
  projectItems,
  getWarehouses,
  warehouses,
  getProjectClasses,
  projectClasses,
  getManagers,
  managers,
  getStages,
  projectStages,
  getStatuses,
  projectStatuses,
  getTypes,
  projectTypes,
  getCustomerApprovals,
  customerApprovals,
}) => {
  const { state } = useLocation();
  console.log("Id to fetch project in controlled is-", state);

  useEffect(() => {
    getProject(state);
    getProjectItems();
    getWarehouses(state);
    getProjectClasses();
    getManagers();
    getStages();
    getStatuses();
    getTypes();
    getCustomerApprovals();
  }, [
    getProject,
    getProjectItems,
    getWarehouses,
    getProjectClasses,
    getManagers,
    getStages,
    getStatuses,
    getTypes,
    getCustomerApprovals,
    state,
  ]);

  console.log(project);
  console.log(projectItems);
  console.log(warehouses);

  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState([]);
  const [currentContent, setCurrentContent] = useState(null);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const tabIndexMap = {
    22: 0, // Pricing Summary
    23: 1, // Pricing Elements
    24: 2, // Accounts Receivable
    25: 3, // Accounts Payable
    // ...other mappings for different tabs
  };

  const handleGeneralInfoClick = (itemId) => {
    let content = null;
    let newExpanded = [...expanded];

    // Add logic to handle expanding the tree node
    if (!expanded.includes(itemId)) {
      newExpanded = [...expanded, itemId];
    }
    // if (selected.includes(itemId)) {
    //   return;
    // }
    switch (itemId) {
      case "2":
        content = (
          <GeneralInfo
            project={project}
            projectItems={projectItems}
            warehouses={warehouses}
            projectClasses={projectClasses}
            managers={managers}
            projectStages={projectStages}
            projectStatuses={projectStatuses}
            projectTypes={projectTypes}
            customerApprovals={customerApprovals}
          />
        );
        break;
      case "3":
        content = <Scheduling project={project} />;
        break;
      case "4":
        content = <Tasks project={project} />;
        // content=<AddTask/>;
        break;
      case "5":
        content = <FinancialContent />;
        if (expanded.includes("6")) {
          // If already expanded, collapse it
          newExpanded = newExpanded.filter((id) => id !== "6");
        } else {
          newExpanded.push("6"); // "6" is the nodeId of the Financial tree
        }
        break;
      case "6":
        content = <CustomerNotes project={project} />;
        break;
      case "8":
        content = <PricingElements />;
        break;
      case "10":
        content = <Equipment />;
        break;
      case "13":
        content = <Equipment />;
        break;
      case "14":
        content = <PricingElements />;
        break;
      case "15":
        content = <PermitsInspections />;
        break;
      case "18":
        content = <CloseoutDocuments project={project} />;
        break;
      case "19":
        content = <AIA />;
        break;
      case "20":
        content = <WarrantyLettersandFinalLiens />;
        break;
      case "21":
        content = <Scorecard project={project} />;
        break;
      case "22":
        content = <FinancialContent />;
        break;
      case "23":
        content = <PricingElements />;
        break;
      case "24":
        content = <FinancialContent />;
        break;
      case "25":
        content = <FinancialContent />;
        break;
      case "26":
        content = <FinancialContent />;
        break;
      default:
        content = null; // Set a default value if itemId doesn't match any case
        break;
    }

    if (Object.keys(tabIndexMap).includes(itemId)) {
      const tabIndex = tabIndexMap[itemId];
      content = <FinancialContent selectedTabIndex={tabIndex} />;
    }

    setCurrentContent(content);
    // setSelected(itemId);

    // Update 'selected' only if it's not "Financial"
    if (itemId !== "5") {
      setSelected(itemId);
    }

    setExpanded(newExpanded);
  };

  const TreeItem = ({ nodeId, children, label, onClick, selected }) => {
    const isExpanded = expanded.includes(nodeId);
    const handleToggle = () => {
      if (isExpanded) {
        setExpanded(expanded.filter((id) => id !== nodeId));
      } else {
        setExpanded([...expanded, nodeId]);
      }
    };

    return (
      <div
        style={{
          marginLeft: 16,
          backgroundColor: selected ? "rgb(177,196,216,0.5)" : "transparent",
        }}
      >
        <div onClick={onClick ? onClick : handleToggle}>
          {isExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          <span>{label}</span>
        </div>
        {isExpanded && <div>{children}</div>}
      </div>
    );
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          height: "100vh",
          width: "268px",
          position: "absolute",
          left: 0,
          top: 59,
          backgroundColor: "#467eac",
          color: "white",
          fontFamily: "Helvetica",
        }}
      >
        <div
          style={{ marginBottom: 10, backgroundColor: "rgb(177,196,216,0.5)" }}
        >
          <p
            style={{
              marginLeft: "26px",
              marginTop: "10px",
              fontSize: "1.25rem",
              fontWeight: "bold",
              fontFamily: "Helvetica",
            }}
          >
            {" "}
            Staten Island, NY #316
          </p>
          <p
            style={{
              marginLeft: "26px",
              marginTop: "-25px",
              fontSize: "1.25rem",
              fontWeight: "bold",
              fontFamily: "Helvetica",
            }}
          >
            Auxiliary Condenser
          </p>
        </div>
        <TreeItem nodeId="1" label="Project Info">
          <TreeItem
            nodeId="2"
            label="General Info"
            onClick={() => handleGeneralInfoClick("2")}
            selected={selected === "2"}
          />
          {/* <TreeItem
            nodeId="3"
            label="Scheduling"
            onClick={() => handleGeneralInfoClick("3")}
            selected={selected === "3"}
          />
          <TreeItem
            nodeId="4"
            label="Task"
            onClick={() => handleGeneralInfoClick("4")}
            selected={selected === "4"}
          /> */}
          <TreeItem
            nodeId="21"
            label="Project Scope"
            onClick={() => handleGeneralInfoClick("21")}
            selected={selected === "21"}
          />

          {/* <TreeItem nodeId="6" label="Customer Notes" onClick={() => handleGeneralInfoClick('6')} selected={selected === '6'}/> */}
        </TreeItem>
        <TreeItem nodeId="7" label="Proposal">
          <TreeItem
            nodeId="8"
            label="Price Estimate Summary"
            onClick={() => handleGeneralInfoClick("8")}
            selected={selected === "8"}
          />
          <TreeItem nodeId="9" label="Worksheet" />
          {/* <TreeItem
            nodeId="10"
            label="Equipment"
            onClick={() => handleGeneralInfoClick("10")}
            selected={selected === "10"}
          /> */}
          <TreeItem nodeId="11" label="Cost Comparison" />
        </TreeItem>
        <TreeItem
          nodeId="3"
          label="Scheduling"
          onClick={() => handleGeneralInfoClick("3")}
          selected={selected === "3"}
        />
        <TreeItem
          nodeId="6"
          label="Financial"
          onClick={() => handleGeneralInfoClick("5")}
          selected={selected === "5"}
        >
          <TreeItem
            nodeId="22"
            label="Pricing Summary"
            onClick={() => handleGeneralInfoClick("22")}
            selected={selected === "22"}
          />
          <TreeItem
            nodeId="23"
            label="Pricing Elements"
            onClick={() => handleGeneralInfoClick("23")}
            selected={selected === "23"}
          />
          <TreeItem
            nodeId="24"
            label="Accounts Receivable"
            onClick={() => handleGeneralInfoClick("24")}
            selected={selected === "24"}
          />
          <TreeItem
            nodeId="25"
            label="Accounts Payable"
            onClick={() => handleGeneralInfoClick("25")}
            selected={selected === "25"}
          />
          <TreeItem
            nodeId="26"
            label="AIA Cost Items"
            onClick={() => handleGeneralInfoClick("21")}
            selected={selected === "21"}
          />
        </TreeItem>
        {/* <TreeItem
          nodeId="6"
          label="Financial"
          onClick={() => handleGeneralInfoClick("5")}
          selected={selected === "5"}
        /> */}
        <TreeItem
          nodeId="15"
          label="Permits/Inspections"
          onClick={() => handleGeneralInfoClick("15")}
          selected={selected === "15"}
        />
        <TreeItem
          nodeId="4"
          label="Task"
          onClick={() => handleGeneralInfoClick("4")}
          selected={selected === "4"}
        />
        <TreeItem
          nodeId="13"
          label="Equipment"
          onClick={() => handleGeneralInfoClick("13")}
          selected={selected === "13"}
        />
        {/* <TreeItem
          nodeId="14"
          label="Pricing Elements"
          onClick={() => handleGeneralInfoClick("14")}
          selected={selected === "14"}
        /> */}

        {/* <TreeItem nodeId="16" label="Project Scope" /> */}
        <TreeItem nodeId="17" label="Closeout">
          <TreeItem
            nodeId="18"
            label="Closeout Documents"
            onClick={() => handleGeneralInfoClick("18")}
            selected={selected === "18"}
          />
          <TreeItem
            nodeId="19"
            label="AIA"
            onClick={() => handleGeneralInfoClick("19")}
            selected={selected === "19"}
          />
          <TreeItem
            nodeId="20"
            label="Warranty Letters and Final Liens"
            onClick={() => handleGeneralInfoClick("20")}
            selected={selected === "20"}
          />
          {/* <TreeItem nodeId="21" label="Scorecard" /> */}
        </TreeItem>
        <TreeItem nodeId="21" label="Scorecard" />
      </div>

      <div style={{ marginTop: "2.5%", marginLeft: "20%" }}>
        {currentContent ? <div>{currentContent}</div> : <div></div>}
      </div>
    </div>
  );
};

ControlledTreeView.propTypes = {
  getProject: PropTypes.func.isRequired,
  getProjectItems: PropTypes.func.isRequired,
  getWarehouses: PropTypes.func.isRequired,
  getProjectClasses: PropTypes.func.isRequired,
  getManagers: PropTypes.func.isRequired,
  getStages: PropTypes.func.isRequired,
  getStatuses: PropTypes.func.isRequired,
  getTypes: PropTypes.func.isRequired,
  getCustomerApprovals: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project,
  projectItems: state.projectItems,
  warehouses: state.warehouses,
  projectClasses: state.projectClasses,
  managers: state.managers,
  projectStages: state.projectStages,
  projectStatuses: state.projectStatuses,
  projectTypes: state.projectTypes,
  customerApprovals: state.customerApprovals,
});

export default connect(mapStateToProps, {
  getProject,
  getProjectItems,
  getWarehouses,
  getProjectClasses,
  getManagers,
  getStages,
  getStatuses,
  getTypes,
  getCustomerApprovals,
})(ControlledTreeView);
