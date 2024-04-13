import useAsync from '../hooks/useAsync';
import axiosInstance from '../utils/axios';

/**
 * 유저 별 질문 리스트 불러오기
 *
 * @author yum
 * @date 23.04
 * @param
 * @return { id, name, imageSource, questionCount, createdAt }
 */
export const useGetSubjects = () => {
  const getSubjects = () => axiosInstance.get(`subjects/`);
  const { error, data } = useAsync(getSubjects);

  const subjects = data?.data ?? [];

  return { error, data: subjects };
};
