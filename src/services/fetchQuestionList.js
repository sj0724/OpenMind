import axiosInstance from '../utils/axios';

const fetchQuestionList = async (id) => {
  try {
    const response = await axiosInstance.get(`/subjects/${id}/questions/`);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
};

export default fetchQuestionList;
