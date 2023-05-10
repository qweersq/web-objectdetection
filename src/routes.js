// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import Profile from "views/Dashboard/Profile";
import Sensor from "views/Dashboard/Sensor";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";



var dashRoutes = [
  {
    hide : false,
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    hide : false,
    path: "/histories",
    name: "History",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    hide : false,
    path: "/accounts",
    name: "Account",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  {
    hide : false,
    path: "/sensors",
    name: "Sensor",
    icon: <SupportIcon color="inherit" />,
    component: Sensor,
    layout: "/admin",
  },
  {
    hide : true,
    path: "/login",
    name: "Sign In",
    rtlName: "لوحة القيادة",
    icon: <DocumentIcon color="inherit" />,
    component: SignIn,
    layout: "/login",
  },
  // {
  //   name: "ACCOUNT PAGES",
  //   category: "account",
  //   rtlName: "صفحات",
  //   state: "pageCollapse",
  //   views: [
  //     {
  //       path: "/profile",
  //       name: "Profile",
  //       rtlName: "لوحة القيادة",
  //       icon: <PersonIcon color="inherit" />,
  //       secondaryNavbar: true,
  //       component: Profile,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/signin",
  //       name: "Sign In",
  //       rtlName: "لوحة القيادة",
  //       icon: <DocumentIcon color="inherit" />,
  //       component: SignIn,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/signup",
  //       name: "Sign Up",
  //       rtlName: "لوحة القيادة",
  //       icon: <RocketIcon color="inherit" />,
  //       secondaryNavbar: true,
  //       component: SignUp,
  //       layout: "/auth",
  //     },
  //   ],
  // },
];
export default dashRoutes;
