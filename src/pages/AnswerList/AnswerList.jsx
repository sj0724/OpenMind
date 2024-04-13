import { useState } from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import PostAnswer from '../../components/PostAnswer/PostAnswer';
import QuestionContainer from '../../components/QuestionContainer/QuestionContainer';
import * as S from '../QuestionList/QuestionList.styled';
import mainLogo from '../../assets/logo.svg';
import emptyIcon from '../../assets/emptyIcon.svg';

function AnswerList() {
  const [answer, setAnswer] = useState(true);

  return (
    <>
      <S.Header>
        <img src={mainLogo} alt="mainLogo" />
      </S.Header>
      <UserProfile />
      <S.Body>
        <QuestionContainer>{answer ? <PostAnswer /> : <S.No_Question src={emptyIcon} />}</QuestionContainer>
      </S.Body>
    </>
  );
}

export default AnswerList;
