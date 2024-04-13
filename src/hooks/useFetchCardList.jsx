import { useState, useEffect } from 'react';
import { fetchCardList } from '../services/fetchCardList';

export const useFetchCardList = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCardListData = async () => {
      try {
        const response = await fetchCardList();
        setCards(response.results);
        setLoading(false);
      } catch (error) {
        // console.log('Error fetching card list:', error);
        setLoading(false);
      }
    };

    fetchCardListData();
  }, []);

  return { cards, loading };
};
