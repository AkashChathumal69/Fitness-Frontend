import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
  FormControl,
  InputLabel
} from '@mui/material';


const activities = [
  { name: 'Walking', metsValue: 3.5 },
  { name: 'Running', metsValue: 8 },
  { name: 'Cycling', metsValue: 7.5 },
  { name: 'Swimming', metsValue: 6 },
];

const RightBar = () => {
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState(activities[0]);
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState(null);

  const calculateCalories = () => {
    const weightKg = parseFloat(weight);
    const durationHours = parseFloat(duration) / 60;
    const calories = activity.metsValue * 3.5 * weightKg / 200 * durationHours * 60;
    setCaloriesBurned(Math.round(calories));
  };

  return (
    <Box flex={3}  p={2} sx={{display:{xs:"none", sm:"block"}}}>

<Card sx={{ maxWidth: 300, margin: 'auto', mt: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Calorie Calculator
        </Typography>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}>
          <TextField
            label="Weight (kg)"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel id="activity-select-label">Activity</InputLabel>
            <Select
              labelId="activity-select-label"
              value={activity.name}
              label="Activity"
              onChange={(e) => setActivity(activities.find(a => a.name === e.target.value))}
            >
              {activities.map((act) => (
                <MenuItem key={act.name} value={act.name}>
                  {act.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Duration (minutes)"
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={calculateCalories} fullWidth>
            Calculate Calories
          </Button>
        </Box>
        {caloriesBurned !== null && (
          <Typography variant="h6" sx={{ mt: 2, textAlign: 'center' }}>
            Calories Burned: {caloriesBurned}
          </Typography>
        )}
      </CardContent>
    </Card>

    </Box>
  )
};

export default RightBar
