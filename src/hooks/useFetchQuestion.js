import { useState, useEffect } from "react";
import getQuestion from "../services/getQuestion";

function useFetchQuestion(id) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCardListData = async () => {
      try {
        const response = await getQuestion(id);
        setUser(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchCardListData();
  }, []);

  return { user, loading };
}

export default useFetchQuestion;
