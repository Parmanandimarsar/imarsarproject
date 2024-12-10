import React, { useState } from "react";
import {
  Grid,
  FormControl,
  FormLabel,
  TextField,
  MenuItem,
  Select,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DataGridTable from "../../../ConstantComponents/DataGridTable";

const OpningStock = ({ open }) => {
  const [dataGridRows, setDataGridRows] = useState([]);
  const [rowIdCounter, setRowIdCounter] = useState(1); // To give each row a unique ID

  const colorOptions = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
  ];

  const locationOptions = [
    { label: "Location 1", value: "location1" },
    { label: "Location 2", value: "location2" },
    { label: "Location 3", value: "location3" },
  ];

  // Validation schema using Yup
  const validationSchema = Yup.object({
    chassisNo: Yup.string().required("Chassis No is required"),
    engineNo: Yup.string().required("Engine No is required"),
    keyNo: Yup.string().required("Key No is required"),
    poNo: Yup.string().required("PO No is required"),
    color: Yup.string().required("Color is required"),
    batteryNo: Yup.string().required("Battery No is required"),
    wrcNo: Yup.string().required("WRC No is required"),
    value: Yup.number().required("Value is required"),
    location: Yup.string().required("Location is required"),
  });

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "chassisNo",
      headerName: "Chassis No",
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: "engineNo",
      headerName: "Engine No",
      flex: 1,
      disableColumnMenu: true,
    },
    { field: "keyNo", headerName: "Key No", flex: 1, disableColumnMenu: true },
    { field: "poNo", headerName: "PO No", flex: 1, disableColumnMenu: true },
    { field: "color", headerName: "Color", flex: 1, disableColumnMenu: true },
    {
      field: "batteryNo",
      headerName: "Battery No",
      flex: 1,
      disableColumnMenu: true,
    },
    { field: "wrcNo", headerName: "WRC No", flex: 1, disableColumnMenu: true },
    { field: "value", headerName: "Value", flex: 1, disableColumnMenu: true },
    {
      field: "location",
      headerName: "Location",
      flex: 1,
      disableColumnMenu: true,
    },
  ];

  const handleAdd = (values, { resetForm }) => {
    setDataGridRows((prev) => [
      ...prev,
      {
        id: rowIdCounter,
        chassisNo: values.chassisNo,
        engineNo: values.engineNo,
        keyNo: values.keyNo,
        poNo: values.poNo,
        color: values.color,
        batteryNo: values.batteryNo,
        wrcNo: values.wrcNo,
        value: values.value,
        location: values.location,
      },
    ]);
    setRowIdCounter((prev) => prev + 1); // Increment row ID for uniqueness
    resetForm(); // Clear form fields
  };

  return (
    open && (
      <div className="mb-[50px] ">
        <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
          <Box className="flex justify-between items-center  project-thim text-white pl-2 rounded-t-lg">
            <Typography>Opning Stock</Typography>
          </Box>
          <Divider className="divider" />
        </Box>
        <Formik
          initialValues={{
            chassisNo: "",
            engineNo: "",
            keyNo: "",
            poNo: "",
            color: "",
            batteryNo: "",
            wrcNo: "",
            value: "",
            location: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleAdd}
        >
          {({ errors, touched }) => (
            <Form>
              <Grid container spacing={1}>
                {/* Chassis No */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={4}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Chassis No</FormLabel>
                      </Grid>
                      <Grid item xs={7}>
                        <Field
                          as={TextField}
                          name="chassisNo"
                          placeholder="Chassis No"
                          fullWidth
                          size="small"
                          error={touched.chassisNo && !!errors.chassisNo}
                          
                        
                        />
                        <ErrorMessage
                        name="chassisNo"
                        component="div"
                        className="text-red-600 text-[10px]"
                      />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Engine No */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={4}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Engine No</FormLabel>
                      </Grid>
                      <Grid item xs={7}>
                        <Field
                          as={TextField}
                          name="engineNo"
                          placeholder="Engine No"
                          fullWidth
                          size="small"
                          error={touched.engineNo && !!errors.engineNo}
                         
                        />
                        <ErrorMessage
                        name="engineNo"
                        component="div"
                        className="text-red-600 text-[10px]"
                      />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Key No */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={4}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Key No</FormLabel>
                      </Grid>
                      <Grid item xs={7}>
                        <Field
                          as={TextField}
                          name="keyNo"
                          placeholder="Key No"
                          fullWidth
                          size="small"
                          error={touched.keyNo && !!errors.keyNo}
                         
                        />
                        <ErrorMessage
                        name="keyNo"
                        component="div"
                        className="text-red-600 text-[10px]"
                      />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* PO No */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={4}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>PO No</FormLabel>
                      </Grid>
                      <Grid item xs={7}>
                        <Field
                          as={TextField}
                          name="poNo"
                          placeholder="PO No"
                          fullWidth
                          size="small"
                          error={touched.poNo && !!errors.poNo}
                         
                        />
                        <ErrorMessage
                        name="poNo"
                        component="div"
                        className="text-red-600 text-[10px]"
                      />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Color */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={4}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Color</FormLabel>
                      </Grid>
                      <Grid item xs={7}>
                        <Field
                          as={Select}
                          name="color"
                          fullWidth
                          size="small"
                          error={touched.color && !!errors.color}
                         
                        >
                          <MenuItem value="" disabled>
                            -Select-
                          </MenuItem>
                          {colorOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Field>
                        <ErrorMessage
                        name="color"
                        component="div"
                        className="text-red-600 text-[10px]"
                      />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Battery No */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={4}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Battery No</FormLabel>
                      </Grid>
                      <Grid item xs={7}>
                        <Field
                          as={TextField}
                          name="batteryNo"
                          placeholder="Battery No"
                          fullWidth
                          size="small"
                          error={touched.batteryNo && !!errors.batteryNo}
                        
                        />
                        <ErrorMessage
                        name="batteryNo"
                        component="div"
                        className="text-red-600 text-[10px]"
                      />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* WRC No */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={4}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>WRC No</FormLabel>
                      </Grid>
                      <Grid item xs={7}>
                        <Field
                          as={TextField}
                          name="wrcNo"
                          placeholder="WRC No"
                          fullWidth
                          size="small"
                          error={touched.wrcNo && !!errors.wrcNo}
                         
                        />
                        <ErrorMessage
                        name="wrcNo"
                        component="div"
                        className="text-red-600 text-[10px]"
                      />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Value */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={4}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Value</FormLabel>
                      </Grid>
                      <Grid item xs={7}>
                        <Field
                          as={TextField}
                          name="value"
                          placeholder="Value"
                          fullWidth
                          size="small"
                          error={touched.value && !!errors.value}
                        
                        />
                        <ErrorMessage
                        name="value"
                        component="div"
                        className="text-red-600 text-[10px]"
                      />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Location */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={4}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Location</FormLabel>
                      </Grid>
                      <Grid item xs={7}>
                        <Field
                          as={Select}
                          name="location"
                          fullWidth
                          size="small"
                          error={touched.location && !!errors.location}
                         
                        >
                          <MenuItem value="" disabled>
                            -Select-
                          </MenuItem>
                          {locationOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Field>
                        <ErrorMessage
                        name="location"
                        component="div"
                        className="text-red-600 text-[10px]"
                      />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} align="center">
                  <button type="submit" className="project-thim savebutton">
                    Save
                  </button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
        <div style={{ height: 100, width: "100%", marginTop: "10px" }}>
          {/* DataGrid for displaying the rows */}
          <DataGridTable rows={dataGridRows} columns={columns} />
        </div>
      </div>
    )
  );
};

export default OpningStock;
