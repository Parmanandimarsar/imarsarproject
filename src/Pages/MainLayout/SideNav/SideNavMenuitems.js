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
        { text: "Receipt Booking", link: "/receipt-booking", icon: <MailIcon /> },
      ],
    },
    {
      text: "Subdealer",
      icon: <MailIcon />,
      subItems: [
        
        { text: "Sales-Challan", link: "/sales-challan", icon: <MailIcon /> },
        { text: "Sales-Invoice", link: "/sales-invoice", icon: <MailIcon /> },
        { text: "Delivery-Challan", link: "/delivery-challan", icon: <MailIcon /> },
        { text: "Delivery-Invoice", link: "/delivery-invoice", icon: <MailIcon /> },
      ],
    },
    {
      text: "Accounts",
      icon:<InboxIcon /> ,
      subItems: [
        { text: "Account Payment Voucher", link: "/account-payment-voucher", icon: <MailIcon /> },
        { text: "Contra Voucher", link: "/contra-voucher", icon: <MailIcon /> },
        { text: "Cash Books", link: "/cash-books", icon: <MailIcon /> },
        { text: "Expense Books", link: "/expense-book", icon: <MailIcon /> },
        { text: "Ledger view", link: "/ledger-view", icon: <MailIcon /> },
      ],
    },
  ];