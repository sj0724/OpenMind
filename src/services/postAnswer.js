import axiosinstance from '../utils/axios';

/**
 * 답변 작성하기
 *
 * @author yum
 * @date 23.04
 * @param
 * @return { id, name, imageSource, qeustionCount, createdAt }
 */
export const postAnswer = async (questionId, answer, isRejected) => {
  try {
    const response = await axiosinstance.post(`/questions/${questionId}/answers/`, {
      content: answer,
      isRejected: isRejected,
    });

    // 성공적으로 데이터를 보내고 받았을 때 반환
    return { error: null, loading: false, data: response.data };
  } catch (error) {
    // 오류 발생 시 오류 객체 반환
    return { error: error, loading: false, data: null };
  }
};
