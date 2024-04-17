import styled from 'styled-components';
import Image from '../../assets/backgroundImage-removebg.png';

export const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--Grayscale-20);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainLogo = styled.img`
  display: flex;
  width: 456px;
  justify-content: center;
  align-items: center;
  margin-top: 160px;
  z-index: 10;
  margin-bottom: 24px;

  @media (max-width: 769px) {
    width: 248px;
    height: 98px;
  }
`;

export const UserForm = styled.form`
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  background: var(--Grayscale-10);
  z-index: 10;

  img {
    height: 20px;
    width: 20px;
  }

  input {
    border: none;
    width: 100%;
  }
`;

export const UserInput = styled.label`
  display: flex;
  width: 336px;
  height: 46px;
  padding: 12px 16px;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  border: 1px solid var(--Grayscale-40);
  background: var(--Grayscale-10);
  position: relative;
`;

export const UserSubmitBtn = styled.button`
  height: 46px;
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--Brown-40);
  color: var(--Grayscale-10);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */

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
  flex-shrink: 0;
  background-color: var(--Grayscale-20);
`;

export const ImageArea = styled.div`
  width: 1200px;
  height: 627px;
  margin: 0 auto;
  background: url(${Image}) var(--Grayscale-20) 0px 0px / 100% 191.388% no-repeat;

  @media (max-width: 1199px) {
    width: 768px;
    height: 401px;
  }
  @media (max-width: 769px) {
    width: 456px;
    height: 239px;
  }
`;

export const LinkQuestion = styled.div`
  z-index: 10;
  position: absolute;
  top: 45px;
  right: 130px;

  @media (max-width: 769px) {
    position: static;
    margin-bottom: 24px;
  }
`;
