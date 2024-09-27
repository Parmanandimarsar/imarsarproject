import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
export const menuItems = [
    {
      text: " Master",
      icon: <MailIcon />,
      subItems: [
       
        { text: "Vehical-Master", link: "/vehical-master", icon: <MailIcon /> },
        { text: "Letter-Details", link: "/letter-details", icon: <MailIcon /> },
        { text: "Opening-Master", link: "/opening-stocks", icon: <MailIcon /> },
        { text: "Ledger-Master", link: "/ledger-master", icon: <MailIcon /> },
        { text: "Temp-Addresh", link: "/ledger-temp-addresh", icon: <MailIcon /> },
        { text: "Labour-Master", link: "/labour-master", icon: <MailIcon /> },
        { text: "Misc-Master", link: "/miscmaster", icon: <MailIcon /> },
      ],
    },
    {
      text: "Purchase Master",
      icon:<InboxIcon /> ,
      subItems: [
        { text: "Vehicle Order", link: "/vehicle-order", icon: <MailIcon /> },
        { text: "Purchase Challan Vehicle", link: "/Purchase-Challan-Vehicle", icon: <MailIcon /> },
        { text: "Payment Voucher", link: "/payment-voucher", icon: <MailIcon /> },
        { text: "Sales Model", link: "/sales-model", icon: <MailIcon /> },
      ],
    },
    {
      text: "Labour Master",
      icon: <MailIcon />,
      subItems: [
        
        { text: "Company-Master", link: "/company-master", icon: <MailIcon /> },
      ],
    },
    {
      text: "Starred",
      icon:<InboxIcon /> ,
      subItems: [
        { text: "Letter-Details", link: "/letter-details", icon: <MailIcon /> },
        { text: "Vehical-Master", link: "/vehical-master", icon: <MailIcon /> },
        { text: "Company-Master", link: "/company-master", icon: <MailIcon /> },
      ],
    },
  ];