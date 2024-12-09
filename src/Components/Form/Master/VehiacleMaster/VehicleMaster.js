import React, { useEffect, useState } from "react";
import {
  TextField,
  Typography,
  FormControl,
  Box,
  FormLabel,
  Divider,
  Grid,
  Checkbox,
  FormControlLabel,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DataGridTable from "../../../ConstantComponents/DataGridTable";
import { MasterHSNCodeTable } from "../../../TableField/TablefieldsColumns";
import { useDispatch, useSelector } from "react-redux";
import useNotification from "../../../ConstantComponents/Notifications/useNotification";
import LetterDetails from "./LetterDetails";
import OpningStock from "./OpningStock";
// import {
//   fetchProductData,
//   postProductData,
//   putProductData,
// } from "../../../redux/slices/actions/masterAction";

const VehicleMaster = () => {
  const notification = useNotification();
  const dispatch = useDispatch();
  const [rows, setRows] = useState([]);
  const [checkBox, setCheckBox] = useState({
    openingMaster: true,
    letterDetails: true,
  });
  const [editRow, setEditRow] = useState(null);
  const { masterLoading, getProductData } = useSelector(
    (state) => state.master
  );

  useEffect(() => {
    // dispatch(fetchProductData());
  }, []);

  useEffect(() => {
    setRows(getProductData);
  }, [getProductData]);

  // Validation schema
  const validationSchema = Yup.object({
    model: Yup.string().required("Model is required"),
    code: Yup.string().required("Code is required"),
    description: Yup.string().required("Description is required"),
    group: Yup.string().required("Group is required"),
    discountLimit: Yup.number()
      .min(0, "Value must be 0 or greater")
      .required("Discount Limit is required"),
    manufacturer: Yup.string().required("Manufacturer is required"),
    withBattery: Yup.string().required("withBattery is required"),
    discontinue: Yup.string().required("discontinue is required"),
    tradeCertNo: Yup.string().required("Trade Cert. No. is required"),
    fuelCapacity: Yup.number()
      .min(0, "Fuel capacity must be positive")
      .required("Fuel capacity is required"),
    purchasePrice: Yup.number()
      .min(0, "Purchase price must be positive")
      .required("Purchase price is required"),
    exShowroomPrice: Yup.number()
      .min(0, "Ex-showroom price must be positive")
      .required("Ex-showroom price is required"),
    hsnCode: Yup.string().required("HSN Code is required"),
    effectiveDate: Yup.date().required("Effective date is required"),
  });

  const initialValues = {
    model: "",
    code: "",
    description: "",
    group: "",
    discountLimit: "",
    manufacturer: "",
    with_battery: "",
    discontinue: "",
    tradeCertNo: "",
    fuelCapacity: "",
    purchasePrice: "",
    exShowroomPrice: "",
    hsnCode: "",
    effectiveDate: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log("values", values);

    if (editRow) {
      const updateData = { ...editRow, ...values };
      //   await dispatch(putProductData(updateData));
      setEditRow(null);
    } else {
      const newRow = { ...values, id: Date.now() };
      //   await dispatch(postProductData(newRow));
    }
    // dispatch(fetchProductData());
    resetForm();
  };

  const handleEdit = (row) => {
    setEditRow(row);
  };
  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;
    setCheckBox((prev) => ({
      ...prev,
      [name]: checked,
    }));
    console.log(`${name} changed to ${checked}`);
  };
  console.log("checkbox", checkBox);

  const handleReset = (resetForm) => {
    setEditRow(null);
    resetForm();
  };

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography>Vehicle Master</Typography>
        </Box>
        <Divider className="divider" />
        <div className="pl-1 pr-1">
          <Formik
            initialValues={initialValues || editRow}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ resetForm, errors, values }) => (
              <Form>
                <Grid container spacing={1}>
                 
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Model</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <TextField
                            
                            name="model"
                            placeholder="Enter Model"
                            fullWidth
                            variant="outlined"
                            size="small"
                            
                          />
                          <ErrorMessage
                            name="model"
                            component="div"
                            className="text-red-600 text-[10px]"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Code */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Code</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <TextField
                           
                            name="code"
                            placeholder="Enter Code"
                            fullWidth
                            variant="outlined"
                            size="small"
                            
                          />
                          <ErrorMessage
                            name="code"
                            component="div"
                            className="text-red-600 text-xs"
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
                          <TextField
                            
                            name="description"
                            placeholder="Enter Description"
                            fullWidth
                            variant="outlined"
                            size="small"
                           
                          />
                          <ErrorMessage
                            name="description"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Group */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Group</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={Select}
                            name="group"
                            placeholder="Select Group"
                            fullWidth
                            variant="outlined"
                            size="small"
                            select
                          >
                            <MenuItem value="Group1">Group 1</MenuItem>
                            <MenuItem value="Group2">Group 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="group"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Discount Limit */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Discount Limit</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <TextField
                           
                            name="discount_limit"
                            type="number"
                            placeholder="Enter Discount Limit"
                            fullWidth
                            variant="outlined"
                            size="small"
                            
                          />
                          <ErrorMessage
                            name="discount_limit"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Manufacturer */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Manufacturer</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <TextField
                           
                            name="manufacturer"
                            placeholder="Enter Manufacturer"
                            fullWidth
                            variant="outlined"
                            size="small"
                           
                          />
                          <ErrorMessage
                            name="manufacturer"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* With Battery */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>With Battery</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={Select}
                            name="with_battery"
                            select
                            fullWidth
                            variant="outlined"
                            size="small"
                            displayEmpty
                          >
                            <MenuItem value="" disabled>
                              Yes
                            </MenuItem>
                            <MenuItem value="Yes">Yes</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="with_battery"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Discontinue */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Discontinue</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={Select}
                            name="discontinue"
                            select
                            fullWidth
                            variant="outlined"
                            size="small"
                          >
                            <MenuItem value="Yes">Yes</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="discontinue"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Trade Certificate Number */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Trade Cert. No.</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <TextField  
                            name="trade_cert_no"
                            placeholder="Enter Trade Cert. No."
                            fullWidth
                            variant="outlined"
                            size="small"
                           
                          />
                          <ErrorMessage
                            name="trade_cert_no"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Fuel Capacity (Litres) */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Fuel Capacity (L.)</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <TextField
                            name="fuel_capacity"
                            type="number"
                            placeholder="Enter Fuel Capacity"
                            fullWidth
                            variant="outlined"
                            size="small"
                           
                          />
                          <ErrorMessage
                            name="fuel_capacity"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Purchase Price */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Purchase Price</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <TextField
                           
                            name="purchase_price"
                            type="number"
                            placeholder="Enter Purchase Price"
                            fullWidth
                            variant="outlined"
                            size="small"
                            
                          />
                          <ErrorMessage
                            name="purchase_price"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Ex-Showroom Price */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Ex-Showroom Price</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <TextField
                            name="exShowroomPrice"
                            type="number"
                            placeholder="Enter Ex-Showroom Price"
                            fullWidth
                            variant="outlined"
                            size="small"
                            
                          />
                          <ErrorMessage
                            name="exShowroomPrice"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

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
                          <FormLabel>HSN Code</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <TextField
                           
                            name="hsnCode"
                            placeholder="Enter HSN Code"
                            fullWidth
                            variant="outlined"
                            size="small"
                           
                          />
                          <ErrorMessage
                            name="hsnCode"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Effective Date */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Effective Date</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <TextField
                            
                            name="effectiveDate"
                            type="date"
                            fullWidth
                            variant="outlined"
                            size="small"
                            InputLabelProps={{
                              shrink: true,
                            }}
                           
                          />
                          <ErrorMessage
                            name="effectiveDate"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Opening Master Checkbox */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="letterDetails"
                          size="small"
                          checked={checkBox.letterDetails} // Bind to Formik values
                          onChange={handleCheckBoxChange} // Handle change
                        />
                      }
                      label="Letter Details"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          name="openingMaster"
                          checked={checkBox.openingMaster} // Bind to Formik values
                          onChange={handleCheckBoxChange} // Handle change
                        />
                      }
                      label="Opening Master"
                    />
                  </Grid>

                  {/* Letter Details Checkbox */}
                  <Grid item xs={12} sm={6} md={4} lg={3}></Grid>

                  {/* Buttons */}
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end" gap={2}>
                      <button type="submit" className="project-thim savebutton">
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
            )}
          </Formik>
        </div>
        <Divider className="divider" />
        <LetterDetails open={checkBox.letterDetails} />
        <Divider className="divider" />
        <OpningStock open={checkBox.openingMaster} />
      </Box>
    </div>
  );
};

export default VehicleMaster;
