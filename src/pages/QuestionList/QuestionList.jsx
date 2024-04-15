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
import useFetchQuestion from '../../hooks/useFetchQuestion';

function QuestionList() {
  const { id } = useParams();
  const [question] = useState(true);
  const [modal, setModal] = useState(false);
  const { user } = useFetchQuestion(id);

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
      {modal && <Modal setModal={setModal} />}
      <S.Header>
        <img src={mainLogo} alt="mainLogo" />
      </S.Header>
      <UserProfile copy={copyUrl} user={user} />
      <S.Body>
        <QuestionContainer>
          {question ? <Question /> : <S.NoQuestion src={emptyIcon} />}
        </QuestionContainer>
      </S.Body>
      <S.FloatingBtn onClick={handleModalToggle}>질문 작성하기</S.FloatingBtn>
      {toast && <Toast setToast={setToast} text="URL이 복사되었습니다." />}
    </>
  );
}

export default QuestionList;
