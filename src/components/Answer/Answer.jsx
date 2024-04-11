import styled from "styled-components";
import { BlackFont, GrayFont } from "../Question/Question.styled";
import { useState } from "react";

const AnswerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`;

export const Profile = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  background-color: gray;
  border-radius: 9999px;
`;

const AnswerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
  color: var(--Grayscale-60);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
`;

const Answerinfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
`;

function Answer() {
  const [answer, setAnswer] = useState(true);

  return (
    <AnswerContainer>
      <Profile>프로필</Profile>
      <AnswerContent>
        <Answerinfo>
          <BlackFont>닉네임</BlackFont>
          <GrayFont>시간</GrayFont>
        </Answerinfo>
        {answer ? <p>내용</p> : "답변 거절"}
      </AnswerContent>
    </AnswerContainer>
  );
}

export default Answer;
