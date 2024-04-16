import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow-right.svg';
import logo from '../../assets/logo.svg';
import * as S from './Nav.styled';

function Nav() {
  const questionId = localStorage.getItem('questionId');

  const handleAnswerButtonClick = () => {
    if (questionId) {
      window.location.href = `/post/${questionId}/answer`;
    } else {
      window.location.href = '/';
    }
  };

  return (
    <S.NavWrapper>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <S.Button onClick={handleAnswerButtonClick}>
        답변하러 가기
        <img src={arrow} alt="arrow-right" />
      </S.Button>
    </S.NavWrapper>
  );
}

export default Nav;
