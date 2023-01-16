import { Home } from "./pages/Home.js";
import { SideBar } from "./component/SideBar";
import { Cretificat } from "./pages/Cretificat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <SideBar></SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificat/:id" element={<Cretificat />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
