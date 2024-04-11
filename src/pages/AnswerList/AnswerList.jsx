import * as S from "./AnswerList.styled";
import mainLogo from "../../assets/logo.png";
import UserProfile from "../../components/UserProfile/UserProfile";

function AnswerList() {
  return (
    <>
      <S.Header>
        <img src={mainLogo} alt="mainLogo" />
      </S.Header>
      <UserProfile />
      <S.Body></S.Body>
    </>
  );
}

export default AnswerList;
