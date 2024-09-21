import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Components/Form/StaffMaster";
import Home from "./Pages/Header";
import Footer from "./Pages/Footer";
import CompanyMaster from "./Components/Form/CompanyMaster";
import VehicaleMaster from "./Components/Form/VehicaleMaster";
import LetterDetails from "./Components/Form/LetterDetails";
import Navbar from "./Pages/MainLayout/Navbar"
import OpeningStocks from "./Components/Form/OpeningStocks";
import LedgerMaster from "./Components/Form/LedgerMaster";
const Layout = () => (
  <div>
 
  <Navbar/>
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
        element: <CompanyMaster/>,
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
        element: <LedgerMaster/>,
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
