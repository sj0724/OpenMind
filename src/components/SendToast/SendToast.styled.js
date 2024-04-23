import styled from 'styled-components';

const ToastBody = styled.div`
  position: fixed;
  right: 2rem;
  top: ${(props) => (props.$top !== undefined ? props.$top : '2rem')};
  width: 200px;
  height: 50px;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  background: var(--Grayscale-60);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  opacity: 0;

  p {
    color: var(--Grayscale-10);
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  }

  &.fade {
    opacity: 1;
    transition: opacity 0.5s;
  }
`;

export default ToastBody;
