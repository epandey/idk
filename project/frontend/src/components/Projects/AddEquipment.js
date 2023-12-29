import React, { useState, useEffect } from 'react';
import { Card, CardHeader } from '@mui/material';
import Button from '@mui/material/Button';


const AddEquipment = ({ editingTask, onClose }) => {
  // Add new state variables
  const [poNumber, setPoNumber] = useState('');
  const [equipmentName, setEquipmentName] = useState('');
  const [description, setDescription] = useState('');
  const [supplier, setSupplier] = useState('');
  const [proposalDate, setProposalDate] = useState('');
  const [deliveryStatus, setDeliveryStatus] = useState('');
  const [orderedDate, setOrderedDate] = useState('');
  const [estimatedDeliveryDate, setEstimatedDeliveryDate] = useState('');
  const [actualDeliveryDate, setActualDeliveryDate] = useState('');
  const [equipmentNotes, setEquipmentNotes] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [totalPrice, setTotalPrice] = useState('');


  

  // useEffect(() => {
  //   if (editingTask) {
  //     setTaskTitle(editingTask.taskTitle);
  //     setTaskDescription(editingTask.taskDescription);
  //     setMcs(editingTask.mcs);
  //     setAssignee(editingTask.assignee);
  //   }
  // }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the taskData object with the new fields
    const taskData = {
      poNumber,
      equipmentName,
      description,
      supplier,
      proposalDate,
      deliveryStatus,
      orderedDate,
      estimatedDeliveryDate,
      actualDeliveryDate,
      equipmentNotes,
      unitPrice,
      quantity,
      totalPrice,
      // ... (rest of your existing fields)
    };
    
    const apiUrl = 'http://localhost:3000/api/tasks'; 

    // Send a POST request to save the task data to the database
    fetch(apiUrl, {
      method: editingTask ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Task data saved successfully:', data);
        // Perform any additional actions you want after saving the data
      })
      .catch((error) => {
        console.error('Error saving task data:', error);
        // Handle any errors that occurred during the request
      });
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginLeft: '10px',
    marginRight: '10px',  // Adjust this value to control space to the right
  };

  const labelTdStyle = {
    minWidth: '150px',
    maxWidth: '150px',
    width: '150px',
    border: 'grey',
  };
  
  
  const inputStyle = {
   
    width: '50%',
    // padding: '8px',
    // marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
  };

  const textareaStyle = {
    width: '50%',
    // padding: '8px',
    // marginBottom: '12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    resize: 'vertical',
  };

  const buttonStyle = {
    background: 'green',
    color: 'white',
    textTransform: 'none',
  };

  return (
    (
<Card sx={{ maxWidth: '100%' }}>
        <CardHeader
          style={{ background: '#467eac', color: 'white' }}
          title={<h1 style={{ fontSize: '18px', marginLeft: '12px', fontFamily: 'Helvetica' }}>Add Equipment</h1>}
          titleTypographyProps={{ variant: 'h6' }}
          action={
            <>
              <Button
                variant="contained"
                style={{ marginLeft: '0.4rem', marginRight: '2.5rem', background: 'green', textTransform: 'none' }}
                onClick={handleSubmit}
              >
                {editingTask ? 'Save Changes' : 'Add Equipment'}
              </Button>
            </>
          }
        ></CardHeader>
        <form onSubmit={handleSubmit}>
          <table sx={{ maxWidth: 1200, border: "none" }} style={{ border: 'grey' }} aria-label="simple table">
          <tbody>
  <tr style={{ border: 'grey' }}>
  <td style={labelTdStyle}>
  <label style={labelStyle}>PO #:</label>
</td>
    <td style={{ border: 'grey' }}>
      <input
        type="text"
        value={poNumber}
        onChange={(e) => setPoNumber(e.target.value)}
        style={inputStyle}
      />
    </td>
  </tr>
  <tr style={{ border: 'grey' }}>
    <td style={{ border: 'grey' }}>
      <label style={labelStyle}>Equipment Name:</label>
    </td>
    <td style={{ border: 'grey' }}>
      <input
        type="text"
        value={equipmentName}
        onChange={(e) => setEquipmentName(e.target.value)}
        style={inputStyle}
      />
    </td>
  </tr>
  <tr style={{ border: 'grey' }}>
    <td style={{ border: 'grey' }}>
      <label style={labelStyle}>Description:</label>
    </td>
    <td style={{ border: 'grey' }}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={inputStyle}
      />
    </td>
  </tr>
  <tr style={{ border: 'grey' }}>
    <td style={{ border: 'grey' }}>
      <label style={labelStyle}>Supplier:</label>
    </td>
    <td style={{ border: 'grey' }}>
      <select value={supplier} onChange={(e) => setSupplier(e.target.value)} style={inputStyle}>
        <option value="">--Select Supplier--</option>
        {/* Add your actual supplier options here */}
      </select>
    </td>
  </tr>
  <tr style={{ border: 'grey' }}>
    <td style={{ border: 'grey' }}>
      <label style={labelStyle}>Proposal Date:</label>
    </td>
    <td style={{ border: 'grey' }}>
      <input
        type="date"
        value={proposalDate}
        onChange={(e) => setProposalDate(e.target.value)}
        style={inputStyle}
      />
    </td>
  </tr>
  <tr style={{ border: 'grey' }}>
    <td style={{ border: 'grey' }}>
      <label style={labelStyle}>Delivery Status:</label>
    </td>
    <td style={{ border: 'grey' }}>
      <select value={deliveryStatus} onChange={(e) => setDeliveryStatus(e.target.value)} style={inputStyle}>
        <option value="">--Select Delivery Status--</option>
        {/* Add your actual delivery status options here */}
      </select>
    </td>
  </tr>
  {/* ... (rest of the rows) */}
  {/* ... (Previous rows for PO#, Equipment Name, etc.) */}
  <tr style={{ border: 'grey' }}>
    <td style={{ border: 'grey' }}>
      <label style={labelStyle}>Ordered Date:</label>
    </td>
    <td style={{ border: 'grey' }}>
      <input
        type="date"
        value={orderedDate}
        onChange={(e) => setOrderedDate(e.target.value)}
        style={inputStyle}
      />
    </td>
  </tr>
  <tr style={{ border: 'grey' }}>
    <td style={{ border: 'grey' }}>
      <label style={labelStyle}>Estimated Delivery Date:</label>
    </td>
    <td style={{ border: 'grey' }}>
      <input
        type="date"
        v
        alue={estimatedDeliveryDate}
        onChange={(e) => setEstimatedDeliveryDate(e.target.value)}
        style={inputStyle}
      />
    </td>
  </tr>
  <tr style={{ border: 'grey' }}>
    <td style={{ border: 'grey' }}>
      <label style={labelStyle}>Actual Delivery Date:</label>
    </td>
    <td style={{ border: 'grey' }}>
      <input
        type="date"
        value={actualDeliveryDate}
        onChange={(e) => setActualDeliveryDate(e.target.value)}
        style={inputStyle}
      />
    </td>
  </tr>
  <tr style={{ border: 'grey' }}>
    <td style={{ border: 'grey' }}>
      <label style={labelStyle}>Equipment Notes:</label>
    </td>
    <td style={{ border: 'grey' }}>
      <textarea
        value={equipmentNotes}
        onChange={(e) => setEquipmentNotes(e.target.value)}
        style={textareaStyle}
      ></textarea>
    </td>
  </tr>
  <tr style={{ border: 'grey' }}>
    <td style={{ border: 'grey' }}>
      <label style={labelStyle}>Unit Price:</label>
    </td>
    <td style={{ border: 'grey' }}>
      <input
        type="number"
        value={unitPrice}
        onChange={(e) => setUnitPrice(e.target.value)}
        style={inputStyle}
      />
    </td>
  </tr>
  <tr style={{ border: 'grey' }}>
    <td style={{ border: 'grey' }}>
      <label style={labelStyle}>Quantity:</label>
    </td>
    <td style={{ border: 'grey' }}>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        style={inputStyle}
      />
    </td>
  </tr>
  <tr style={{ border: 'grey' }}>
    <td style={{ border: 'grey' }}>
      <label style={labelStyle}>Total Price:</label>
    </td>
    <td style={{ border: 'grey' }}>
      <input
        type="number"
        value={totalPrice}
        onChange={(e) => setTotalPrice(e.target.value)}
        style={inputStyle}
      />
    </td>
  </tr>
</tbody>



          </table>
        </form>
      </Card>
  ))
};

export default AddEquipment;
