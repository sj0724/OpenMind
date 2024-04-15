import LinkBtn from './LinkButton.styled';
import arrowIcon from '../../assets/arrow-right.svg';

function LinkButton({ children }) {
  return (
    <LinkBtn>
      {children}
      <img src={arrowIcon} alt="arrowIcon" />
    </LinkBtn>
  );
}

export default LinkButton;
