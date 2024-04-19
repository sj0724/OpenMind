import { useContext, useEffect, useState } from 'react';

import * as S from '../Answer/Answer.styled';

import UserContext from '../../utils/contexts/UserContext';
import calculateDate from '../../utils/calculateDate';

function PostAnswer({ answer }) {
  const user = useContext(UserContext);

  const [createdTime, setCreatedTime] = useState({});
  const [createdText, setCreatedText] = useState('');

  useEffect(() => {
    if (answer) {
      const nowDate = new Date();
      const createdDate = new Date(answer.createdAt);
      const date = (nowDate - createdDate) / 1000;
      setCreatedTime(calculateDate(date));
    }
  }, [answer]);

  useEffect(() => {
    if (createdTime.time && createdTime.result) {
      setCreatedText(` ・ ${createdTime.time}${createdTime.result}전`);
    } else {
      setCreatedText('');
    }
  }, [createdTime]);

  /**
   * {
    "id": 3901,
    "questionId": 8160,
    "content": "답변 등록 테스트 중",
    "isRejected": false,
    "createdAt": "2024-04-18T13:55:47.921609Z"
}
   */

  return (
    <S.AnswerContainer>
      <S.Profile $image={user.imageSource} />
      <S.AnswerContent>
        <S.Answerinfo>
          <S.UserName>{user.name}</S.UserName>
          <S.AnswerTime>{createdText}</S.AnswerTime>
        </S.Answerinfo>
        {/* <p>{answer.isRejected ? '답변 거절' : answer.content}</p> */}
      </S.AnswerContent>
    </S.AnswerContainer>
  );
}

export default PostAnswer;
