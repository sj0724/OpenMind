import { Link } from 'react-router-dom';

import * as S from './NotFound.styled';
import background from '../../assets/backgroundImage-removebg.png';
import mainLogo from '../../assets/logo.svg';

function NotFound() {
  return (
    <S.Body>
      <Link to="/">
        <S.HeaderLogo src={mainLogo} alt="mainLogo" />
      </Link>
      <S.Wrapper>
        <S.Description>404</S.Description>
        <p> 잘못된 접근입니다!</p>
        <p> 메인 로고를 클릭해 홈으로 이동해주세요!</p>
      </S.Wrapper>
      <S.Image src={background} alt="배경이미지" />
    </S.Body>
  );
}

export default NotFound;
