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

export default LinkButton;
