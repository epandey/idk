import React, { useState, useEffect } from "react";
import { Card, CardHeader } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./style.css";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AddPricingElement = ({ handleCloseModal, rowData = null }) => {
  console.log("here");
  console.log(rowData);
  const [taskTitle, setTaskTitle] = useState(rowData ? rowData.title : "");
  const [taskDescription, setTaskDescription] = useState(
    rowData ? rowData.briefDescription : ""
  );
  const [PE, setPE] = useState(rowData ? rowData.id : "2");
  const [PEType, setPEType] = useState(rowData ? rowData.PEType : "");
  const [status, setStatus] = useState(rowData ? rowData.status : "");
  const [subNames, setSubNames] = useState(rowData ? rowData.subNames : "");
  const [subsSubmittedDate, setSubsSubmittedDate] = useState(
    rowData ? rowData.subsSubmittedDate : ""
  );
  const [customerGroup, setCustomerGroup] = useState(
    rowData ? rowData.customerGroup : ""
  );
  const [submitDate, setSubmitDate] = useState(
    rowData ? rowData.submissionDate : ""
  );
  const [approvedDate, setApprovedDate] = useState(
    rowData ? rowData.approvedDate : ""
  );
  const [cost, setCost] = useState(rowData ? rowData.cost : "");
  const [sell, setSell] = useState(rowData ? rowData.sell : "");
  const [invoiceStatus, setInvoiceStatus] = useState(
    rowData ? rowData.invoiceStatus : ""
  );
  const [subInvoiceStatus, setSubInvoiceStatus] = useState(
    rowData ? rowData.subInvoiceStatus : ""
  );
  const [mcsInvoiceNumber, setMcsInvoiceNumber] = useState(
    rowData ? rowData.mcsInvoiceNumber : ""
  );
  const [subInvoiceNumber, setSubInvoiceNumber] = useState(
    rowData ? rowData.subInvoiceNumber : ""
  );
  const [AIACOPNumber, setAIACOPNumber] = useState(
    rowData ? rowData.AIACOPNumber : ""
  );
  const [WSCONumber, setWSCONumber] = useState(
    rowData ? rowData.WSCONumber : ""
  );
  const [PENotes, setPENotes] = useState(rowData ? rowData.notes : "");

  const [open, setOpen] = useState(false);

  // Determine if the component is in 'edit' mode or 'add' mode
  const isEditMode = rowData !== null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object representing the task data
    const taskData = {
      taskTitle,
      taskDescription,
      PE,
      PEType,
      status,
      subNames,
      subsSubmittedDate,
      customerGroup,
      submitDate,
      approvedDate,
      cost,
      sell,
      invoiceStatus,
      subInvoiceStatus,
      mcsInvoiceNumber,
      subInvoiceNumber,
      AIACOPNumber,
      WSCONumber,
      PENotes,
    };
    const apiUrl = isEditMode
      ? "/api/pricing-elements/update"
      : "/api/pricing-elements/add";
    const method = isEditMode ? "PUT" : "POST";
    // Check if adding new or editing existing element
    if (isEditMode) {
      // Logic to update an existing pricing element
      // API call to update the data in the database
      console.log("Editing Pricing Element:", taskData);
      // Replace with your API endpoint for updating
      const updateApiUrl = "/api/pricing-elements/update";

      fetch(updateApiUrl, {
        method: "PUT", // or "POST" based on your backend requirement
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Pricing Element Updated Successfully:", data);
          // Handle success (e.g., show a success message, update UI state)
        })
        .catch((error) => {
          console.error("Error updating pricing element:", error);
          // Handle errors (e.g., show an error message)
        });
    } else {
      // Logic to add a new pricing element
      // API call to add new data to the database
      console.log("Adding New Pricing Element:", taskData);
      // Replace with your API endpoint for adding
      const addApiUrl = "/api/pricing-elements/add";

      fetch(addApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Pricing Element Added Successfully:", data);
          // Handle success (e.g., show a success message, update UI state)
        })
        .catch((error) => {
          console.error("Error adding pricing element:", error);
          // Handle errors (e.g., show an error message)
        });
    }
    resetForm();
    // Close the modal after handling form submission
    handleCloseModal();
  };
  // const handleCloseModal = () => {
  //   // Reset state variables to their initial values
  //   setTaskTitle("");
  //   setTaskDescription("");
  //   setPE("2"); // or whatever your default value is
  //   setPEType("");
  //   setStatus("");
  //   setSubNames("");
  //   setSubsSubmittedDate("");
  //   setCustomerGroup("");
  //   setSubmitDate("");
  //   setApprovedDate("");
  //   setCost("");
  //   setSell("");
  //   setInvoiceStatus("");
  //   setSubInvoiceStatus("");
  //   setMcsInvoiceNumber("");
  //   setSubInvoiceNumber("");
  //   setAIACOPNumber("");
  //   setWSCONumber("");
  //   setPENotes("");

  //   // Close the modal
  //   setOpen(false);
  // };
  useEffect(() => {
    if (rowData) {
      setTaskTitle(rowData.title);
      setTaskDescription(rowData.description);
      setPE(rowData.PE);
      setPEType(rowData.PEType);
      setStatus(rowData.status);
      setSubNames(rowData.subNames);
      setSubsSubmittedDate(rowData.subsSubmittedDate);
      setCustomerGroup(rowData.customerGroup);
      setSubmitDate(rowData.submitDate);
      setApprovedDate(rowData.approvedDate);
      setCost(rowData.cost);
      setSell(rowData.sell);
      setInvoiceStatus(rowData.invoiceStatus);
      setSubInvoiceStatus(rowData.subInvoiceStatus);
      setMcsInvoiceNumber(rowData.mcsInvoiceNumber);
      setSubInvoiceNumber(rowData.subInvoiceNumber);
      setAIACOPNumber(rowData.AIA_COP_Number);
      setWSCONumber(rowData.WS_CO_Number);
      setPENotes(rowData.PENotes);
    } else {
      // Reset the state for add mode
      resetForm();
    }
  }, [rowData]);

  const statusOptions = [
    "",
    "Review",
    "Preparing",
    "Submitted",
    "Approved",
    "Rejected",
    "Complete",
  ];

  const customerGroupOptions = [
    "",
    "CostCo Facilities",
    "CostCo Procurement",
    "CostCo Refrigeration",
    "CostCo Warehouse",
    "MCS (non-billable)",
    "MG2",
    "Vendor",
  ];

  const PETypeOptions = ["", "Project", "Labor", "Materials", "AIA"];
  const mcsInvoiceStatusOptions = ["", "No", "Yes", "N/A"];
  const subInvoiceStatusOptions = ["", "No", "Yes", "N/A"];

  const handlePETypeChange = (e) => {
    const selectedPEType = e.target.value;
    setPEType(selectedPEType);

    // If the selected PE Type is "Project", automatically set the Status to "Preparing"
    if (selectedPEType === "Project") {
      setStatus("Preparing");
    }
  };

  const handleCustomerGrpTypeChange = (e) => {
    const selectedCustGrpType = e.target.value;
    setCustomerGroup(selectedCustGrpType);

    if (selectedCustGrpType === "MCS (non-billable)") {
      setInvoiceStatus("N/A");
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    //resetForm();
    setOpen(false);
    //handleCloseModal(); // Assuming this is a prop function to handle closing the modal
  };

  // Function to reset the state
  const resetForm = () => {
    console.log("In reset Form");
    setTaskTitle("");
    setTaskDescription("");
    setPE("2");
    setPEType("");
    setStatus("");
    setSubNames("");
    setSubsSubmittedDate("");
    setCustomerGroup("");
    setSubmitDate("");
    setApprovedDate("");
    setCost("");
    setSell("");
    setInvoiceStatus("");
    setSubInvoiceStatus("");
    setMcsInvoiceNumber("");
    setSubInvoiceNumber("");
    setAIACOPNumber("");
    setWSCONumber("");
    setPENotes("");

    console.log(cost);
  };

  const handleConfirmClose = () => {
    // Add your logic for when the user confirms the close action
    console.log("User confirmed close");
    resetForm();
    setOpen(false);
    // If you need to close the pricing element popup, trigger that action here
    handleCloseModal();
  };

  return (
    <div className="card-container-style">
      <Card className="card-style">
        {/* <CardHeader
          className="card-header-style"
          title={
            <h1 className="card-header-title-style">Add Pricing Element</h1>
          }
          titleTypographyProps={{ variant: "h6" }}
          action={
            <>
              <div>
                <Button
                  variant="contained"
                  className="button-style"
                  type="submit" // This ensures the button triggers the form's onSubmit event
                >
                  Save Changes
                </Button>
              </div>
              <div>
                {
                  <IconButton
                    aria-label="close"
                    style={{ color: "red", outline: "none" }}
                    className="close-button"
                    onClick={handleClickOpen}
                  >
                    <CloseIcon />
                  </IconButton>
                }
              </div>
            </>
          }
        ></CardHeader> */}

        <CardHeader
          className="card-header-style"
          title={
            <div className="header-content">
              <h1 className="card-header-title-style">
                {isEditMode ? "Edit Pricing Element" : "Add Pricing Element"}
              </h1>
              <Button
                variant="contained"
                className="button-style"
                type="submit"
              >
                Save Changes
              </Button>
              <Button
                aria-label="close"
                className="close-button-style"
                onClick={handleClickOpen}
              >
                Close
                {/* <CloseIcon /> */}
              </Button>
            </div>
          }
          titleTypographyProps={{ variant: "h6" }}
        />
        <form onSubmit={handleSubmit}>
          <div className="grid-container-style" style={{ padding: "5px" }}>
            <table
              sx={{ maxWidth: 950, border: "none" }}
              style={{ border: "grey" }}
              aria-label="simple table"
            >
              <colgroup>
                <col style={{ width: "14%" }} />
                <col style={{ width: "25%" }} />
                <col style={{ width: "15%" }} />
                <col style={{ width: "25%" }} />
              </colgroup>
              <tbody>
                {/* PE Type */}
                <tr>
                  <td className="border-grey">
                    <div className="flex-container-style">
                      <label className="labelStyle">PE#:</label>
                    </div>
                  </td>
                  <td className="border-grey">
                    <input
                      type="text"
                      value={PE}
                      onChange={(e) => setPE(e.target.value)}
                      className="input-style"
                    />
                  </td>{" "}
                  <td className="border-grey">
                    <div className="flex-container-style">
                      <label className="labelStyle">Status:</label>
                    </div>
                  </td>
                  <td className="border-grey">
                    <select
                      type="text"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="input-style"
                    >
                      {statusOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>

                {/* Task Title */}
                <tr className="no-margin-bottom border-grey">
                  <td className="border-grey">
                    <div>
                      <label className="labelStyle">Title:</label>
                    </div>
                  </td>
                  <td className="border-grey wide-cell" colspan="3">
                    <div>
                      <input
                        type="text"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        className="input-style"
                      />
                    </div>
                  </td>
                </tr>
                {/* Task Description */}
                <tr className="no-margin-bottom border-grey">
                  <td className="border-grey">
                    <div>
                      <label className="labelStyle">Description:</label>
                    </div>
                  </td>
                  <td className="border-grey wide-cell" colspan="3">
                    <div>
                      <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className="textarea-style"
                      ></textarea>
                    </div>
                  </td>
                </tr>
                {/* Sub Names */}
                <tr className="no-margin-bottom border-grey">
                  <td className="border-grey">
                    <div>
                      <label className="labelStyle">Sub Names(s):</label>
                    </div>
                  </td>
                  <td className="border-grey wide-cell" colspan="3">
                    <div>
                      <input
                        type="text"
                        value={subNames}
                        onChange={(e) => setSubNames(e.target.value)}
                        className="input-style"
                      />
                    </div>
                  </td>
                </tr>
                {/* Customer Group */}
                <tr>
                  <td className="no-margin-bottom border-grey">
                    <div>
                      <label className="labelStyle">Customer Group:</label>
                    </div>
                  </td>
                  <td className="border-grey wide-cell" colspan="3">
                    <div>
                      <select
                        type="text"
                        value={customerGroup}
                        onChange={handleCustomerGrpTypeChange}
                        className="input-style"
                      >
                        {customerGroupOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </td>
                </tr>
                {/* PE Number */}

                {/* Task Status */}

                {/* Subs Submitted Date */}

                <tr>
                  <td className="border-grey">
                    <div className="flex-container-style">
                      <label className="labelStyle">PE Type:</label>
                    </div>
                  </td>
                  <td className="border-grey">
                    <select
                      type="text"
                      value={PEType}
                      onChange={handlePETypeChange}
                      className="input-style"
                    >
                      {PETypeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="border-grey">
                    <div className="flex-container-style">
                      <label className="labelStyle">Subs Submitted Date:</label>
                    </div>
                  </td>
                  <td className="border-grey">
                    <input
                      type="text"
                      value={subsSubmittedDate}
                      onChange={(e) => setSubsSubmittedDate(e.target.value)}
                      className="input-style"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border-grey">
                    <div className="flex-container-style">
                      <label className="labelStyle">Submit Date:</label>
                    </div>
                  </td>
                  <td className="border-grey">
                    <input
                      type="text"
                      value={submitDate}
                      onChange={(e) => setSubmitDate(e.target.value)}
                      className="input-style"
                    />
                  </td>
                  <td className="border-grey">
                    <div className="flex-container-style">
                      <label className="labelStyle">Approved Date:</label>
                    </div>
                  </td>
                  <td className="border-grey">
                    <input
                      value={approvedDate}
                      onChange={(e) => setApprovedDate(e.target.value)}
                      className="input-style"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border-grey">
                    <div className="flex-container-style">
                      <label className="labelStyle">Cost:</label>
                    </div>
                  </td>
                  <td className="border-grey">
                    <input
                      value={cost}
                      onChange={(e) => setCost(e.target.value)}
                      className="input-style"
                    />
                  </td>
                  <td className="border-grey">
                    <div className="flex-container-style">
                      <label className="labelStyle">Sell:</label>
                    </div>
                  </td>
                  <td className="border-grey">
                    <input
                      value={sell}
                      onChange={(e) => setSell(e.target.value)}
                      className="input-style"
                    />
                  </td>
                </tr>

                {/* Cost */}

                {/* Sell */}

                {/* ******************** */}
                {/* MCS Invoice Status and Sub Invoice Status */}
                <tr>
                  <td className="border-grey">
                    <div className="flex-container-style">
                      <label className="labelStyle">AR Status:</label>
                    </div>
                  </td>
                  <td className="border-grey">
                    <select
                      type="text"
                      value={invoiceStatus}
                      onChange={(e) => setInvoiceStatus(e.target.value)}
                      className="input-style"
                    >
                      {mcsInvoiceStatusOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="border-grey">
                    <div className="flex-container-style">
                      <label className="labelStyle">AP Status:</label>
                    </div>
                  </td>
                  <td className="border-grey">
                    <select
                      type="text"
                      value={subInvoiceStatus}
                      onChange={(e) => setSubInvoiceStatus(e.target.value)}
                      className="input-style"
                    >
                      {subInvoiceStatusOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>

                {/* MCS Invoice # and Sub Invoice # */}
                <tr>
                  <td className="border-grey">
                    <div className="flex-container-style">
                      <label className="labelStyle">AR Invoice #:</label>
                    </div>
                  </td>
                  <td className="border-grey">
                    <input
                      type="text"
                      value={mcsInvoiceNumber}
                      onChange={(e) => setMcsInvoiceNumber(e.target.value)}
                      className="input-style"
                    />
                  </td>
                  <td className="border-grey">
                    <div className="flex-container-style">
                      <label className="labelStyle">AP Invoice #:</label>
                    </div>
                  </td>
                  <td className="border-grey">
                    <input
                      type="text"
                      value={subInvoiceNumber}
                      onChange={(e) => setSubInvoiceNumber(e.target.value)}
                      className="input-style"
                    />
                  </td>
                </tr>
                {/* ******************** */}

                {/* MCS Invoice Status */}

                {/* Sub Invoice Status */}

                {/* ******************** */}

                {/* ******************** */}

                {/* AIA COP Number */}
                <tr>
                  <td className="border-grey">
                    <div className="flex-container-style">
                      <label className="labelStyle">AIA COP #:</label>
                    </div>
                  </td>
                  <td className="border-grey">
                    <input
                      type="text"
                      value={AIACOPNumber}
                      onChange={(e) => setAIACOPNumber(e.target.value)}
                      className="input-style"
                    />
                  </td>
                  <td className="border-grey">
                    <div className="flex-container-style">
                      <label className="labelStyle">WS CO #:</label>
                    </div>
                  </td>
                  <td className="border-grey">
                    <input
                      type="text"
                      value={WSCONumber}
                      onChange={(e) => setWSCONumber(e.target.value)}
                      className="input-style"
                    />
                  </td>
                </tr>

                {/* WS CO Number */}

                {/* PE Notes */}
                <tr>
                  <td className="no-margin-bottom border-grey">
                    <div>
                      <label className="labelStyle">PE Notes:</label>
                    </div>
                  </td>
                  <td className="no-margin-bottom border-grey" colSpan="3">
                    <div>
                      <textarea
                        type="text"
                        value={PENotes}
                        onChange={(e) => setPENotes(e.target.value)}
                        className="textarea-style"
                      ></textarea>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Close Pricing Element"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to close the pricing element popup?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmClose} color="primary">
            Yes
          </Button>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddPricingElement;
