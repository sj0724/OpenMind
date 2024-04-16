import { useContext, useState } from 'react';
import * as S from './Answer.styled';
import UserContext from '../../utils/contexts/UserContext';

function Answer() {
  const user = useContext(UserContext);
  const [answer] = useState(true);

  return (
    <S.AnswerContainer>
      <S.Profile $image={user.imageSource} />
      <S.AnswerContent>
        <S.Answerinfo>
          <S.UserName>{user.name}</S.UserName>
          <S.AnswerTime>시간</S.AnswerTime>
        </S.Answerinfo>
        <p>{answer ? '내용' : '답변 거절'}</p>
      </S.AnswerContent>
    </S.AnswerContainer>
  );
}

export default Answer;
