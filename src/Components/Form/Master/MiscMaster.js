import React, { useEffect, useState } from "react";
import {
  TextField,
  Checkbox,
  Typography,
  Box,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
  Divider,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DataGridTable from "../../ConstantComponents/DataGridTable";
import { miscMasterTable } from "../../TableField/TablefieldsColumns";
import {
  fetchMiscData,
  postMiscData,
} from "../../../redux/slices/actions/master";
import { useDispatch, useSelector } from "react-redux";

const MiscMaster = () => {
  const dispatch = useDispatch();
  const [rows, setRows] = useState([]); // State for table rows
  const [editRow, setEditRow] = useState(null); // Track row being edited
  const [selectedOption, setSelectedOption] = useState(""); // State for selected radio option
  const {
    miscData = [],
    loading,
    error,
  } = useSelector((state) => state.master);

  // Radio button options
  const radioOptions = [
    "Title",
    "Bank Mode",
    "Department",
    "Designation",
    "Source",
    "Service Type",
    "Labour Group",
    "Ledger Group",
    "Colour",
    "Unit",
    "Sale Certificate Details",
    "Item Group",
    "Category",
  ];

  // Fetch Miscellaneous Data
  useEffect(() => {
    dispatch(fetchMiscData());
  }, [dispatch]);

  useEffect(() => {
    if (miscData) {
      setRows(
        miscData.map((item) => ({
          id: item.misc_id, // Use misc_id as unique identifier
          misc_name: item.misc_name,
          type: item.type,
          is_active: item.is_active,
          created_datetime: item.created_datetime,
          modified_datetime: item.modified_datetime,
        }))
      );
    }
  }, [miscData]);

  // Form validation schema
  const validationSchema = Yup.object().shape({
    misc_name: Yup.string().required("Misc Name is required"),
  });

  // Handle radio button change
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handle form submission
  const submitForm = async (values, { resetForm }) => {
    const newRow = {
      misc_name: values.misc_name,
      is_active: values.is_active,
      type: selectedOption,
      created_datetime: new Date().toISOString(),
      modified_datetime: editRow ? new Date().toISOString() : null,
    };

    try {
      if (editRow) {
        // Update existing row
        const updatedRow = { ...editRow, ...newRow };
        dispatch(postMiscData(updatedRow)); // Update API
        setRows((prevRows) =>
          prevRows.map((row) => (row.id === editRow.id ? updatedRow : row))
        );
      } else {
        // Add new row
        dispatch(postMiscData(newRow)); // Save API
        setRows((prevRows) => [...prevRows, { ...newRow, id: Date.now() }]); // Simulate ID
      }

      resetForm(); // Reset the form
      setEditRow(null); // Reset editing state
      setSelectedOption(""); // Reset radio selection
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // Handle row edit
  const handleEdit = (row) => {
    setEditRow(row); // Set editing row
    setSelectedOption(row.type); // Set the radio group based on the row's type
  };

  // Define dynamic initial values for Formik
  const initialValues = editRow
    ? { misc_name: editRow.misc_name, is_active: editRow.is_active }
    : { misc_name: "", is_active: false };

  return (
    <div className="mb-[50px] pl-2">
      <Box className="p-1 rounded-lg shadow-lg border" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography>Misc. Master</Typography>
        </Box>
        <Divider className="divider" />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitForm}
          enableReinitialize={true}
        >
          {({ errors, touched, isSubmitting, values, handleChange }) => (
            <Form autoComplete="off">
              {/* Radio Group */}
              <Grid container spacing={1} pt={1} pl={2}>
                <FormControl fullWidth>
                  <RadioGroup
                    row
                    value={selectedOption}
                    onChange={handleRadioChange}
                  >
                    {radioOptions.map((option, index) => (
                      <FormControlLabel
                        key={index}
                        control={<Radio size="small" />}
                        value={option}
                        label={option}
                        sx={{
                          "& .MuiFormControlLabel-label": {
                            fontWeight: "400",
                          },
                        }}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Divider className="divider" />

              {/* Form Fields */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={4}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Misc Name</FormLabel>
                      </Grid>
                      <Grid item xs={7}>
                        <Field
                          as={TextField}
                          name="misc_name"
                          fullWidth
                          variant="outlined"
                          placeholder="Misc Name"
                          size="small"
                          error={touched.misc_name && !!errors.misc_name}
                        />
                        <ErrorMessage
                          name="misc_name"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Grid container alignItems="center">
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          name="is_active"
                          checked={values.is_active}
                          onChange={handleChange}
                        />
                      }
                      label="Active"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={5}>
                  <Box className="flex items-end gap-4 ml-0 justify-end ">
                    <button
                      type="submit"
                      className="p-2 savebutton project-thim"
                      disabled={isSubmitting}
                    >
                      {editRow !== null ? "Update" : "Save"}
                    </button>

                    <button
                      size="small"
                      type="reset"
                      className="p-2 savebutton project-thim"
                      onClick={() => {
                        setEditRow(null); // Reset editing state
                        setSelectedOption(""); // Reset radio selection
                      }}
                    >
                      Refresh
                    </button>
                  </Box>
                </Grid>
              </Grid>

              {/* Table */}
              <Grid item xs={12} sm={6} md={6}>
                <Divider className="divider" />
                <DataGridTable
                  rows={rows}
                  columns={miscMasterTable(handleEdit)}
                />
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default MiscMaster;
