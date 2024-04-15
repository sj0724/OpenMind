import axiosInstance from '../utils/axios';

const getQuestion = async (id) => {
  try {
    const response = await axiosInstance.get(`/subjects/${id}/`);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
};

export default getQuestion;
