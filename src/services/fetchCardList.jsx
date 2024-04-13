import axiosinstance from '../utils/axios';

const fetchCardList = async (limit = 8, offset = 0, sort = 'time') => {
  try {
    const response = await axiosinstance.get(
      `/subjects/?limit=${limit}&offset=${offset}&sort=${sort}`,
    );
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching card list:', error);
    throw error;
  }
};

export default fetchCardList;
