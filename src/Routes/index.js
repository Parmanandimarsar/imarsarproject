import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "../Pages/Login";

import SignUp from "../Components/Form/Master/StaffMaster";

import Home from "../Pages/Header";
import Footer from "../Pages/Footer";
import CompanyMaster from "../Components/Form/Master/CompanyMaster";
import VehicaleMaster from "../Components/Form/Master/VehicaleMaster";
import LetterDetails from "../Components/Form/Master/LetterDetails";
import Navbar from "../Pages/MainLayout/Navbar";
import OpeningStocks from "../Components/Form/Master/OpeningStocks";
import LedgerMaster from "../Components/Form/Master/LedgerMaster";
import LedgerTempAddresh from "../Components/Form/Master/LedgerTempAddresh";
import LabourMaster from "../Components/Form/Master/LabourMaster";
import MiscMaster from "../Components/Form/Master/MiscMaster";
import VehicleOrder from "../Components/Form/PurchaseMaster/VehicleOrder";
import PurchaseChallanVehicle from '../Components/Form/PurchaseMaster/PurchaseChallan';
import PurchaseChallan from '../Components/Form/PurchaseMaster/PurchaseChallan';
import PaymentVoucher from '../Components/Form/PurchaseMaster/PaymentVoucher';
import SalesModel from '../Components/Form/PurchaseMaster/SalesModel';
import ReceiptBooking from '../Components/Form/PurchaseMaster/ReceiptBooking';
import SalesChallan from '../Components/Form/Subdealer/SalesChallan';
import SalesInvoice from '../Components/Form/Subdealer/SalesInvoice';
import DeliveryChallan from '../Components/Form/Subdealer/DeliveryChallan';
import DeliveryInvoice from '../Components/Form/Subdealer/DeliveryInvoice';
const Layout = () => (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <CompanyMaster />,
        },
        {
          path: "/letter-details",
          element: <LetterDetails />,
        },
        {
          path: "/vehical-master",
          element: <SignUp />,
        },
        {
          path: "/opening-stocks",
          element: <OpeningStocks />,
        },
        {
          path: "/ledger-master",
          element: <LedgerMaster />,
        },
        {
          path: "/labour-master",
          element: <LabourMaster />,
        },
        {
          path: "/ledger-temp-addresh",
          element: <LedgerTempAddresh />,
        },
        {
          path: "/miscmaster",
          element: <MiscMaster />,
        },
        {
          path: "/vehicle-order",
          element: <VehicleOrder />,
        },
        {
          path: "/Purchase-Challan-Vehicle",
          element: <PurchaseChallanVehicle />,
        },
        {
          path: "/vehicle-order",
          element: <VehicleOrder />,
        },
        {
          path: "/payment-voucher",
          element: <PaymentVoucher />,
        },
        {
          path: "/sales-model",
          element: <SalesModel/>,
        },
        {
          path: "/receipt-booking",
          element: <ReceiptBooking/>,
        },
        {
          path: "/sales-challan(",
          element: <SalesChallan/>,
        },
        {
          path: "/sales-invoice",
          element: <SalesInvoice/>,
        },
        {
          path: "/delivery-challan",
          element: <DeliveryChallan/>,
        },
        {
          path: "/delivery-invoice",
          element: <DeliveryInvoice/>,
        },
      ],
    },
  
    {
      path: "/login",
      element: <Login />,
    },
  
    {
      path: "/vehicale-master",
      element: <VehicaleMaster />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
const Routes = () => {
    
    return <RouterProvider router={router} />
}

export default Routes;

