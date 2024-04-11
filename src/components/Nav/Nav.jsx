import * as S from "./Nav.styled";
import arrow from "../../../images/arrow-right.png";
import logo from "../../../images/openmind-logo.png";

const Nav = () => {
  return (
    <S.NavWrapper>
      <img src={logo} alt="openmind-logo" />
      <S.Button>
        답변하러 가기 <img src={arrow} alt="arrow-right" />
      </S.Button>
    </S.NavWrapper>
  );
};

export default Nav;
