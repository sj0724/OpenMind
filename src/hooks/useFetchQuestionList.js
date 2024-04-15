import { useState, useEffect } from 'react';
import fetchQuestionList from '../services/fetchQuestionList';

function useFetchQuestionList(id) {
  const [data, setData] = useState({});
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCardListData = async () => {
      try {
        const response = await fetchQuestionList(id);
        setData(response);
        setQuestion(response.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchCardListData();
  }, [id]);

  return { data, question, loading };
}

export default useFetchQuestionList;
