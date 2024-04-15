import { useState } from 'react';
import propTypes from 'prop-types';
import * as S from './Modal.styled';
import messagesIcon from '../../assets/messages-black.svg';
import xMark from '../../assets/x-mark.svg';

function Modal({ setModal }) {
  const [text, setText] = useState('');

  return (
    <S.StyledModal>
      <S.ModalWrapper>
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
          <S.Profile />
          <p>username</p>
        </S.ToUser>
        <S.Content>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="내용을 입력해주세요"
          />
        </S.Content>
        {text.length > 0 ? (
          <S.Footer color="var(--Brown-40)">
            <span>질문 보내기</span>
          </S.Footer>
        ) : (
          <S.Footer color="var(--Brown-30)">
            <span>질문 보내기</span>
          </S.Footer>
        )}
      </S.ModalWrapper>
    </S.StyledModal>
  );
}

Modal.propTypes = {
  setModal: propTypes.func.isRequired,
};

export default Modal;
