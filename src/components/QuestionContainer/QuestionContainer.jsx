import MessageIcon from "../../assets/Messages.svg";
import * as S from "./QuestionContainer.styled";

function QuestionContainer({ children }) {
  return (
    <S.Container>
      <S.QuestionCount>
        <img src={MessageIcon} />
        n개의 질문이 있습니다.
      </S.QuestionCount>
      {children}
    </S.Container>
  );
}

export default QuestionContainer;
