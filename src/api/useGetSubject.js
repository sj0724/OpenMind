import { useAsync } from "../hooks/useAsync";
import axiosInstance from "../utils/axios";

/**
 * 유저 별 질문 리스트 불러오기
 *
 * @author yum
 * @date 23.04
 * @param
 * @return { profileImage, ownerName, folderName, links}
 */
export const useGetSubjects = () => {
  const getSubjects = () => axiosInstance.get(`subjects`);
  const { error, data } = useAsync(getSubjects);

  const subjects = data?.data ?? [];
  // const sortedFolderList = folderList.sort((a, b) => a?.id - b?.id);

  return { error, data: subjects };
};
