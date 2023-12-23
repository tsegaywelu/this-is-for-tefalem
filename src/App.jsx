import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactDOM from "react-dom/client";
import Indexpages from "./pages/Indexpages";
import LoginPage from "./pages/loginPage";
import Layout from "./Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Indexpages />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
