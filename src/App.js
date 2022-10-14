import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import CardCont from "./components/CardCont";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route path="/Characters" element={<CardCont></CardCont>}></Route>
          <Route path="/Dimensions"></Route>
          <Route path="/Episodes"></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
