import styled from "styled-components";
import { Profile } from "../Answer/Answer.styled";

export const UserInfo = styled.div`
  position: absolute;
  top: 129px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--Grayscale-60);
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 125% */
  gap: 12px;
`;

export const UserImage = styled(Profile)`
  width: 136px;
  height: 136px;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  gap: 8px;
`;

export const SnsBtn = styled.span`
  cursor: pointer;
  display: flex;
  width: 40px;
  height: 40px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  background-color: var(${(props) => props.color});
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
`;
