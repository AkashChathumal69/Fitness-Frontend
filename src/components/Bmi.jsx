import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Bmi = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  const getBMICategory = (bmi, gender) => {
    if (gender === 'male') {
      if (bmi < 18.5) return 'Underweight';
      if (bmi < 25) return 'Normal weight';
      if (bmi < 30) return 'Overweight';
      return 'Obese';
    } else {
      if (bmi < 18.5) return 'Underweight';
      if (bmi < 24) return 'Normal weight';
      if (bmi < 29) return 'Overweight';
      return 'Obese';
    }
  };

  return (
    <Box flex={3} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Typography variant="h6" gutterBottom>
        BMI Calculator
      </Typography>
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
        label="Weight (kg)"
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        fullWidth
        margin="normal"
        size="small"
      />
      <FormControl fullWidth margin="normal" size="small">
        <InputLabel>Gender</InputLabel>
        <Select
          value={gender}
          label="Gender"
          onChange={(e) => setGender(e.target.value)}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={calculateBMI} sx={{ mt: 2 }} fullWidth>
        Calculate BMI
      </Button>
      {bmi && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            Your BMI: {bmi}
          </Typography>
          <Typography variant="body2">
            Category: {getBMICategory(parseFloat(bmi), gender)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Bmi;