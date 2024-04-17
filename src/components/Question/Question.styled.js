import styled from 'styled-components';

export const QuestBody = styled.div`
  display: flex;
  width: 684px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 16px;
  background: var(--Grayscale-10);
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);

  @media (max-width: 1199px) {
    width: 100%;
  }
`;

export const QuestionStatus = styled.div`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.$complete ? 'var(--Brown-40)' : 'var(--Grayscale-40)')};
  background: var(--Grayscale-10);
  color: ${(props) => (props.$complete ? 'var(--Brown-40)' : 'var(--Grayscale-40)')};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

export const QuestionContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  flex-direction: column;
`;

export const Time = styled.p`
  color: var(--Grayscale-40);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

export const QuestionDetail = styled.p`
  color: var(--Grayscale-60);
  font-family: Actor;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
`;

export const QuestionModal = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 24px;
  align-self: stretch;
  border-top: 1px solid var(--Grayscale-30);
  gap: 32px;
`;

export const ThumbnsBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  color: var(${(props) => (props.color ? props.color : '--Grayscale-40')});
`;
