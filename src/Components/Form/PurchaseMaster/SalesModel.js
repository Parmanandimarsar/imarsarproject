import React, { useState } from "react";
import { TextField, Grid, FormControl, FormLabel, Select, MenuItem, Radio, RadioGroup, FormControlLabel, Button } from "@mui/material";

const SalesModel = () => {
  const [formData, setFormData] = useState({
    docNo: "",
    date: "",
    caption: "",
    seName: "",
    location: "",
    customer: "",
    financeerName: "",
    entryType: "",
    title: "",
    name: "",
    district: "",
    misc: "",
    address: "",
    state: "",
    city: "",
    mobile: "",
    pin: "",
    taxType: "",
    modelName: "",
    exShowroom: "",
    regd: "",
    insurance: "",
    hpa: "",
    hsnCode: "",
    qty: "",
    tax: "",
    salePrice: "",
    validTo: "",
    totalMisc: "",
    discount: "",
    others: "",
    totalTaxable: "",
    igst: "",
    netAmount: "",
    remarks: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form>
      <Grid container spacing={2}>
        {/* First Row */}
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <FormLabel>Doc No</FormLabel>
            <TextField
              name="docNo"
              value={formData.docNo}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <FormLabel>Date</FormLabel>
            <TextField
              name="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              InputLabelProps={{ shrink: true }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <FormLabel>Caption</FormLabel>
            <TextField
              name="caption"
              value={formData.caption}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <FormLabel>Se Name</FormLabel>
            <Select
              name="seName"
              value={formData.seName}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            >
              {/* Add MenuItem options */}
              <MenuItem value="option1">Option 1</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <FormLabel>Location</FormLabel>
            <Select
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            >
              {/* Add MenuItem options */}
              <MenuItem value="location1">Location 1</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <FormLabel>Customer</FormLabel>
            <Select
              name="customer"
              value={formData.customer}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            >
              {/* Add MenuItem options */}
              <MenuItem value="customer1">Customer 1</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <FormLabel>Financeer Name</FormLabel>
            <Select
              name="financeerName"
              value={formData.financeerName}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            >
              {/* Add MenuItem options */}
              <MenuItem value="financeer1">Financeer 1</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Second Row - Radio Buttons */}
        <Grid item xs={12} sm={6} md={4}>
          <FormControl>
            <RadioGroup row name="entryType" value={formData.entryType} onChange={handleInputChange}>
              <FormControlLabel value="entry" control={<Radio />} label="Entry" />
              <FormControlLabel value="ledger" control={<Radio />} label="Ledger" />
            </RadioGroup>
          </FormControl>
        </Grid>

        {/* Third Row */}
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <FormLabel>Title</FormLabel>
            <Select
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            >
              {/* Add MenuItem options */}
              <MenuItem value="title1">Title 1</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <FormLabel>Name</FormLabel>
            <TextField
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <FormLabel>District</FormLabel>
            <TextField
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Grid>

        {/* Add the remaining fields in a similar manner */}
        {/* Fourth Row */}
        {/* Add "Taxable" and "Tax Paid" Radio and "Add" Button */}
        {/* Fifth Row - Model Name, Ex-ShowRoom, etc. */}
        {/* Sixth Row - Valid To, Total Misc, etc. */}

        {/* Continue adding fields as per your requirements */}
      </Grid>
    </form>
  );
};

export default SalesModel;
