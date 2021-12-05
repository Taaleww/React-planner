import "./App.css";
import React from "react";

import MyProjects from "./page/myprojects";
import Tasks from "./page/tasks";
import Navbar from "./components/navbar";
import Login from "./page/loginform";
import Regis from "./page/regisform";
import InfoTask from "./components/modal/infotask";
import Footer from "./components/footer";
import NotFound from "./page/notfound";
import Profile from "./page/profile";
import ManageAccount from "./page/manageaccount";
import Home from "./page/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from './context/auth'
//import AuthRoute from "./util/GuestRoute";
//import GuestRoute from "./util/GuestRoute";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route exact path='/' element={<GuestRoute/>}>
            <Route exact path='/login' element={<Login />}/>
            <Route exact path='/regis' element={<Regis />}/>
          </Route> */}
          <Route path="/login" element={ <Login /> } />
          <Route path="/regis" element={ <Regis /> } />
          <Route path="/myprojects" element={<MyProjects />} />
          <Route path="/project/:projectId/tasks" element={<Tasks />} />
          {/* <Route
            path="/login"
            element={
              <GuestRoute>
                <Login />
              </GuestRoute>
            }
          /> */}
          {/* <Route
            path="/regis"
            element={
              <GuestRoute>
                <Regis />
              </GuestRoute>
            }
          /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/manage_account" element={<ManageAccount />} />
          <Route path="/infotask" element={<InfoTask />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
