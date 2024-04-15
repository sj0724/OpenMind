import { useState } from 'react';
import * as S from '../Question/Question.styled';
import * as SA from './PostAnswer.styled';
import thumbsUp from '../../assets/thumbs-up.svg';
import thumbsDown from '../../assets/thumbs-down.svg';
import kebab from '../../assets/kebab.svg';
// import { useGetSubjects } from '../../api/useGetSubject';

function PostAnswer() {
  const [answerStatus] = useState();
  // const [answer, setAnswer] = useState(true);

  // const { data } = useGetSubjects();
  // console.log(data);
  /* console.log에 대한 주석처리 (디버깅용 제외 권장하지않는다 합니다.) */

  return (
    <S.QuestBody>
      <SA.AnswerTopLayout>
        <S.QuestionStatus complete={answerStatus}>
          {answerStatus ? '답변 완료' : '미답변'}
        </S.QuestionStatus>
        <SA.KebabButton onClick={(event) => event.preventDefault()}>
          <img src={kebab} alt="더보기" />
        </SA.KebabButton>
      </SA.AnswerTopLayout>
      <S.QuestionContent>
        <S.Time>질문 시간</S.Time>
        <S.QuestionDetail>질문내용</S.QuestionDetail>
      </S.QuestionContent>
      <S.QuestionModal>
        <S.ThumbnsBtn>
          <img src={thumbsUp} alt="up" />
          좋아요
        </S.ThumbnsBtn>
        <S.ThumbnsBtn>
          <img src={thumbsDown} alt="down" />
          좋아요
        </S.ThumbnsBtn>
      </S.QuestionModal>
    </S.QuestBody>
  );
}

export default PostAnswer;
