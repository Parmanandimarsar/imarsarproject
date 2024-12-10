import React, { useEffect, useState } from "react";
import {
  TextField,
  Typography,
  FormControl,
  Box,
  FormLabel,
  Divider,
  Grid,
  Button,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DataGridTable from "../../ConstantComponents/DataGridTable";
import { MasterHSNCodeTable } from "../../TableField/TablefieldsColumns";
import { useDispatch, useSelector } from "react-redux";
import useNotification from "../../ConstantComponents/Notifications/useNotification";
import {
  fetchHSNCodeData,
  postHSNCodeData,
  putHSNCode,
} from "../../../redux/slices/actions/masterAction";

const HSNCODEMaster = () => {
  const notification = useNotification();
  const dispatch = useDispatch();
  const [rows, setRows] = useState([]);
  const [editRow, setEditRow] = useState(null);
  const {
    masterLoading,
    masterError,
    HSNCodeData,
    getHSNCodeData,
    putHSNCodeData,
  } = useSelector((state) => state.master);

  console.log("putHSNCodeData", putHSNCodeData);
  console.log("getHSNCodeData", getHSNCodeData);

  useEffect(() => {
    dispatch(fetchHSNCodeData());
  }, []);

  useEffect(() => {
    setRows(getHSNCodeData);
  }, [getHSNCodeData]);

  // Validation schema
  const validationSchema = Yup.object({
    hsn_code: Yup.string()
      .matches(/^[0-9]+$/, "HSN Code must be numeric")
      .required("HSN Code is required"),
    hsn_igst: Yup.number()
      .min(0, "Value must be 0 or greater")
      .max(1000, "Value must be 100 or less")
      .required("IGST is required"),
    hsn_cgst: Yup.number()
      .min(0, "Value must be 0 or greater")
      .max(1000, "Value must be 100 or less")
      .required("CGST is required"),
    hsn_sgst: Yup.number()
      .min(0, "Value must be 0 or greater")
      .max(1000, "Value must be 100 or less")
      .required("SGST is required"),
  });

  const initialValues = editRow
    ? {
        hsn_code: editRow.hsn_code,
        hsn_igst: editRow.hsn_igst,
        hsn_cgst: editRow.hsn_cgst,
        hsn_sgst: editRow.hsn_sgst,
      }
    : { hsn_code: "", hsn_igst: "", hsn_cgst: "", hsn_sgst: "" };

  const handleSubmit = async (values, { resetForm }) => {
    console.log("values", values);

    if (editRow) {
      // Update existing row
      // setRows((prevRows) =>
      //   prevRows.map((row) =>
      //     row.id === editRow.id ? { ...row, ...values } : row
      //   )
      // );
      const updateData = {
        ...editRow,
        modified_by: 1,
        modified_datetime: new Date().toISOString(),
      };
      await dispatch(putHSNCode(updateData));
      setEditRow(null);
    } else {
      // Add new row
      const newRow = {
        ...values,
        id: 0,
        created_by: 0,
        created_datetime: new Date().toISOString(),
      };
      await dispatch(postHSNCodeData(newRow));
    }
    dispatch(fetchHSNCodeData());
    resetForm();
  };

  const handleEdit = (row) => {
    console.log("row", row);

    setEditRow(row);
  };

  const handleReset = (resetForm) => {
    setEditRow(null);
    resetForm();
  };

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography>HSN CODE Master</Typography>
        </Box>
        <Divider className="divider" />
        <div className="pl-1 pr-1">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ resetForm, errors }) => (
             
              (
                <Form>
                  <Grid container spacing={1}>
                    {/* HSN Code */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid
                            item
                            xs={4}
                            className="formlableborder"
                            sx={{ mr: "3px" }}
                          >
                            <FormLabel>HSN Code </FormLabel>
                          </Grid>
                          <Grid item xs={7}>
                            <Field
                              as={TextField}
                              name="hsn_code"
                              type="number"
                              placeholder="Enter HSN"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={Boolean(<ErrorMessage name="hsn_code" />)}
                              helperText={<ErrorMessage name="hsn_code" />}
                            />
                            
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                    {/* IGST */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid
                            item
                            xs={4}
                            className="formlableborder"
                            sx={{ mr: "3px" }}
                          >
                            <FormLabel>IGST </FormLabel>
                          </Grid>
                          <Grid item xs={7}>
                            <Field
                              as={TextField}
                              name="hsn_igst"
                              type="number"
                              placeholder="Enter IGST"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={Boolean(<ErrorMessage name="hsn_igst" />)}
                              helperText={<ErrorMessage name="hsn_igst" />}
                            />
                           
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                    {/* CGST */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid
                            item
                            xs={4}
                            className="formlableborder"
                            sx={{ mr: "3px" }}
                          >
                            <FormLabel>CGST</FormLabel>
                          </Grid>
                          <Grid item xs={7}>
                            <Field
                              as={TextField}
                              name="hsn_cgst"
                              type="number"
                              placeholder="Enter CGST"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={Boolean(<ErrorMessage name="hsn_cgst" />)}
                              helperText={<ErrorMessage name="hsn_cgst" />}
                            />
                           
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                    {/* SGST */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid
                            item
                            xs={4}
                            className="formlableborder"
                            sx={{ mr: "3px" }}
                          >
                            <FormLabel>SGST</FormLabel>
                          </Grid>
                          <Grid item xs={7}>
                            <Field
                              as={TextField}
                              name="hsn_sgst"
                              type="number"
                              placeholder="Enter SGST"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={Boolean(<ErrorMessage name="hsn_sgst" />)}
                              helperText={<ErrorMessage name="hsn_sgst" />}
                            />
                            
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                    {/* Buttons */}
                    <Grid item xs={12}>
                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="center"
                        gap={2}
                      >
                        <button
                          type="submit"
                          className="project-thim savebutton"
                        >
                          {editRow ? "Update" : "Save"}
                        </button>
                        <button
                          type="reset"
                          className="project-thim savebutton"
                          onClick={() => handleReset(resetForm)}
                        >
                          Refresh
                        </button>
                      </Box>
                    </Grid>
                  </Grid>
                </Form>
              )
            )}
          </Formik>
        </div>
        <div className=" mt-2 rounded-lg ml-1 mr-1">
          <DataGridTable
            loading={masterLoading}
            rows={rows}
            columns={MasterHSNCodeTable(handleEdit)}
          />
        </div>
      </Box>
    </div>
  );
};

export default HSNCODEMaster;
