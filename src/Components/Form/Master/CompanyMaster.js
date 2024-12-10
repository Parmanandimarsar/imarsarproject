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
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CompanyMaster = () => {
  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("company Name is required"),
    designation: Yup.string().required(" Designation is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    district: Yup.string().required("District is required"),
    state: Yup.string().required("State is required"),
    pinCode: Yup.string()
      .matches(/^[0-9]{6}$/, "Invalid pin code")
      .required("Pin Code is required"),
    country: Yup.string().required("country is required"),
    phone: Yup.string().required("Phone Number is require"),

    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid mobile number")
      .required("Mobile number is required"),
    stdCode: Yup.string().required("STD Code is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    gstNo: Yup.string().required("GST No is required"),
    tinNo: Yup.string().required("Tin Number is required"),
    dealerCode: Yup.string().required("dealer Code is required"),
    jurisDiction: Yup.string().required("jurisDiction is required"),
  });

  const initialValues = {
    companyName: "",
    designation: "",
    address: "",
    city: "",
    district: "",
    state: "",
    pinCode: "",
    country: "",
    phone: "",
    mobile: "",
    stdCode: "",
    email: "",
    gstNo: "",
    tinNo: "",
    dealerCode: "",
    jurisDiction: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values, "value");

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography>Company Master</Typography>
        </Box>
        <Divider className="divider" />
        <div className="pl-1 pr-1">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form autoComplete="off" className="company-master-form">
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
                          <FormLabel>
                            Company Name<span style={{ color: "red" }}> *</span>
                          </FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="companyName"
                            placeholder={"Enter Company Name"}
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.companyName && !!errors.companyName}
                          />
                          <ErrorMessage
                            name="companyName"
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
                          <FormLabel>Designation</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="designation"
                            fullWidth
                            placeholder={"Enter Designation"}
                            variant="outlined"
                            size="small"
                            error={touched.designation && !!errors.designation}
                          />
                          <ErrorMessage
                            name="designation"
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
                            placeholder={"Enter Address"}
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.address && !!errors.address}
                            // helperText={touched.address && errors.address}
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
                          <FormLabel>City</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={Select}
                            fullWidth
                            name="city"
                            size="small"
                            error={touched.city && !!errors.city}
                            // helperText={touched.city && errors.city}
                          >
                            <MenuItem value="City1">City1</MenuItem>
                            <MenuItem value="City2">City2</MenuItem>
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
                          <FormLabel>District</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={Select}
                            name="district"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.district && !!errors.district}
                          >
                            <MenuItem value="City1">district1</MenuItem>
                            <MenuItem value="City2">district2</MenuItem>
                          </Field>

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
                            // helperText={touched.state && errors.state}
                          >
                            <MenuItem value="state1">district1</MenuItem>
                            <MenuItem value="state2">district2</MenuItem>
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
                          <FormLabel>Pin Code</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="pinCode"
                            fullWidth
                            placeholder={"Enter Pin Code"}
                            variant="outlined"
                            size="small"
                            error={touched.pinCode && !!errors.pinCode}
                            // helperText={touched.pinCode && errors.pinCode}
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
                          <FormLabel>Country</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="country"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.country && !!errors.country}
                            // helperText={touched.pinCode && errors.pinCode}
                          />
                          <ErrorMessage
                            name="country"
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
                          <FormLabel>Phone No</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="phone"
                            fullWidth
                            placeholder={"Enter Phone No"}
                            variant="outlined"
                            size="small"
                            error={touched.phone && !!errors.phone}
                            // helperText={touched.mobile && errors.mobile}
                          />
                          <ErrorMessage
                            name="phone"
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
                          <FormLabel>Mobile No</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="mobile"
                            fullWidth
                            placeholder={"Enter Mobile No"}
                            variant="outlined"
                            size="small"
                            error={touched.mobile && !!errors.mobile}
                            // helperText={touched.mobile && errors.mobile}
                          />
                          <ErrorMessage
                            name="mobile"
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
                            variant="outlined"
                            placeholder={"Enter STD Code"}
                            size="small"
                            error={touched.stdCode && !!errors.stdCode}
                            // helperText={touched.stdCode && errors.stdCode}
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

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Email</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="email"
                            type="email"
                            fullWidth
                            placeholder={"Enter Email"}
                            variant="outlined"
                            size="small"
                            error={touched.email && !!errors.email}
                            // helperText={touched.email && errors.email}
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 5*/}

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
                            placeholder={"Enter GST No"}
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.gstNo && !!errors.gstNo}
                          />
                          <ErrorMessage
                            name="gstNo"
                            component="div"
                            className="text-red-600  text-xs"
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
                          <FormLabel>Tin No</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="tinNo"
                            placeholder={"Enter Tin No"}
                            fullWidth
                            size="small"
                            error={touched.tinNo && !!errors.tinNo}
                          />
                          <ErrorMessage
                            name="tinNo"
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
                          <FormLabel>Dealer Code</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={TextField}
                            name="dealerCode"
                            fullWidth
                            placeholder={"Enter Dealer Code"}
                            variant="outlined"
                            size="small"
                            error={touched.dealerCode && !!errors.dealerCode}
                          />
                          <ErrorMessage
                            name="dealerCode"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Row 6*/}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={4}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Juris Diction</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <Field
                            as={Select}
                            name="jurisDiction"
                            fullWidth
                            size="small"
                            error={
                              touched.jurisDiction && !!errors.jurisDiction
                            }
                            // helperText={touched.department && errors.department}
                          >
                            <MenuItem value="jurisDiction">
                              Department1
                            </MenuItem>
                            <MenuItem value="Department2">Department2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="jurisDiction"
                            component="div"
                            className="text-red-600 text-xs "
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>

                {/* Buttons */}
                <Box className="mt-3 flex gap-2 justify-end">
                  <button type="submit" className="project-thim savebutton">
                    Save
                  </button>

                  <button type="button" className="project-thim savebutton">
                    Deactivate
                  </button>
                  <button type="reset" className="project-thim savebutton">
                    Clear
                  </button>
                </Box>
              </Form>
            )}
          </Formik>
        </div>
      </Box>
    </div>
  );
};

export default CompanyMaster;
