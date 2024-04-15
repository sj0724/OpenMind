import PropTypes from 'prop-types';
import kakaoIcon from '../../assets/Kakaotalk.svg';
import linkIcon from '../../assets/Link.svg';
import facebookIcon from '../../assets/Facebook.svg';
import * as S from './UserProfile.styled';

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
  user: PropTypes.string.isRequired,
};

export default UserProfile;
