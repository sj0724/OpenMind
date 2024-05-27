import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import kakaoIcon from '../../assets/Kakaotalk.svg';
import linkIcon from '../../assets/Link.svg';
import facebookIcon from '../../assets/Facebook.svg';
import * as S from './UserProfile.styled';
import UserContext from '../../utils/contexts/UserContext';
import shareKakao from '../../utils/shareKakao';
import shareFacebook from '../../utils/shareFacebook';

function UserProfile({ copy }) {
  const user = useContext(UserContext);
  const location = useLocation();

  const copyLink = () => {
    copy(`https://benevolent-brioche-e6992b.netlify.app${location.pathname}`);
  };

  return (
    <S.UserInfo>
      <S.UserImage $image={user.imageSource} />
      <span>{user.name}</span>
      <S.BtnContainer>
        <S.SnsBtn onClick={copyLink} color="--Brown-40">
          <img src={linkIcon} alt="링크아이콘" />
        </S.SnsBtn>
        <S.SnsBtn color="--Yellow-50" $image={kakaoIcon} onClick={shareKakao}>
          <img src={kakaoIcon} alt="카카오톡아이콘" />
        </S.SnsBtn>
        <S.SnsBtn color="--Blue-50" $image={facebookIcon} onClick={shareFacebook}>
          <img src={facebookIcon} alt="페이스북아이콘" />
        </S.SnsBtn>
      </S.BtnContainer>
    </S.UserInfo>
    // 문자열의 프롭스를 전달받을땐 {}를 사용하지않고 ""를 사용한다네요 {color} -> "color"로 변경하였습니다.
  );
}

UserProfile.propTypes = {
  copy: PropTypes.func.isRequired,
};

export default UserProfile;
