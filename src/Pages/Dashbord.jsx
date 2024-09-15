import React from "react";

import { Box, Stack } from "@mui/material";

import RightBar from "../components/RightBar";
import SideButton from "../components/Sidebar";
import MiddleBar from "../components/MiddleBar";
import Nav from "../components/Nav";
import Graph from "../components/Graph";
import Speedometer from "../components/Speedometer";
import DashBoard from "../components/DashBoard";

const Dashbord = () => {
  return (
    <Box>
      <Nav />
      <DashBoard />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <SideButton />
        <MiddleBar />
        <RightBar />
      </Stack>
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <SideButton />
        <Speedometer />
      </Stack>

      <Graph />
    </Box>
  );
};

export default Dashbord;
