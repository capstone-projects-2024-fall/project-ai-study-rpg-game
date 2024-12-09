/* eslint-disable react/prop-types */
import React, { useState, useEffect }  from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  CardActions, 
  Button, 
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions, } from '@mui/material';
import { tokens } from '../theme'; // assuming the same theme tokens are used here
//import { jiraBoardTasks as initialTasks } from '../data/mockAssignmentCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import parse from 'html-react-parser';


const JiraBoard = ({email}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); // Using custom tokens based on theme mode
  const columns = ['Undecided', 'To Do', 'In Progress','Done'];

  const [tasks, setTasks] = useState({});
  const [draggedTask, setDraggedTask] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const formatDateTime = (dateTimeString) => {
    const dateObj = new Date(dateTimeString);
    const formattedDate = dateObj.toLocaleDateString(); // Formats to "MM/DD/YYYY"
    const formattedTime = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Formats to "HH:MM AM/PM"
    return `${formattedDate} at ${formattedTime}`;
  };

  const openDialog = (task) => {
    console.log("Task passed to openDialog:", task); 
    setSelectedTask(task);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedTask(null);
    setIsDialogOpen(false);
  };
  

  // Fetch tasks from the backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`http://localhost:5000/getUnsubmittedAssignmentsFromDb?email=${email}`);
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }

        const data = await response.json();

        // Organize tasks into columns
        const tasksByColumn = {
          Undecided: [],
          'To Do': [],
          'In Progress': [],
          Done: [],
        };

        data.assignments.forEach((task) => {
          // Default all tasks to 'Undecided' if there's no clear status
          tasksByColumn[task.in_game_status || 'Undecided'].push({
            id: task.id, // need to include this in your backend response
            title: task.assignment_name,
            description: task.assignment_description,
            course: task.course_name,
            due_at: task.due_at,
            assignment_url: task.assignment_url,
          });
        });

        setTasks(tasksByColumn);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [email]);

  // Handle drag start
  const handleDragStart = (task, currentColumn) => {
    setDraggedTask({ task, currentColumn });
    //console.log("drag started:");
  };

  // Handle drag over (allows dropping)
  const handleDragOver = (event) => {
    event.preventDefault();
    //console.log("handle drag over:");
  };

  // Handle drop
  const handleDrop = (targetColumn) => {
    if (!draggedTask || draggedTask.currentColumn === targetColumn) return;

    const { task, currentColumn } = draggedTask;
    const updatedTasks = { ...tasks };

    // Remove task from the current column
    updatedTasks[currentColumn] = updatedTasks[currentColumn].filter((t) => t.id !== task.id);

    // Add task to the target column
    updatedTasks[targetColumn] = [...updatedTasks[targetColumn], task];

    // Update the state
    setTasks(updatedTasks);
    setDraggedTask(null);
    //console.log("Drag drop, tasks:"+ JSON.stringify(tasks));

    // Optionally, update the task's status in the backend
    fetch(`http://localhost:5000/api/updateTaskStatus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ taskId: task.id, status: targetColumn, email: email }),
    }).catch((error) => console.error('Error updating task status:', error));
  };


  // Function to handle the "Next Step" action
  const handleNextStep = (taskId, currentColumn) => {
    const currentIndex = columns.indexOf(currentColumn);
    if(currentIndex == 2){
      localStorage.setItem("worldState", 1)
    }
    if (currentIndex < columns.length - 1) {
      const nextColumn = columns[currentIndex + 1];

      // Create a copy of the current tasks state
      const updatedTasks = { ...tasks };

      // Find and remove the task from the current column
      const taskToMove = updatedTasks[currentColumn].find((task) => task.id === taskId);
      updatedTasks[currentColumn] = updatedTasks[currentColumn].filter((task) => task.id !== taskId);

      // Add the task to the next column
      updatedTasks[nextColumn] = [...updatedTasks[nextColumn], taskToMove];

      // Update the state
      setTasks(updatedTasks);
    }
  };

  // Function to handle the "Previous Step" action
  const handlePreviousStep = (taskId, currentColumn) => {
    const currentIndex = columns.indexOf(currentColumn);
    if (currentIndex > 0) {
      const previousColumn = columns[currentIndex - 1];
      const updatedTasks = { ...tasks };

      // Find and remove the task from the current column
      const taskToMove = updatedTasks[currentColumn].find((task) => task.id === taskId);
      updatedTasks[currentColumn] = updatedTasks[currentColumn].filter((task) => task.id !== taskId);

      // Add the task to the previous column
      updatedTasks[previousColumn] = [...updatedTasks[previousColumn], taskToMove];

      // Update the state
      setTasks(updatedTasks);
    }
  };

    // Function to handle task removal
  const handleRemoveTask = (taskId) => {
    const updatedTasks = { ...tasks };

    // Remove the task from the Done column
    updatedTasks['Done'] = updatedTasks['Done'].filter((task) => task.id !== taskId);

    setTasks(updatedTasks);

    //Delete the task from the backend
    fetch(`http://localhost:5000/api/deleteTask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ taskId }),
    }).catch((error) => console.error('Error deleting task:', error));
  };


  return (
    <>
    <Grid container spacing={2} style={{ padding: 20, backgroundColor: theme.palette.background.default }}>
      {columns.map((column) => (
      //{Object.keys(jiraBoardTasks).map((column) => (
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={3} 
          key={column}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(column)}
          style={{
            minHeight: '80vh',
            maxHeight: '80vh',
            overflowY: 'auto',
            //border: `1px solid ${colors.gray[400]}`,
            padding: '10px',
            //backgroundColor: colors.gray[100],
            //borderRadius: '8px',
          }}
          >
          <Typography variant="h4" fontWeight="bold" style={{ color: colors.gray[700], marginBottom: 12 }}>
            {column}
          </Typography>
          {tasks[column]?.map((task) => (
            <Card 
              key={task.id}
              draggable
              onDragStart={() => handleDragStart(task, column)} 
              style={{ 
                marginBottom: 8, 
                backgroundColor: colors.gray[700], 
                color: colors.gray[100],
                padding: '10px',
                borderRadius: '8px',
                cursor: 'grab', 
              }}
            >
              <CardContent>
                <Typography variant="h5">{task.title}</Typography>
                <Typography color="textSecondary">{task.course}</Typography>
                <Typography color="textSecondary"><strong>Due by:</strong> {formatDateTime(task.due_at)}</Typography>
              </CardContent>
              <CardActions>
              <Button
                  style={{ color: colors.primary[500] }}
                  onClick={() => handlePreviousStep(task.id, column)}
                  startIcon={<ArrowBackIcon />}
                >PREV
                </Button>
                <Button 
                  style={{ color: colors.primary[500] }}
                  onClick={() => openDialog(task)}
                >VIEW
                </Button>
                {column === 'Done' ? (
                  <Button
                    style={{ color: colors.primary[500] }}
                    onClick={() => handleRemoveTask(task.id)}
                  >
                    REMOVE
                 </Button>
              ) : (
                <Button 
                  style={{ color: colors.primary[500] }}
                  onClick={() => handleNextStep(task.id, column)}
                  endIcon={<ArrowForwardIcon />}
                  >NEXT
                  </Button>
              )}
              </CardActions>              
            </Card>
          ))}
        </Grid>
      ))}
    </Grid>

    {/* Diaglog pop up window that shows the assignment description */}
    <Dialog open={isDialogOpen} onClose={closeDialog}>
    <DialogTitle>Assignment Description</DialogTitle>
    <DialogContent>
      <Typography variant="body1">{selectedTask?.description ? parse(selectedTask.description) : "No description available."}
      </Typography>
      {selectedTask?.assignment_url && (
            <Typography variant="body2" style={{ marginTop: '1rem' }}>
              <a 
                href={selectedTask.assignment_url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'underline' }}
              >
                View Assignment on Canvas
              </a>
            </Typography>
          )}
    </DialogContent>
    <DialogActions>
    <Button color="primary">
        Get AI Help
      </Button>
      <Button onClick={closeDialog} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
</>
  );
};

export default JiraBoard;
