import styled from 'styled-components';
import Image from '../../assets/backgroundImage-removebg.png';

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--Grayscale-20);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 769px) {
    padding: 0 3.5rem;
  }
`;

export const MainLogo = styled.img`
  display: flex;
  width: 45.6rem;
  justify-content: center;
  align-items: center;
  margin-top: 16rem;
  z-index: 10;
  margin-bottom: 2.4rem;

  @media (max-width: 769px) {
    width: 24.8rem;
    height: 9.8rem;
  }
`;

export const UserForm = styled.form`
  position: relative;
  display: flex;
  padding: 3.2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 1.6rem;
  background: var(--Grayscale-10);
  z-index: 10;

  img {
    position: absolute;
    top: 4.6rem;
    left: 4.8rem;
    height: 2rem;
    width: 2rem;
  }

  @media (max-width: 769px) {
    max-width: 40rem;
    width: 100%;
    padding: 2.4rem;
  }
`;

export const UserInput = styled.input`
  position: absolute;
  border: none;
  top: 4.8rem;
  left: 7rem;

  &:focus {
    outline: none;
  }
`;

export const UserInputLabel = styled.label`
  display: flex;
  width: 33.6rem;
  height: 4.6rem;
  padding: 1.2rem 1.6rem;
  align-items: center;
  gap: 0.4rem;
  border-radius: 0.8rem;
  border: 1px solid var(--Grayscale-40);
  background: var(--Grayscale-10);

  ${UserInput}:focus ~ & {
    border: 2px solid var(--Brown-40);
  }

  @media (max-width: 769px) {
    width: 100%;
  }
`;

export const UserSubmitBtn = styled.button`
  height: 4.6rem;
  display: flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;
  border-radius: 0.8rem;
  background: var(--Brown-40);
  color: var(--Grayscale-10);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem;

  &:hover {
    border: 2px solid var(--Brown-50);
    background: var(--Brown-40);
  }

  &:active {
    background: var(--Brown-50);
  }
`;

export const Background = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: var(--Grayscale-20);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const ImageArea = styled.div`
  width: 120rem;
  height: 62.7rem;
  background: url(${Image}) var(--Grayscale-20) 0px 0px / 100% 191.388% no-repeat;

  @media (max-width: 1199px) {
    width: 76.8rem;
    height: 40.1rem;
  }
  @media (max-width: 769px) {
    width: 45.6rem;
    height: 23.9rem;
  }
`;

export const LinkQuestion = styled.div`
  z-index: 10;
  position: absolute;
  top: 4rem;
  right: 5rem;

  @media (max-width: 769px) {
    position: static;
    margin-bottom: 2.4rem;
  }
`;
