import styled from 'styled-components';

export const WrapAnswerTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: none;
`;

export const WrapEditIcons = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const EditIconButton = styled.button`
  img {
    width: 2.2rem;
    height: 2.2rem;
    fill: var(--Grayscale-50);
  }
`;
