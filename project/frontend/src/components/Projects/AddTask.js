import React, { useState,useEffect } from 'react';
import { Card, CardHeader, TextField } from '@mui/material';
import Button from '@mui/material/Button';

const AddTask = ({ editingTask, onClose }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [mcs, setMcs] = useState('Andy');
  const [assignee, setAssignee] = useState('ACS');
  const [assignedDate, setAssignedDate] = useState('07/24/2023');
  const [dueDate, setDueDate] = useState('07/24/2023');
  const [priority, setPriority] = useState('1');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTaskTitle(editingTask.taskTitle);
      setTaskDescription(editingTask.taskDescription);
      setMcs(editingTask.mcs);
      setAssignee(editingTask.assignee);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
  

    // Create an object representing the task data
    const taskData = {
      taskTitle,
      taskDescription,
      mcs,
      assignee,
      assignedDate,
      dueDate,
      priority,
      notes,
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
    marginLeft:'50px',
  };

  const inputStyle = {
   
    width: '120%',
    // padding: '8px',
    // marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
  };

  const textareaStyle = {
    width: '250%',
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
        <Card sx={{maxWidth: '100%'}}>
          <CardHeader
        style={{ background: '#467eac', color: 'white'}}
          title={<h1 style={{ fontSize: '18px',marginLeft:'12px' ,fontFamily:'Helvetica'}}>Add Task</h1>}
          titleTypographyProps={{ variant: 'h6' }}
          action={
            <>
              <Button
                variant="contained"
                style={{ marginLeft: '0.4rem',marginRight:'2.5rem', background: 'green',textTransform:'none' }}
                onClick={handleSubmit}
              >
                 {editingTask ? 'Save Changes' : 'Add Task'}
              </Button>
            </>
          }
        ></CardHeader>
          <form onSubmit={handleSubmit}>
      <table sx={{ maxWidth: 1200, border: "none" }} style={{ border: 'grey' }} aria-label="simple table">
        <tbody>
          <tr style={{ border: 'grey' }}>
            <td style={{ border: 'grey' }}>
              <div>
                <label style={labelStyle}>Title:</label>
              </div>
            </td>
            <td style={{ border: 'grey' ,margin:'0px',padding:'0px'}}>
              <div>
                <input
                  type="text"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  style={inputStyle}
                />
              </div>
            </td>
            </tr>
            <tr>
            
            <td style={{ border: 'grey' }}>
              <div>
                <label style={labelStyle}>Description:</label>
              </div>
            </td>
            <td style={{ border: 'grey' }}>
              <div>
                <textarea
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  style={textareaStyle}
                ></textarea>
              </div>
            </td>
          </tr>
          <tr>
            
            <td style={{ border: 'grey' }}>
              <div>
                <label style={labelStyle}>MCS:</label>
              </div>
            </td>
            <td style={{ border: 'grey' }}>
              <div>
                <input
                  type="text"
                  value={mcs}
                  onChange={(e) => setMcs(e.target.value)}
                  style={inputStyle}
                />
              </div>
            </td>
            
            <td style={{ border: 'grey' }}>
              <div>
                <label style={labelStyle}>Assignee:</label>
              </div>
            </td>
            <td style={{ border: 'grey' }}>
              <div>
                <input
                  type="text"
                  value={assignee}
                  onChange={(e) => setAssignee(e.target.value)}
                  style={inputStyle}
                />
              </div>
            </td>
          </tr>
          <tr>
           <td style={{ border: 'grey' }}>
              <div>
                <label style={labelStyle}>Assigned Date:</label>
              </div>
            </td>
            <td style={{ border: 'grey' }}>
              <div>
                <input
                  type="text"
                  value={assignedDate}
                  onChange={(e) => setAssignedDate(e.target.value)}
                  style={inputStyle}
                />
              </div>
            </td>
           
            <td style={{ border: 'grey' }}>
              <div>
                <label style={labelStyle}>Due Date:</label>
              </div>
            </td>
            <td style={{ border: 'grey' }}>
              <div>
                <input
                  type="text"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  style={inputStyle}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ border: 'grey' }}>
              <div>
                <label style={labelStyle}>Priority:</label>
              </div>
            </td>
            <td style={{ border: 'grey' }}>
              <div>
                <input
                  type="text"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  style={inputStyle}
                />
              </div>
            </td>
            </tr><tr>
            <td style={{ border: 'grey' }}>
              <div>
                <label style={labelStyle}>Notes:</label>
              </div>
            </td>
            <td style={{ border: 'grey' }}>
              <div>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={textareaStyle}
                ></textarea>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </form>

        </Card>
  ))
};

export default AddTask;
