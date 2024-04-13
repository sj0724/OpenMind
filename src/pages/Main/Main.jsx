import mainImage from '../../assets/logo.svg';
import personIcon from '../../assets/Person.svg';
import LinkButton from '../../components/LinkButton/LinkButton';
import * as S from './Main.styled';

function Main() {
  return (
    <S.Body>
      <LinkButton>질문하러 가기</LinkButton>
      <S.MainLogo src={mainImage} alt="logo" />
      <S.UserForm>
        <S.UserInput htmlFor="name">
          <img src={personIcon} alt="userlogo" />
          <input placeholder="이름을 입력해주세요." id="name" />
        </S.UserInput>
        <S.UserSubmitBtn onClick={(e) => e.preventDefault()}>질문 받기</S.UserSubmitBtn>
      </S.UserForm>
      <S.Background>
        <S.ImageArea />
      </S.Background>
    </S.Body>
  );
}

export default Main;
