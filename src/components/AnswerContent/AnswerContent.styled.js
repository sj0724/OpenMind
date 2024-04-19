import styled from 'styled-components';

export const AnswerContent = styled.p`
  color: ${(props) => (props.$rejected ? 'var(--Red-50)' : 'var(--Grayscale-60)')};
  font-size: 16px;
  line-height: 22px; /* 137.5% */
`;
