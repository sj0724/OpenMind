import PropTypes from 'prop-types';
import * as S from './LinkButton.styled';
import arrowIcon from '../../assets/arrow-right.svg';

function LinkButton({ children }) {
  return (
    <S.LinkBtn>
      {children}
      <img src={arrowIcon} alt="arrowIcon" />
    </S.LinkBtn>
  );
}

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LinkButton;
