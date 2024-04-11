import styled from "styled-components";
import { Profile } from "../Answer/Answer";
import kakaoIcon from "../../assets/Kakaotalk.svg";
import linkIcon from "../../assets/Link.svg";
import facebookIcon from "../../assets/Facebook.svg";

const UserInfo = styled.div`
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

const UserImage = styled(Profile)`
  display: flex;
  width: 136px;
  height: 136px;
  justify-content: center;
  align-items: center;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  gap: 8px;
`;

const SnsBtn = styled.span`
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

function UserProfile() {
  return (
    <UserInfo>
      <UserImage />
      <span>test</span>
      <BtnContainer>
        <SnsBtn color={"--Brown-40"} image={linkIcon} />
        <SnsBtn color={"--Yellow-50"} image={kakaoIcon} />
        <SnsBtn color={"--Blue-50"} image={facebookIcon} />
      </BtnContainer>
    </UserInfo>
  );
}

export default UserProfile;
