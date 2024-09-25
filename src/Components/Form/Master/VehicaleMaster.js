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
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
 
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SideNave from "../../../Pages/MainLayout/SideNav";
const VehicaleMaster = () => {
  const validationSchema = Yup.object().shape({
    model: Yup.string().required("Model is required"),
    code: Yup.string().required("Code is required"),
    search: Yup.string().required("Search is required"),
    discription: Yup.string().required("Description is required"),
    group: Yup.string().required("Group is required"),
    discountlimit: Yup.string().required("Discount Limit is required"),
    manufacturer: Yup.string().required("Manufacturer is required"),
    withBattery: Yup.string().required("With Battery is required"),
    discountinue: Yup.string().required("Discountinue is required"),
    tradecartno: Yup.string().required("Trade Cart No is required"),
    fuelCapacity: Yup.string().required("Fuel Capacity is required"),
    purchaseprice: Yup.string().required("Purchase Price is required"),
    ex_ShowRoom: Yup.string().required("Ex-ShowRoom Price is required"),
    hsnCode: Yup.string().required("HSN Code is required"),
    wef: Yup.string().required("W.E.F is required"),
  });
  const initialValues = {};

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values, "value");

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };
  return (
    <>
      <div className="bg-gray-100 w-full flex">
        <div className="w-[15%] sm:w-[5%]">
          <SideNave />
        </div>

        <div className="w-[80%] sm:w-[90%] lg:w-[94%] mt-[25px] mb-[50px] mx-auto">
          <Box className="bg-white p-6 rounded-lg shadow-lg" autoComplete="off">
            <Box className="flex justify-between items-center mb-4">
              <Typography
                variant="h4"
                component="h1"
                className="text-center mb-6"
              >
                Letter Details
              </Typography>
              <Box className="flex gap-2"></Box>
            </Box>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form autoComplete="off" className="vehical-master-form">
                  <Grid container spacing={2}>
                    {/* Row 1 */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>Model</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="model"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.model && !!errors.model}
                            />
                            <ErrorMessage
                              name="model"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>Code</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="code"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.code && !!errors.code}
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
                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>Search</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={Select}
                              fullWidth
                              name="search"
                              size="small"
                              error={touched.city && !!errors.city}
                              // helperText={touched.city && errors.city}
                            >
                              <MenuItem value="search1">City1</MenuItem>
                              <MenuItem value="search2">City2</MenuItem>
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
                    {/* Row 2 */}
                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>Discription</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="discription"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.discription && !!errors.discription
                              }
                            />
                            <ErrorMessage
                              name="discription"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>Group</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={Select}
                              fullWidth
                              name="group"
                              size="small"
                              error={touched.group && !!errors.group}
                              // helperText={touched.city && errors.city}
                            >
                              <MenuItem value="group1">group1</MenuItem>
                              <MenuItem value="group2">group1</MenuItem>
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
                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>Discount Limit</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="discountlimit"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.discountlimit && !!errors.discountlimit
                              }
                            />
                            <ErrorMessage
                              name="discountlimit"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>Manufacturer</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={Select}
                              name="manufacturer"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.manufacturer && !!errors.manufacturer
                              }
                            >
                              <MenuItem value="manufacturer1">
                                manufacturer1
                              </MenuItem>
                              <MenuItem value="manufacturer2">
                                manufacturer2
                              </MenuItem>
                            </Field>

                            <ErrorMessage
                              name="manufacturer"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>With Battery</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={Select}
                              name="withBattery"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.withBattery && !!errors.withBattery
                              }
                            >
                              <MenuItem value="withBattery1">
                                withBattery1
                              </MenuItem>
                              <MenuItem value="withBattery2">
                                withBattery2
                              </MenuItem>
                            </Field>
                            <ErrorMessage
                              name="withBattery"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>

                    {/* Row 3 */}
                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>Discountinue</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={Select}
                              name="discountinue"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.discountinue && !!errors.discountinue
                              }
                            >
                              <MenuItem value="discountinue1">
                                discountinue1
                              </MenuItem>
                              <MenuItem value="discountinue2">
                                discountinue2
                              </MenuItem>
                            </Field>
                            <ErrorMessage
                              name="discountinue"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>Trade Cert.No </FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="tradecartno"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.tradecartno && !!errors.tradecartno
                              }
                            />
                            <ErrorMessage
                              name="tradecartno"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>Fuel Capacity</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="fuelCapacity"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.fuelCapacity && !!errors.fuelCapacity
                              }
                            />
                            <ErrorMessage
                              name="fuelCapacity"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>Purchase Price</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="purchaseprice"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.purchaseprice && !!errors.purchaseprice
                              }
                            />
                            <ErrorMessage
                              name="purchaseprice"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>

                    {/* Row 4 */}

                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>Ex-ShowRoom</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="ex_ShowRoom"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.ex_ShowRoom && !!errors.ex_ShowRoom
                              }
                            />
                            <ErrorMessage
                              name="ex_ShowRoom"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>HSN Code</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={Select}
                              name="hsnCode"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.hsnCode && !!errors.hsnCode}
                            ></Field>
                            <ErrorMessage
                              name="hsnCode"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>W.E.F Date</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="wef"
                              type="email"
                              fullWidth
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

                    {/* Row 5*/}

                    {/* Row 6*/}
                  </Grid>
                  <Typography variant="h6" sx={{ marginTop: "20px" }}>
                    Vehicle Details Table
                  </Typography>
                  <div className="overflow-x-scroll  shadow-lg rounded-b-lg mt-2">
                    <Table className="min-w-full">
                      {/* Table Header */}
                      <TableHead>
                        <TableRow
                          sx={{
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                            backgroundColor: "#003e78",
                            color: "white",
                          }}
                        >
                          {[
                            "HSNCODE",
                            "IGST",
                            "CGST",
                            "SGST",
                            "CESS%",
                            "REGD.",
                            "INSUR",
                            "HPA",
                            "AGREE",
                            "OTHER",
                            "DISCOUNT %",
                          ].map((col) => (
                            <TableCell
                              key={col}
                              className="text-white font-semibold"
                              sx={{
                                color: "white",
                                gap: "5px",
                                borderRight: "1px solid white",
                                "&:first-of-type": {
                                  borderTopLeftRadius: "10px",
                                },
                                "&:last-of-type": {
                                  borderTopRightRadius: "10px",
                                },
                              }}
                            >
                              {col}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>

                      {/* Table Body */}
                      <TableBody>
                        <TableRow>
                          {[
                            "hsnCode",
                            "igst",
                            "cgst",
                            "sgst",
                            "cssPercent",
                            "regd",
                            "insar",
                            "hpa",
                            "agrre",
                            "accss",
                            "other",
                            "discount",
                          ].map((fieldName) => (
                            <TableCell key={fieldName} className="border-b">
                              <Field
                                as={TextField}
                                name={fieldName}
                                fullWidth
                                variant="standard"
                                size="small"
                                error={
                                  touched[fieldName] && !!errors[fieldName]
                                }
                                className="border-gray-300 outline-none"
                              />
                              <ErrorMessage
                                name={fieldName}
                                component="div"
                                className="text-red-600 text-xs"
                              />
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  {/* Buttons */}
                  <Box className="mt-6 flex items-end gap-4 ml-0 justify-end">
                    <Button
                      size="small"
                      type="submit"
                      color="primary"
                      variant="contained"
                      className="p-2"
                    >
                      Save
                    </Button>

                    <Button
                      size="small"
                      type="button"
                      color="error"
                      variant="outlined"
                      className="p-2"
                    >
                      Delete
                    </Button>

                    <Button
                      size="small"
                      type="reset"
                      color="default"
                      variant="outlined"
                      className="p-2"
                    >
                      Refresh
                    </Button>

                    <Button
                      size="small"
                      color="default"
                      variant="outlined"
                      className="p-2"
                    >
                      Close
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </div>
      </div>
    </>
  );
};

export default VehicaleMaster;
