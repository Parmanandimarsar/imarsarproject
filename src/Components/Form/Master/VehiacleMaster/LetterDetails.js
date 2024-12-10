import React, { useState } from "react";
import {
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Button,
  MenuItem,
  Select,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DataGridTable from "../../../ConstantComponents/DataGridTable";

const LetterDetails = ({ open }) => {
  const [dataGridRows, setDataGridRows] = useState([]);
  const [rowIdCounter, setRowIdCounter] = useState(1); // To give each row a unique ID

  const nameOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Please select a name "),
    description: Yup.string().required("Description is required"),
    seqNo: Yup.string()
      .matches(/^\d+$/, "Seq. No must be a number")
      .required("Seq. No is required"),
  });

  const columns = [
    { field: "id", headerName: "ID", width: 100, disableColumnMenu: true },
    { field: "name", headerName: "Name", flex: 1, disableColumnMenu: true },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      disableColumnMenu: true,
    },
    { field: "seqNo", headerName: "Seq. No", flex: 1, disableColumnMenu: true },
  ];

  const handleAdd = (values, { resetForm }) => {
    setDataGridRows((prev) => [
      ...prev,
      {
        id: rowIdCounter,
        name: values.name,
        description: values.description,
        seqNo: values.seqNo,
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
            <Typography>Letter Details</Typography>
          </Box>
          <Divider className="divider" />

          <Formik
            initialValues={{
              name: "",
              description: "",
              seqNo: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleAdd}
          >
            {({ errors, touched }) => (
              <Form>
                <Grid container spacing={1}>
                  {/* name */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            select
                            name="name"
                            fullWidth
                            size="small"
                            error={touched.name && !!errors.name}
                          >
                            <MenuItem value="" disabled>
                              -Select-
                            </MenuItem>
                            {nameOptions.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                           
                          </Field>
                          <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-600 text-[10px]"
                        />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Description */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Description</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="description"
                            placeholder="Description"
                            fullWidth
                            size="small"
                            error={touched.description && !!errors.description}
                            
                          />
                          <ErrorMessage
                              name="description"
                              component="div"
                              className="text-red-600 text-[10px]"
                            />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Seq No */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Seq. No</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="seqNo"
                            placeholder="SeqNo."
                            fullWidth
                            size="small"
                            error={touched.seqNo && !!errors.seqNo}
                            
                          />
                          <ErrorMessage
                              name="seqNo"
                              component="div"
                              className="text-red-600 text-[10px]"
                            />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Add Button */}
                  <Grid item xs={12} sm={1} md={1} lg={1}>
                    <FormControl fullWidth>
                      <button type="submit" className="project-thim savebutton">
                        Save
                      </button>
                    </FormControl>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>

          {/* DataGrid */}
          <div style={{ height: 100, marginTop: "10px" }}>
            <DataGridTable rows={dataGridRows} columns={columns} pageSize={5} />
          </div>
        </Box>
      </div>
    )
  );
};

export default LetterDetails;
