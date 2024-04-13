import * as S from "./DropdownMenu.styled";

function DropdownMenu({ options, handleItemClick }) {
  return (
    <S.DropdownMenu>
      {options.map((option) => (
        <S.DropdownMenuItem
          key={option.value}
          onClick={() => handleItemClick(option.value)}
        >
          {option.label}
        </S.DropdownMenuItem>
      ))}
    </S.DropdownMenu>
  );
}

export default DropdownMenu;
