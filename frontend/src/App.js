import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Introduction from "@/pages/Introduction";
import Company from "@/pages/Company";
import Work from "@/pages/Work";
import Assessment from "@/pages/Assessment";
import Appendices from "@/pages/Appendices";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/company" element={<Company />} />
            <Route path="/work" element={<Work />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/appendices" element={<Appendices />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
