import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}> <Route index element={<Home />} /> </Route>
        <Route path="/auth" element={<AuthLayout />}> <Route path="login" element={<Login />} /> <Route path="register" element={<Register />} /> </Route>
        <Route path="/dashboard" element={<DashboardLayout />}> <Route index element={<AdminDashboard />} /> <Route path="settings" element={<Settings />} /> <Route path="profile" element={<Profile />} /> </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;