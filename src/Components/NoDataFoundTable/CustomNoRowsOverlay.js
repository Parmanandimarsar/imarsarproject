import React from "react";
import { GridOverlay } from "@mui/x-data-grid";
import { Typography, Box } from "@mui/material";
const CustomNoRowsOverlay = () => {
  return (
    <GridOverlay>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Typography variant="h6">No data found</Typography>
      </Box>
    </GridOverlay>
  );
};

export default CustomNoRowsOverlay;
