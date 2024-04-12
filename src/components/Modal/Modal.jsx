import * as S from "./Modal.styled";
import messagesicon from "../../assets/messages-black.svg";
import xMark from "../../assets/x-mark.svg";

function Modal() {
  return (
    <S.StyledModal>
      <S.ModalWrapper>
        <S.Header>
          <div>
            <img src={messagesicon} alt="Modal창 header 좌측 메시지모양 아이콘" />
            <span>질문을 작성하세요</span>
          </div>
          <img src={xMark} alt="Modal창 header 우측 X마크모양 아이콘" />
        </S.Header>
        <S.ToUser>
          <span>To.</span>
          <S.Profile />
          <p>username</p>
        </S.ToUser>
        <S.Content>
          <textarea placeholder="내용을 입력해주세요"></textarea>
        </S.Content>
        <S.Footer>
          <span>질문 보내기</span>
        </S.Footer>
      </S.ModalWrapper>
    </S.StyledModal>
  );
}

export default Modal;
