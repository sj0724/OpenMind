import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Question from '../../components/Question/Question';
import QuestionContainer from '../../components/QuestionContainer/QuestionContainer';
import * as S from './QuestionList.styled';
import emptyIcon from '../../assets/emptyIcon.svg';
import mainLogo from '../../assets/logo.svg';
import UserProfile from '../../components/UserProfile/UserProfile';
import Toast from '../../components/Toast/Toast';
import Modal from '../../components/Modal/Modal';
import useFetchUser from '../../hooks/useFetchUser';
import useFetchQuestionList from '../../hooks/useFetchQuestionList';
import UserContext from '../../utils/contexts/UserContext';

function QuestionList() {
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const { user } = useFetchUser(id);
  const { data, question } = useFetchQuestionList(id);

  const handleModalToggle = () => {
    setModal(!modal);
  };
  const [toast, setToast] = useState(false);

  const copyUrl = async (url) => {
    await navigator.clipboard.writeText(url);
    setToast(true);
  };

  return (
    <>
      <S.Header>
        <S.HeaderLogo src={mainLogo} alt="mainLogo" />
        <S.HeaderImage />
      </S.Header>
      <UserContext.Provider value={user}>
        <UserProfile copy={copyUrl} />
        <S.Body>
          <QuestionContainer count={data.count}>
            {data.count ? (
              question.map((item) => <Question question={item} key={item.id} />)
            ) : (
              <S.NoQuestion src={emptyIcon} />
            )}
          </QuestionContainer>
        </S.Body>
        <S.FloatingBtn onClick={handleModalToggle}>질문 작성하기</S.FloatingBtn>
        {toast && <Toast setToast={setToast} text="URL이 복사되었습니다." />}
        {modal && <Modal setModal={setModal} />}
      </UserContext.Provider>
    </>
  );
}

export default QuestionList;
