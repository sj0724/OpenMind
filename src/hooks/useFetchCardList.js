import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import fetchCardList from '../services/fetchCardList';
/* 함수가 단일이라면 export default로 내보내고, 함수가 여러개라면 export로 내보낸다는 규칙때문에 fetchCardList를 변경하고
   수정함에 있어 import {fetchCardList로} 에서 fetchCardList로 변경하였습니다. */

export const useFetchCardList = (limit, offset, sort) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // 페이지가 처음 로드될 때 현재 페이지를 로컬 스토리지에서 가져옴
  const currentPageFromStorage = parseInt(localStorage.getItem('currentPage'), 10) || 1;
  const [currentPage, setCurrentPage] = useState(currentPageFromStorage);

  useEffect(() => {
    const fetchCardListData = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const page = parseInt(searchParams.get('page'), 10) || 1;
        const calculatedOffset = (page - 1) * limit;

        const response = await fetchCardList(limit, calculatedOffset, sort);
        setCards(response.results);
        setLoading(false);
        setCurrentPage(page); // 페이지 업데이트
        localStorage.setItem('currentPage', page); // 로컬 스토리지 업데이트
      } catch (error) {
        // console.log('Error fetching card list:', error);
        setLoading(false);
      }
    };

    fetchCardListData();
  }, [limit, sort, location.search]);

  return {
    cards,
    loading,
    currentPage,
    setCurrentPage,
  };
};

export default useFetchCardList;
