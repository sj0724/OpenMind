import styled from 'styled-components';
import Image from '../../assets/backgroundImage-removebg.png';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
`;

export const HeaderLogo = styled.img`
  position: absolute;
  width: 170px;
  height: 67px;
  top: 50px;

  @media (max-width: 769px) {
    top: 40px;
    width: 124px;
    height: 49px;
  }
`;

export const HeaderImage = styled.div`
  display: block;
  height: 234px;
  width: 1200px;
  background: url(${Image}) 0px -267.142px / 100% 515.021% no-repeat;

  @media (max-width: 769px) {
    width: 906px;
    height: 177px;
    background: url(${Image}) 0px -202.069px / 100% 515.021% no-repeat;
  }
`;

export const Body = styled.div`
  background-color: var(--Grayscale-20);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 189px 0 136px 0;

  @media (max-width: 769px) {
    padding: 176px 0 126px 0;
  }
`;

export const FloatingBtn = styled.span`
  cursor: pointer;
  position: fixed;
  right: 25px;
  bottom: 25px;
  display: flex;
  width: 208px;
  height: 54px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  background: var(--Brown-40);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--Grayscale-10);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 125% */

  @media (max-width: 769px) {
    width: 123px;
    overflow: hidden;
  }
`;

export const NoQuestion = styled.img`
  margin: 97px 259px 41px;

  @media (max-width: 1199px) {
    margin: 97px 32px 41px;
  }
`;

export const PageEnd = styled.div``;
