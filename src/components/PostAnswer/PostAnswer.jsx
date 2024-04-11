import { useState } from "react";
import * as S from "../Question/Question.styled";
import thumbsUp from "../../assets/thumbs-up.svg";
import thumbsDown from "../../assets/thumbs-down.svg";

function PostAnswer() {
  const [answerStatus, setAnswerStatus] = useState();
  const [answer, setAnswer] = useState(true);

  return (
    <S.QuestBody>
      <S.QuestionStatus complete={answerStatus}>
        {answerStatus ? "답변 완료" : "미답변"}
      </S.QuestionStatus>
      <S.QuestionContent>
        <S.GrayFont>질문 시간</S.GrayFont>
        <S.BlackFont>질문내용</S.BlackFont>
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
