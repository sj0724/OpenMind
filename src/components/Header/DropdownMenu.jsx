import PropTypes from 'prop-types';
import * as S from './DropdownMenu.styled';

// eslint-disable-next-line react/prop-types
function DropdownMenu({ options, handleItemClick }) {
  return (
    <S.DropdownMenu>
      {options.map((option) => (
        <S.DropdownMenuItem key={option.value} onClick={() => handleItemClick(option.value)}>
          {option.label}
        </S.DropdownMenuItem>
      ))}
    </S.DropdownMenu>
  );
}

DropdownMenu.propTypes = {
  handleItemClick: PropTypes.func.isRequired,
};

export default DropdownMenu;
