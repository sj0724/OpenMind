import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  border: 1px solid var(--Brown-30);
  background: var(--Brown-10);
`;

export const QuestionCount = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--Brown-40);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 125% */
`;
