import thumbsUp from '../../assets/thumbs-up.svg';
import thumbsUp_select from '../../assets/thumbs-up-blue.svg';
import thumbsDown from '../../assets/thumbs-down.svg';
import thumbsDown_select from '../../assets/thumbs-down-red.svg';
import Answer from '../Answer/Answer';
import * as S from './Question.styled';
import { useState } from 'react';

function Question() {
  const [answerStatus, setAnswerStatus] = useState();
  const [answer, setAnswer] = useState(true);
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);

  const toggleThumbs = () => {
    if (like) {
      setLike(!like);
      setDisLike(like);
    } else if (disLike) {
      setDisLike(!disLike);
      setLike(disLike);
    }
  };

  const handleLike = () => {
    if (like) {
      setLike(!like);
      return;
    }
    setLike(!like);
    toggleThumbs();
  };

  const handleDisLike = () => {
    if (disLike) {
      setDisLike(!disLike);
      return;
    }
    setDisLike(!disLike);
    toggleThumbs();
  };

  return (
    <S.QuestBody>
      <S.QuestionStatus complete={answerStatus}>{answerStatus ? '답변 완료' : '미답변'}</S.QuestionStatus>
      <S.QuestionContent>
        <S.Time>질문 시간</S.Time>
        <S.QuestionDetail>질문내용</S.QuestionDetail>
      </S.QuestionContent>
      {answer && <Answer />}
      <S.QuestionModal>
        <S.ThumbnsBtn onClick={handleLike} color={like ? '--Blue-50' : null}>
          <img src={like ? thumbsUp_select : thumbsUp} alt="up" />
          <span>좋아요</span>
        </S.ThumbnsBtn>
        <S.ThumbnsBtn onClick={handleDisLike} color={disLike ? '--Red-50' : null}>
          <img src={disLike ? thumbsDown_select : thumbsDown} alt="down" />
          <span>싫어요</span>
        </S.ThumbnsBtn>
      </S.QuestionModal>
    </S.QuestBody>
  );
}

export default Question;
