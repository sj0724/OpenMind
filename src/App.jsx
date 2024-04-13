import { Route, Routes } from 'react-router-dom';
import QuestionList from './pages/QuestionList/QuestionList';
import AnswerList from './pages/AnswerList/AnswerList';
import './styles/common.css';
import Main from './pages/Main/Main';
import List from './pages/List';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/list" element={<List />} />
      <Route path="/answer" element={<AnswerList />} />
      <Route path="/question" element={<QuestionList />} />
    </Routes>
  );
}

export default App;
