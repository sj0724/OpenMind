import { Route, Routes } from "react-router-dom";
import QuestionList from "./pages/QuestionList/QuestionList";
import AnswerList from "./pages/AnswerList/AnswerList";
import "./styles/common.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/answer" element={<AnswerList />} />
        <Route path="/question" element={<QuestionList />} />
      </Routes>
    </>
  );
}

export default App;
