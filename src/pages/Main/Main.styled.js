import styled from "styled-components";
import Image from "../../assets/backgroundImage-removebg.png";

export const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--Grayscale-20);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const MainLogo = styled.img`
  display: flex;
  width: 456px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding-top: 160px;
`;

export const UserForm = styled.form`
  display: inline-flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  background: var(--Grayscale-10);

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
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 205px;
  z-index: -1;
  width: 100%;
  flex-shrink: 0;
  background-color: var(--Grayscale-20);
`;

export const ImageArea = styled.div`
  width: 1200px;
  height: 627px;
  background: url(${Image}) var(--Grayscale-20) 0px 0px / 100% 191.388%
    no-repeat;
`;
