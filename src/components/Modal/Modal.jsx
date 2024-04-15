import { useContext } from 'react';
import * as S from './Modal.styled';
import messagesIcon from '../../assets/messages-black.svg';
import xMark from '../../assets/x-mark.svg';
import UserContext from '../../utils/contexts/UserContext';

function Modal() {
  const user = useContext(UserContext);

  return (
    <S.StyledModal>
      <S.ModalWrapper>
        <S.Header>
          <div>
            <img src={messagesIcon} alt="Modal창 header 좌측 메시지모양 아이콘" />
            <span>질문을 작성하세요</span>
          </div>
          <img src={xMark} alt="Modal창 header 우측 X마크모양 아이콘" />
        </S.Header>
        <S.ToUser>
          <span>To.</span>
          <S.Profile image={user.imageSource} />
          <p>{user.name}</p>
        </S.ToUser>
        <S.Content>
          <textarea placeholder="내용을 입력해주세요" />
        </S.Content>
        <S.Footer>
          <span>질문 보내기</span>
        </S.Footer>
      </S.ModalWrapper>
    </S.StyledModal>
  );
}

export default Modal;
