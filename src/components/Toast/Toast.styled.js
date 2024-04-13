import styled from 'styled-components';

export const ToastBody = styled.div`
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--Grayscale-60);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  p {
    color: var(--Grayscale-10);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
  }
`;
