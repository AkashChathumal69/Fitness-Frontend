import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import { Box } from '@mui/material'
const Speedometer = () => {





  return (

    <Box  flex={4} p={2}>

<div style={{ marginTop: "30px" }}>
        <ReactSpeedometer
          maxValue={50}
          width={700}
          value={23.2}
          needleColor="red"
          startColor="blue"
          segments={8}
          endColor="red"
          customSegmentStops={[0, 16, 25, 30, 35, 40, 50]}
          segmentColors={[
            "#66ccff", // Severe Thinness
            "#99ccff", // Moderate Thinness
            "#ccccff", // Mild Thinness
            "#99ff99", // Normal
            "#ffff66", // Overweight
            "#ffcc66", // Obese Class I
            "#ff9966", // Obese Class II
            "#ff6666", // Obese Class III
          ]}
          customSegmentLabels={[
            { text: "Severe Thinness", position: "INSIDE", color: "#000" },
         
            { text: "Normal", position: "INSIDE", color: "#000" },
            { text: "Overweight", position: "INSIDE", color: "#000" },
            { text: "Obese Class I", position: "INSIDE", color: "#000" },
            { text: "Obese Class II", position: "INSIDE", color: "#000" },
            { text: "Obese Class III", position: "INSIDE", color: "#000" },
          ]}
          textColor="#d8dee9"
        />
      </div>
    </Box>
   
  )
}

export default Speedometer
