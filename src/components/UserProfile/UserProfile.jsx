import PropTypes from "prop-types";
import kakaoIcon from "../../assets/Kakaotalk.svg";
import linkIcon from "../../assets/Link.svg";
import facebookIcon from "../../assets/Facebook.svg";
import * as S from "./UserProfile.styled";

function UserProfile({ copy, user }) {
  return (
    <S.UserInfo>
      <S.UserImage image={user.imageSource} />
      <span>{user.name}</span>
      <S.BtnContainer>
        <S.SnsBtn color="--Brown-40" image={linkIcon} onClick={copy} />
        <S.SnsBtn color="--Yellow-50" image={kakaoIcon} />
        <S.SnsBtn color="--Blue-50" image={facebookIcon} />
      </S.BtnContainer>
    </S.UserInfo>
    // 문자열의 프롭스를 전달받을땐 {}를 사용하지않고 ""를 사용한다네요 {color} -> "color"로 변경하였습니다.
  );
}

UserProfile.propTypes = {
  copy: PropTypes.func.isRequired,
}; // prop의 type을 지정하였습니다. 이 부분은 저도 잘 모르겠어서 멘토님에게 질문하면좋을거같습니다 7 번줄의 UserProfile의 type을 지정하였습니다.

export default UserProfile;
