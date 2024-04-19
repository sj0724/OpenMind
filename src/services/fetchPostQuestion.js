import axiosInstance from '../utils/axios';

const handleSend = async (text, setModal, subjectId) => {
  try {
    const response = await axiosInstance.post(`/subjects/${subjectId}/questions/`, {
      content: text,
    });
    alert('질문이 성공적으로 생성되었습니다.');
    setModal(false);
    return response.data;
  } catch (error) {
    alert(`질문 생성에 실패했습니다: ${error.message}`);
    setModal(false);
  }
};

export default handleSend;
