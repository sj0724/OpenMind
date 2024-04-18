import { useState, useEffect } from 'react';
import fetchQuestionList from '../services/fetchQuestionList';

const LIMIT = 2;

function useFetchQuestionList(id, listOffset) {
  const [data, setData] = useState({});
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState('');

  useEffect(() => {
    const option = {
      subjectsId: id,
      limit: LIMIT,
      offset: listOffset,
    };
    const fetchCardListData = async () => {
      try {
        const response = await fetchQuestionList(option);
        setData(response);
        setQuestion((prev) => [...prev, ...response.results]);
        setNext(response.next);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchCardListData();
  }, [id, listOffset]);

  return {
    data,
    question,
    loading,
    next,
  };
}

export default useFetchQuestionList;
