import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdmissionDashboard from '../pages/AdmissionDashboard';

const AppRoutes = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdmissionDashboard />}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRoutes