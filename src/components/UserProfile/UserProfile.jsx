import kakaoIcon from '../../assets/Kakaotalk.svg';
import linkIcon from '../../assets/Link.svg';
import facebookIcon from '../../assets/Facebook.svg';
import * as S from './UserProfile.styled';

function UserProfile({ copy }) {
  return (
    <S.UserInfo>
      <S.UserImage />
      <span>test</span>
      <S.BtnContainer>
        <S.SnsBtn color={'--Brown-40'} image={linkIcon} onClick={copy} />
        <S.SnsBtn color={'--Yellow-50'} image={kakaoIcon} />
        <S.SnsBtn color={'--Blue-50'} image={facebookIcon} />
      </S.BtnContainer>
    </S.UserInfo>
  );
}

export default UserProfile;
