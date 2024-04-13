import * as S from './DropdownMenu.styled';

function DropdownMenu({ handleItemClick }) {
  return (
    <S.DropdownMenu>
      <S.DropdownMenuItem onClick={() => handleItemClick('최신순')}>최신순</S.DropdownMenuItem>
      <S.DropdownMenuItem onClick={() => handleItemClick('이름순')}>이름순</S.DropdownMenuItem>
    </S.DropdownMenu>
  );
}

export default DropdownMenu;
