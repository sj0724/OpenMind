import * as S from "./Header.styled";

const Header = () => {
  return (
    <>
      <S.QuestionHeading>누구에게 질문할까요?</S.QuestionHeading>;
      <S.DropdownWrapper>
        <S.DropdownSelect>
          <S.DropdownOption value="date">최신순</S.DropdownOption>
          <S.DropdownOption value="name">이름순</S.DropdownOption>
        </S.DropdownSelect>
      </S.DropdownWrapper>
    </>
  );
};

export default Header;
