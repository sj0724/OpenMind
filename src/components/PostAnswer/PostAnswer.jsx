import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Reaction from '../Reaction/Reaction';
import EditIcons from '../EditIcons/EditIcons';

import * as S from './PostAnswer.styled';
import * as SQ from '../Question/Question.styled';
import * as SA from '../Answer/Answer.styled';

import calculateDate from '../../utils/calculateDate';
import UserContext from '../../utils/contexts/UserContext';

function PostAnswer({ question }) {
  const user = useContext(UserContext);

  const [answer] = useState(question.answer);

  // 질문 시간 선언
  const [createdQuestionTime, setCreatedQuestionTime] = useState({});
  // 답변 시간 선언
  const [createdAnswerTime, setCreatedAnswerTime] = useState({});
  const [createdAnswerText, setCreatedAnswerText] = useState('');

  // 질문 시간 출력
  const createdQuestionText = ` ・ ${createdQuestionTime.time}${createdQuestionTime.result}전`;

  useEffect(() => {
    const nowDate = new Date();
    const createdDate = new Date(question.createdAt);
    const date = (nowDate - createdDate) / 1000;
    setCreatedQuestionTime(calculateDate(date));
  }, [question.createdAt]);

  // 답변 시간 출력
  useEffect(() => {
    if (answer) {
      const nowDate = new Date();
      const createdDate = new Date(answer.createdAt);
      const date = (nowDate - createdDate) / 1000;
      setCreatedAnswerTime(calculateDate(date));
    }
  }, [answer]);

  useEffect(() => {
    if (createdAnswerTime.time && createdAnswerTime.result) {
      setCreatedAnswerText(` ・ ${createdAnswerTime.time}${createdAnswerTime.result}전`);
    } else {
      setCreatedAnswerText('');
    }
  }, [createdAnswerTime]);

  return (
    <SQ.QuestBody>
      <S.WrapAnswerTop>
        <SQ.QuestionStatus $complete={answer}>{answer ? '답변 완료' : '미답변'}</SQ.QuestionStatus>
        <EditIcons hasAnswer={true} isRejected={false} />
      </S.WrapAnswerTop>
      <SQ.QuestionContent>
        <SQ.Time>
          질문
          {createdQuestionText}
        </SQ.Time>
        <SQ.QuestionDetail>{question.content}</SQ.QuestionDetail>
      </SQ.QuestionContent>
      {/* 답변 입력 or 출력하는 곳 */}
      <SA.AnswerContainer>
        <SA.Profile $image={user.imageSource} />
        <SA.AnswerContent>
          <SA.Answerinfo>
            <SA.UserName>{user.name}</SA.UserName>
            <SA.AnswerTime>{createdAnswerText}</SA.AnswerTime>
          </SA.Answerinfo>

          <S.WrapAnswerContent></S.WrapAnswerContent>
        </SA.AnswerContent>
      </SA.AnswerContainer>
      {/* 답변 입력 or 출력하는 곳 */}
      <Reaction question={question} />
    </SQ.QuestBody>
  );
}

export default PostAnswer;
