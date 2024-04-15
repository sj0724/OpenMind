import PropTypes from 'prop-types';
import MessageIcon from '../../assets/Messages.svg';
import * as S from './AnswerContainer.styled';

function AnswerContainer({ children }) {
  return (
    <S.Container>
      <S.QuestionCount>
        <img src={MessageIcon} alt="MessageIcon" />
        n개의 질문이 있습니다.
      </S.QuestionCount>
      {children}
    </S.Container>
  );
}

AnswerContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnswerContainer;
