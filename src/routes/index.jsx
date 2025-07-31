import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import AboutUs from "../pages/aboutus";
import ContectUs from "../pages/contect";
import SignUp from "../pages/signup";

export const routes = createBrowserRouter([
  {
    path: "/",

    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { element: <Home />, path: "/" },
      { element: <AboutUs />, path: "about-us" },
      { element: <ContectUs />, path: "contect-us" },
      { element: <SignUp />, path: "sign-up" },
      //   { element: <Contactus />, path: "contact-us" },
      //   { element: <Puzzle />, path: "puzzle" },
      //   { element: <TermsAndConditions />, path: "terms-and-conditions" },
      //   { element: <PrivacyAndPolicy />, path: "privacy-and-policy" },
      //   { element: <Login />, path: "login" },
      //   { element: <SignUp />, path: "signup" },
      //   { element: <AllEvents />, path: "all-events" },
      //   { element: <ProfileCard />, path: "Profile" },
    ],
  },
]);
