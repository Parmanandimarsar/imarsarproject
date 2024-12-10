import React from "react";
import {
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  Box,
  FormLabel,
  Grid,
  Divider,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { StaffMasterColumns } from "../../TableField/TablefieldsColumns";
import DataGridTable from "../../ConstantComponents/DataGridTable";

const LedgerMaster = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    specialId: Yup.string().required("Special ID is required"),
    search: Yup.string().required("Search is required"),
    ledgerName: Yup.string().required("Ledger Name is required"),
    s_o_w_o_d_o: Yup.string().required("S/o-W/o.D/o is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    stdCode: Yup.string().required("STD Code is required"),
    district: Yup.string().required("District is required"),
    mobileNo: Yup.string().required("Mobile No is required"),
    state: Yup.string().required("State is required"),
    whatsappNo: Yup.string().required("WhatsApp No is required"),
    aadharNo: Yup.string().required("Aadhar No is required"),
    pinCode: Yup.string().required("Pin Code is required"),
    mailId: Yup.string().required("Mail ID is required"),
    panNo: Yup.string().required("Pan No is required"),
    creditLimit: Yup.string().required("Credit Limit is required"),
    creditLimitDate: Yup.string().required("Credit Limit Date is required"),
    ledgerGroup: Yup.string().required("Ledger Group is required"),
    openingBalance: Yup.string().required("Opening Balance is required"),
    gstDealerType: Yup.string().required("GST Dealer Type is required"),
    gstNo: Yup.string().required("GST No is required"),
    staffName: Yup.string().required("Staff Name is required"),
    category: Yup.string().required("Category is required"),
    location: Yup.string().required("Location is required"),
    wef: Yup.string().required("W.E.F  is required"),
    wefDate: Yup.string().required("W.E.F Date is required"),
    dueDate: Yup.string().required("Due Date is required"),
  });

  const initialValues = {
    title: "",
    specialId: "",
    search: "",
    ledgerName: "",
    s_o_w_o_d_o: "",
    address: "",
    city: "",
    stdCode: "",
    district: "",
    mobileNo: "",
    state: "",
    whatsappNo: "",
    aadharNo: "",
    pinCode: "",
    mailId: "",
    panNo: "",
    creditLimit: "",
    creditLimitDate: "",
    ledgerGroup: "",
    openingBalance: "",
    gstDealerType: "",
    gstNo: "",
    staffName: "",
    category: "",
    location: "",
    wefDate: "",
    dueDate: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values, "Submitted values");

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };
  const handleEdit = () => {};
  return (
    <>
      <div className=" mb-[50px] pl-2">
        <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
          <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
            <Typography>Ledger Master Details</Typography>
          </Box>
          <Divider className="divider" />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form autoComplete="off" className="ledger-details-form">
                <Grid container spacing={1}>
                  {/* Row 1 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Title</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={Select}
                            name="title"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.title && !!errors.title}
                          >
                            <MenuItem value=" " disabled>
                              {" "}
                              Select Title
                            </MenuItem>
                            <MenuItem value="title1">Title 1</MenuItem>
                            <MenuItem value="title2">Title 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="title"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Special ID</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={Select}
                            name="specialId"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.specialId && !!errors.specialId}
                          >
                            <MenuItem value=" " disabled>
                              {" "}
                              Select Special ID
                            </MenuItem>
                            <MenuItem value="id1">ID 1</MenuItem>
                            <MenuItem value="id2">ID 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="specialId"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Search</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={Select}
                            name="search"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.search && !!errors.search}
                          >
                            <MenuItem value="" disabled>
                              Search
                            </MenuItem>
                            <MenuItem value="search1">Search 1</MenuItem>
                            <MenuItem value="search2">Search 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="search"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Ledger Name</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="ledgerName"
                            fullWidth
                            placeholder="Enter ledger Name"
                            variant="outlined"
                            size="small"
                            error={touched.ledgerName && !!errors.ledgerName}
                          />
                          <ErrorMessage
                            name="ledgerName"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 2 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>S/o-W/o.D/o</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={Select}
                            name="s_o_w_o_d_o"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.s_o_w_o_d_o && !!errors.s_o_w_o_d_o}
                          >
                            <MenuItem value="" disabled>
                              {" "}
                              Select Option{" "}
                            </MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="s_o_w_o_d_o"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Address</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="address"
                            placeholder="Enter address "
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.address && !!errors.address}
                          />
                          <ErrorMessage
                            name="address"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>City</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={Select}
                            name="city"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.city && !!errors.city}
                          >
                            <MenuItem value="" disabled>
                              Select City{" "}
                            </MenuItem>
                            <MenuItem value="city2">City 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="city"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>STD Code</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="stdCode"
                            fullWidth
                            placeholder="Enter DTD Code"
                            variant="outlined"
                            size="small"
                            error={touched.stdCode && !!errors.stdCode}
                          />
                          <ErrorMessage
                            name="stdCode"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 3 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>District</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="district"
                            fullWidth
                            placeholder="Enter District Name"
                            variant="outlined"
                            size="small"
                            error={touched.district && !!errors.district}
                          />
                          <ErrorMessage
                            name="district"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>State</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={Select}
                            name="state"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.state && !!errors.state}
                          >
                            <MenuItem value="" disabled>
                              {" "}
                              Select State
                            </MenuItem>
                            <MenuItem value="state2">State 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="state"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>WhatsApp No</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="whatsappNo"
                            fullWidth
                            placeholder="Enter WhatsApp No"
                            variant="outlined"
                            size="small"
                            error={touched.whatsappNo && !!errors.whatsappNo}
                          />
                          <ErrorMessage
                            name="whatsappNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Aadhar No</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="aadharNo"
                            fullWidth
                            placeholder="Enter aadhar No"
                            variant="outlined"
                            size="small"
                            error={touched.aadharNo && !!errors.aadharNo}
                          />
                          <ErrorMessage
                            name="aadharNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 4 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Pin Code</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="pinCode"
                            fullWidth
                            placeholder="Enter Pin Code"
                            variant="outlined"
                            size="small"
                            error={touched.pinCode && !!errors.pinCode}
                          />
                          <ErrorMessage
                            name="pinCode"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Mail ID</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="mailId"
                            fullWidth
                            placeholder="Enter Mail ID"
                            variant="outlined"
                            size="small"
                            error={touched.mailId && !!errors.mailId}
                          />
                          <ErrorMessage
                            name="mailId"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>PAN No</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="panNo"
                            fullWidth
                            placeholder="Enter PAN No"
                            variant="outlined"
                            size="small"
                            error={touched.panNo && !!errors.panNo}
                          />
                          <ErrorMessage
                            name="panNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Credit Limit</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="creditLimit"
                            fullWidth
                            placeholder="Enter Credit Limit"
                            variant="outlined"
                            size="small"
                            error={touched.creditLimit && !!errors.creditLimit}
                          />
                          <ErrorMessage
                            name="creditLimit"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 5 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Credit Limit Date</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="creditLimitDate"
                            fullWidth
                            placeholder="Enter Credit Limit Date"
                            variant="outlined"
                            size="small"
                            error={
                              touched.creditLimitDate &&
                              !!errors.creditLimitDate
                            }
                          />
                          <ErrorMessage
                            name="creditLimitDate"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Ledger Group</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={Select}
                            name="ledgerGroup"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.ledgerGroup && !!errors.ledgerGroup}
                          >
                            <MenuItem value="" disabled>
                              {" "}
                              Select Group{" "}
                            </MenuItem>
                            <MenuItem value="group2">Group 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="ledgerGroup"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Opening Balance</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="openingBalance"
                            fullWidth
                            variant="outlined"
                            placeholder="Enter Opening Balance"
                            size="small"
                            error={
                              touched.openingBalance && !!errors.openingBalance
                            }
                          />
                          <ErrorMessage
                            name="openingBalance"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>GST Dealer Type</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={Select}
                            name="gstDealerType"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={
                              touched.gstDealerType && !!errors.gstDealerType
                            }
                          >
                            <MenuItem value="" disabled>
                              {" "}
                              Select Type{" "}
                            </MenuItem>
                            <MenuItem value="type2">Type 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="gstDealerType"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 6 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>GST No</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="gstNo"
                            fullWidth
                            placeholder="Enter GST No"
                            variant="outlined"
                            size="small"
                            error={touched.gstNo && !!errors.gstNo}
                          />
                          <ErrorMessage
                            name="gstNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Staff Name</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="staffName"
                            fullWidth
                            placeholder="Enter Staff Name"
                            variant="outlined"
                            size="small"
                            error={touched.staffName && !!errors.staffName}
                          />
                          <ErrorMessage
                            name="staffName"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Category</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={Select}
                            name="category"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.category && !!errors.category}
                          >
                            <MenuItem value="" disabled>
                              {" "}
                              Select Category{" "}
                            </MenuItem>
                            <MenuItem value="category2">Category 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="category"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

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
                            as={TextField}
                            name="location"
                            fullWidth
                            placeholder="Enter Location"
                            variant="outlined"
                            size="small"
                            error={touched.location && !!errors.location}
                          />
                          <ErrorMessage
                            name="location"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 7 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>W.E.F</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="wef"
                            fullWidth
                            placeholder="Enter W.E.F"
                            variant="outlined"
                            size="small"
                            error={touched.wef && !!errors.wef}
                          />
                          <ErrorMessage
                            name="wef"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* W.E.F Date */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>W.E.F Date</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            type="date"
                            name="wefDate"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.wefDate && !!errors.wefDate}
                          />
                          <ErrorMessage
                            name="wefDate"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Due Date */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Due Date</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            type="date"
                            name="dueDate"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.dueDate && !!errors.dueDate}
                          />
                          <ErrorMessage
                            name="dueDate"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>
                {/* Submit Button */}
                <Box className="mt-6 flex items-end gap-4 ml-0 justify-end">
                  <button type="submit" className="project-thim savebutton ">
                    Save
                  </button>
                  <button
                    type="reset"
                    color="default"
                    className="project-thim savebutton "
                  >
                    Refresh
                  </button>
                </Box>
              </Form>
            )}
          </Formik>

          <DataGridTable rows={""} columns={StaffMasterColumns(handleEdit)} />
        </Box>
      </div>
    </>
  );
};

export default LedgerMaster;
