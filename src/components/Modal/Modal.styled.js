import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.56); //불투명토조정
  z-index: 5;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--Grayscale-10);
  border-radius: 24px;
  max-width: 61.2rem;
  width: 100%;
  height: 45.4rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  gap: 0.6rem;
`;

export const Header = styled.div`
  width: 53.2rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  & div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  & span {
    font-size: 2.4rem;
    color: var(--Grayscale-90);
  }
`;

export const ToUser = styled.div`
  display: flex;
  align-items: center;
  width: 53.2rem;
  gap: 0.4rem;
  margin-bottom: 1rem;

  & span {
    font-size: 1.8rem;
    color: var(--Grayscale-60);
  }

  & p {
    font-size: 1.6rem;
  }
`;

export const Profile = styled.div`
  width: 28px;
  height: 28px;
  background-color: gray;
  border-radius: 9999px;
`;

export const Content = styled.div`
  width: 53.2rem;
  height: 18rem;
  border-radius: 0.8rem;
  padding: 1.6rem;
  gap: 1rem;
  background-color: var(--Grayscale-20);

  & textarea {
    width: 50rem;
    height: 14.8rem;
    font-size: 1.6rem;
    background-color: var(--Grayscale-20);
    color: var(--Grayscale-40);
    border: none;
    outline: none;
    resize: none;
  }
`;

export const Footer = styled.button`
  display: flex;
  width: 53.2rem;
  height: 4.6rem;
  border-radius: 0.8rem;
  padding: 1.2rem, 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: ${(props) => props.color};
  font-size: 1.6rem;
  color: var(--Grayscale-10);
`;
