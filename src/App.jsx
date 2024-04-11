import "./styles/common.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";

//1. "/" : 메인페이지
//2. "/list" : 질문 목록 페이지
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
}

export default App;
