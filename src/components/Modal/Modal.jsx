import { useContext, useState, useRef, useCallback } from 'react';
import propTypes from 'prop-types';
import useModal from '../../hooks/useModal';
import * as S from './Modal.styled';
import messagesIcon from '../../assets/messages-black.svg';
import xMark from '../../assets/x-mark.svg';
import UserContext from '../../utils/contexts/UserContext';

function Modal({ setModal }) {
  const [text, setText] = useState('');
  const user = useContext(UserContext);
  const modalRef = useRef();

  useModal(setModal, modalRef);

  const handleSend = useCallback(() => {
    console.log(text); // 차후 여기에 text를 보내는 로직을 추가 할 예정
    setModal(false);
  }, [text, setModal]);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        handleSend();
      }
    },
    [handleSend],
  );

  return (
    <S.StyledModal>
      <S.ModalWrapper ref={modalRef}>
        <S.Header>
          <div>
            <img src={messagesIcon} alt="Modal창 header 좌측 메시지모양 아이콘" />
            <span>질문을 작성하세요</span>
          </div>
          <button type="button" onClick={() => setModal(false)}>
            <img src={xMark} alt="Modal창 header 우측 X마크모양 아이콘" />
          </button>
        </S.Header>
        <S.ToUser>
          <span>To.</span>
          <S.Profile image={user.imageSource} />
          <p>{user.name}</p>
        </S.ToUser>
        <S.Content>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="내용을 입력해주세요"
          />
        </S.Content>
        <S.Footer
          color={text.length > 0 ? 'var(--Brown-40)' : 'var(--Brown-30)'}
          onClick={handleSend}>
          <span>질문 보내기</span>
        </S.Footer>
      </S.ModalWrapper>
    </S.StyledModal>
  );
}

Modal.propTypes = {
  setModal: propTypes.func.isRequired,
};

export default Modal;
