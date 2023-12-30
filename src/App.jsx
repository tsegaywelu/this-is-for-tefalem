import { useState } from "react";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/index";
import Adminlayout from "./admin/Adminlayout";
import EditOrAdd from "./admin/EditOrAdd";
import Search from "./admin/Search";
import { useContextData } from "./context/provider";
import Pagenotfound from "./Pagenotfound";

function App() {
  const value = useContextData();
  console.log(value);
  return (
    <main className="max-w-4xl h-screen mx-auto contaner border-2 border-gry-900 overflow-y-auto pt-3 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="admin/" element={<Adminlayout />}>
              <Route index element={<Search />} />
              <Route path="addoredit" element={<EditOrAdd />} />
            </Route>
            <Route path="*" element={<Pagenotfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
