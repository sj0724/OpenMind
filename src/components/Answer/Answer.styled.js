import styled from 'styled-components';
import { QuestionDetail, Time } from '../Question/Question.styled';

export const AnswerContainer = styled.div`
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
  background-image: url(${(props) => props.$image});
  border-radius: 9999px;
`;

export const AnswerContent = styled.div`
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

  p {
    font-size: 16px;
  }
`;

export const Answerinfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
`;

export const UserName = styled(QuestionDetail)``;

export const AnswerTime = styled(Time)``;
