import { Route, Routes } from "react-router-dom";
import QuestionList from "./pages/QuestionList/QuestionList";
import AnswerList from "./pages/AnswerList/AnswerList";
import "./styles/common.css";
import Main from "./pages/Main/Main";
import List from "./pages/List";

//1. "/" : 메인페이지
//2. "/list" : 질문 목록 페이지
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/answer" element={<AnswerList />} />
        <Route path="/question" element={<QuestionList />} />
      </Routes>
    </>
  );
}

export default App;
