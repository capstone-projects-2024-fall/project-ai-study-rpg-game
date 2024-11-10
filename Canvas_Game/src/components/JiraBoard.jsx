/* eslint-disable react/prop-types */
import React, { useState }  from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button, useTheme } from '@mui/material';
import { tokens } from '../theme'; // assuming the same theme tokens are used here
import { jiraBoardTasks as initialTasks } from '../data/mockAssignmentCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const JiraBoard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); // Using custom tokens based on theme mode
  const columns = ['Undecided', 'To Do', 'In Progress','Done'];

  const [tasks, setTasks] = useState(initialTasks);

  // Function to handle the "Next Step" action
  const handleNextStep = (taskId, currentColumn) => {
    const currentIndex = columns.indexOf(currentColumn);
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


  return (
    <Grid container spacing={2} style={{ padding: 20, backgroundColor: theme.palette.background.default }}>
      {columns.map((column) => (
      //{Object.keys(jiraBoardTasks).map((column) => (
        <Grid item xs={12} sm={6} md={3} key={column}>
          <Typography variant="h4" fontWeight="bold" style={{ color: colors.gray[700], marginBottom: 12 }}>
            {column}
          </Typography>
          {tasks[column]?.map((task) => (
          //{jiraBoardTasks[column].map((task) => (
            <Card key={task.id} style={{ marginBottom: 8, backgroundColor: colors.gray[700], color: colors.gray[100] }}>
              <CardContent>
                <Typography variant="h5">{task.title}</Typography>
                <Typography color="textSecondary">{task.description}</Typography>
              </CardContent>
              <CardActions>
              <Button
                  style={{ color: colors.primary[500] }}
                  onClick={() => handlePreviousStep(task.id, column)}
                  startIcon={<ArrowBackIcon />}
                >PREV
                </Button>
                <Button style={{ color: colors.primary[500] }}>VIEW</Button>
                <Button 
                  style={{ color: colors.primary[500] }}
                  onClick={() => handleNextStep(task.id, column)}
                  endIcon={<ArrowForwardIcon />}
                  >NEXT
                  </Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default JiraBoard;
