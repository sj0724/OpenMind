import { useState } from "react";
import styled from "styled-components";
import Question from "../../components/Question/Question";
import QuestionContainer from "../../components/QuestionContainer/QuestionContainer";
import * as S from "./QuestionList.styled";
import emptyIcon from "../../assets/emptyIcon.svg";
import mainLogo from "../../assets/logo.png";
import UserProfile from "../../components/UserProfile/UserProfile";
import Modal from "../../components/Modal/Modal";

function QuestionList() {
  const [question, setQuestion] = useState(true);
  const [modal, setModal] = useState(false);

  const handleModalToggle = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && <Modal />}
      <S.Header>
        <img src={mainLogo} alt="mainLogo" />
      </S.Header>
      <UserProfile />
      <S.Body>
        <QuestionContainer>{question ? <Question /> : <S.No_Question src={emptyIcon} />}</QuestionContainer>
      </S.Body>
      <S.FloatingBtn onClick={handleModalToggle}>질문 작성하기</S.FloatingBtn>
    </>
  );
}

export default QuestionList;
