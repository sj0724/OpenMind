import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import AnswerContent from '../AnswerContent/AnswerContent';
import Reaction from '../Reaction/Reaction';
import EditIcons from '../EditIcons/EditIcons';

import * as S from '../Question/Question.styled';
import * as SPA from './PostAnswer.styled';

import calculateDate from '../../utils/calculateDate';
import UserContext from '../../utils/contexts/UserContext';

function PostAnswer({ question }) {
  const [answer] = useState(question.answer);
  const [createdTime, setCreatedTime] = useState({});

  const createdText = ` ・ ${createdTime.time}${createdTime.result}전`;

  useEffect(() => {
    const nowDate = new Date();
    const createdDate = new Date(question.createdAt);
    const date = (nowDate - createdDate) / 1000;
    setCreatedTime(calculateDate(date));
  }, [question.createdAt]);

  return (
    <S.QuestBody>
      <SPA.WrapAnswerTop>
        <S.QuestionStatus $complete={answer}>{answer ? '답변 완료' : '미답변'}</S.QuestionStatus>
        <EditIcons hasAnswer={true} isRejected={false} />
      </SPA.WrapAnswerTop>
      <S.QuestionContent>
        <S.Time>
          질문
          {createdText}
        </S.Time>
        <S.QuestionDetail>{question.content}</S.QuestionDetail>
      </S.QuestionContent>
      <AnswerContent answer={answer} questionId={question.id} />
      <Reaction question={question} />
    </S.QuestBody>
  );
}

export default PostAnswer;
