/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button, useTheme } from '@mui/material';
import { tokens } from '../theme'; // assuming the same theme tokens are used here
import { jiraBoardTasks } from '../data/mockAssignmentCard';

const JiraBoard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); // Using custom tokens based on theme mode
  const columns = ['Undecided', 'To Do', 'In Progress','Done'];

  return (
    <Grid container spacing={2} style={{ padding: 20, backgroundColor: theme.palette.background.default }}>
      {Object.keys(jiraBoardTasks).map((column) => (
        <Grid item xs={12} sm={6} md={3} key={column}>
          <Typography variant="h4" fontWeight="bold" style={{ color: colors.gray[700], marginBottom: 12 }}>
            {column}
          </Typography>
          {jiraBoardTasks[column].map((task) => (
            <Card key={task.id} style={{ marginBottom: 8, backgroundColor: colors.gray[700], color: colors.gray[100] }}>
              <CardContent>
                <Typography variant="h5">{task.title}</Typography>
                <Typography color="textSecondary">{task.description}</Typography>
              </CardContent>
              <CardActions>
                <Button style={{ color: colors.primary[500] }}>View</Button>
                <Button style={{ color: colors.primary[500] }}>Next Step</Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default JiraBoard;
