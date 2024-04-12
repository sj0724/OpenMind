import styled from "styled-components";
import Image from "../../assets/backgroundImage-removebg.png";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  height: 234px;
  width: 1200px;
  margin: 0 auto;
  background: url(${Image}) 0px -267.142px / 100% 515.021% no-repeat;
  mix-blend-mode: hard-light;

  img {
    height: fit-content;
    margin-top: 50px;
  }
`;

export const Body = styled.div`
  background-color: var(--Grayscale-20);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 189px 0 136px 0;
`;

export const FloatingBtn = styled.span`
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
`;

export const No_Question = styled.img`
  margin: 111px 283px 65px 283px;
`;
