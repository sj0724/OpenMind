import { useState } from 'react';
import * as S from './Header.styled';
import DropdownMenu from './DropdownMenu';
import arrowDownImage from '../../../images/Arrow-down.png';
import arrowUpImage from '../../../images/Arrow-up.png';


function Header() {
  const [view, setView] = useState(false);
  const [selectedItem, setSelectedItem] = useState('최신순');

  const toggleDropdown = () => {
    setView(!view);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    toggleDropdown();
  };

  return (
    <>
      <S.QuestionHeading>누구에게 질문할까요?</S.QuestionHeading>
      <S.DropdownWrapper>
        <S.DropdownSelect onClick={toggleDropdown}>
          {selectedItem}
          {view ? (
            <S.ArrowIcon src={arrowUpImage} alt="up arrow" />
          ) : (
            <S.ArrowIcon src={arrowDownImage} alt="down arrow" />
          )}
        </S.DropdownSelect>
        {view && <DropdownMenu handleItemClick={handleItemClick} />}
      </S.DropdownWrapper>
    </>
  );
}

export default Header;
