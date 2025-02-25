
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import SupracoderProfilePage from "./SupracoderProfilePage";
import Home from "./Home";
import MyBounties from "./MyBounties";
// import UserDetails from "./UserDetails";
// import Users from "./Users";
import Projects from "./Projects";
import LandingPage from "./LandingPage";
// import ProjectDetails from "./ProjectDetails";
import ProjectSubmission from "./ProjectSubmission";
import BountyDetailsPage from "./BountyDetailsPage";
// import PendingProjects from "./PendingProjects";
import GenUser from "./MyProfile";
import OtherUser from "./OthersProfile";
// import SupraCoderDetails from "./SupraCoderDetails";
import ChatPage from "./ChatPage";
import About from "./About";
import { Helmet } from "react-helmet";

import UserList from "./UserList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
function Content() {
  const location = useLocation();
  const showNavbar = !["/", "/login", "/register", "/about"].includes(
    location.pathname
  );
  return (
    <>
      <div>
        <Helmet htmlAttributes>
          <html lang="en" />
          <title>SupraDev</title>
          <meta name="SupraDev App" content="SupraDev App" />
        </Helmet>
      </div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/supracoders/:id" element={<SupracoderProfilePage />} />
        <Route path="/supracoders/:id/bounties" element={<MyBounties />} />
        {/* <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} /> */}
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/projects/:id" element={<ProjectDetails />} /> */}
        <Route path="/requests" element={<ProjectSubmission />} />
        {/* <Route path="/pending_projects/:id" element={<PendingProjects />} /> */}
        <Route path="/projects/:projectId" element={<BountyDetailsPage />} />
        <Route path="/bounties/:bountyId/chat" element={<ChatPage />} />
        {/* <Route path="/pending_projects/:id" element={<PendingProjects />} /> */}
        <Route path="/users" element={<GenUser />} />
        {/* <Route path="/user-profile/:id" element={<OtherUser />} /> */}
        <Route path="/users/:id" element={<OtherUser />} />
        {/* <Route path="/supracoders/:id" element={<SupraCoderDetails />} /> */}
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

export default App;
