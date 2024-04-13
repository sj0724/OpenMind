import { useState } from 'react';
import * as S from './Answer.styled';

function Answer() {
  const [answer, setAnswer] = useState(true);

  return (
    <S.AnswerContainer>
      <S.Profile>프로필</S.Profile>
      <S.AnswerContent>
        <S.Answerinfo>
          <S.UserName>닉네임</S.UserName>
          <S.AnswerTime>시간</S.AnswerTime>
        </S.Answerinfo>
        <p>{answer ? '내용' : '답변 거절'}</p>
      </S.AnswerContent>
    </S.AnswerContainer>
  );
}

export default Answer;
