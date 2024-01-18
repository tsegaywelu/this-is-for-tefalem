import { useState } from "react";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/index";
import Adminlayout from "./admin/Adminlayout";
import EditOrAdd from "./admin/EditOrAdd";
import Search from "./admin/Search";
import Pagenotfound from "./Pagenotfound";
import AboutUs from "./routes/AboutUs";
import ContactUs from "./routes/ContactUs";
import Login from "./components/login";
import Upload from "./layout/Upload";
import Dashboard from "./routes/Dashboard";

function App() {
  return (
    <main className="h-screen mx-auto contaner  border-gry-900 overflow-y-auto pt-3 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutUs/>}></Route>
            <Route path="/contact" element={<ContactUs/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="admin/" element={<Adminlayout />}>
              <Route index element={<Dashboard />} />
              <Route path="search" element={<Search />} />
              <Route path="addoredit" element={<EditOrAdd />} />
              <Route path="upload" element={<Upload />} />
            </Route>
            <Route path="*" element={<Pagenotfound />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
