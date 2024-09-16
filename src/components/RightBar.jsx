import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const CalorieBurnCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [duration, setDuration] = useState('');
  const [activity, setActivity] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState(null);

  const activities = {
    walking: 3.5,
    jogging: 7,
    cycling: 5.5,
    swimming: 6,
    // MET values (Metabolic Equivalent of Task)
  };

  const calculateCaloriesBurned = () => {
    if (weight && duration && activity) {
      // Calories Burned = (MET * weight in kg * duration in hours)
      const met = activities[activity];
      const durationInHours = duration / 60;
      const calories = met * weight * durationInHours;
      setCaloriesBurned(calories.toFixed(2));
    }
  };

  return (
    <Box flex={3} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Typography variant="h6" gutterBottom>
        Calorie Burn Calculator
      </Typography>
      <TextField
        label="Weight (kg)"
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        fullWidth
        margin="normal"
        size="small"
      />
        <TextField
        label="Height (cm)"
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        fullWidth
        margin="normal"
        size="small"
      />
      <TextField
        label="Duration (minutes)"
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        fullWidth
        margin="normal"
        size="small"
      />
      <FormControl fullWidth margin="normal" size="small">
        <InputLabel>Activity</InputLabel>
        <Select
          value={activity}
          label="Activity"
          onChange={(e) => setActivity(e.target.value)}
        >
          <MenuItem value="walking">Walking</MenuItem>
          <MenuItem value="jogging">Jogging</MenuItem>
          <MenuItem value="cycling">Cycling</MenuItem>
          <MenuItem value="swimming">Swimming</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={calculateCaloriesBurned} sx={{ mt: 2 }} fullWidth>
        Calculate Calories Burned
      </Button>
      {caloriesBurned && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            Estimated Calories Burned: {caloriesBurned} kcal
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default CalorieBurnCalculator;