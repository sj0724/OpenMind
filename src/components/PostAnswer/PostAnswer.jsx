import { useContext, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Reaction from '../Reaction/Reaction';
import SendToast from '..//SendToast/SendToast';

import * as S from './PostAnswer.styled';
import * as SQ from '../Question/Question.styled';
import * as SA from '../Answer/Answer.styled';

import MESSAGE from './constant';

import { postAnswer } from '../../services/postAnswer';
import { deleteAnswer } from '../../services/deleteAnswer';
import { patchAnswer } from '../../services/patchAnswer';

import calculateDate from '../../utils/calculateDate';
import UserContext from '../../utils/contexts/UserContext';

import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/edit.svg';
import rejectionIcon from '../../assets/rejection.svg';

function PostAnswer({ question }) {
  const user = useContext(UserContext);

  const [answer] = useState(question.answer);

  const [text, setText] = useState('');

  // 답변 id
  const [answerId, setAnswerId] = useState(0);
  // 답변 등록 여부
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  // 질문 시간 선언
  const [createdQuestionTime, setCreatedQuestionTime] = useState({});
  // 답변 시간 선언
  const [createdAnswerTime, setCreatedAnswerTime] = useState({});
  const [createdAnswerText, setCreatedAnswerText] = useState('');

  // 질문 시간 출력
  const createdQuestionText = ` ・ ${createdQuestionTime.time}${createdQuestionTime.result}전`;

  // 답변 내용
  const [answerText, setAnswerText] = useState('');
  const [submittedAnswer, setSubmittedAnswer] = useState('');

  // 답변 거절 여부
  const [isRejected, setIsRejected] = useState(false);

  // 수정 중 여부
  const [isEdit, setIsEdit] = useState(false);

  // 토스트 메세지
  const [sendToast, setSendToast] = useState([]);

  // 등록 된 답변이 있다면 출력
  useEffect(() => {
    if (answer) {
      setSubmittedAnswer(answer.content || '');
      setAnswerText('');
      setIsRejected(answer.isRejected);
      setIsAnswerSubmitted(true);
      setAnswerId(answer.id);
    }
  }, [answer]);

  // 토스트 추가
  const addToast = (text) => {
    setSendToast((prevToasts) => {
      if (prevToasts.length >= 5) {
        return [{ id: Date.now(), text }];
      }
      return [...prevToasts, { id: Date.now(), text }];
    });
  };

  // 토스트 삭제
  const removeToast = (toastId) => {
    setSendToast((prevToasts) => prevToasts.filter((sendtoast) => sendtoast.id !== toastId));
  };

  // 입력된 답변이 있으면 비활성화된 버튼 활성화 상태로 변경
  const handleAnswerChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= 400) {
      setAnswerText(newText);
    }
  };

  // 답변 등록
  const handleSubmitAnswer = async (isReject) => {
    if (!window.confirm(`답변을 ${isReject ? MESSAGE.reject : MESSAGE.submit}하시겠습니까?`)) {
      return;
    }

    let answerContentText = '답변거절';

    if (!isReject) {
      answerContentText = answerText;
    }

    const { error, loading, data } = await postAnswer(question.id, answerContentText, isReject);

    if (loading) {
      console.log(`답변 ${isReject ? MESSAGE.reject : MESSAGE.submit} 중`);
    } else if (error) {
      console.error(`답변 ${isReject ? MESSAGE.reject : MESSAGE.submit} 실패`, error);
    } else if (data) {
      // 등록된 답변의 내용으로 업데이트
      setSubmittedAnswer(data.content || '');
      // 등록된 답변이 즉시 UI에 반영되도록 추가
      setAnswerText('');
      // 답변 등록 상태 변경
      setIsAnswerSubmitted(true);
      // 답변 거절 상태 변경
      setIsRejected(isReject);
      // 답변 id
      setAnswerId(data.id);
      // 토스트 메세지
      addToast(`답변이 ${isReject ? MESSAGE.reject : MESSAGE.submit}되었습니다.`);
    }
  };

  // 답변 삭제
  const handleDeleteAnswer = async () => {
    if (!window.confirm(`답변을 ${MESSAGE.delete}하시겠습니까?`)) {
      return;
    }

    const { error, loading } = await deleteAnswer(answerId);

    if (loading) {
      console.log(`답변 ${MESSAGE.delete} 중`);
    } else if (error) {
      console.error(`답변 ${MESSAGE.delete} 실패`, error);
    } else {
      setSubmittedAnswer('');
      setAnswerText('');
      setIsAnswerSubmitted(false);
      setIsRejected(false);
      setAnswerId(0);
      addToast(`답변이 ${MESSAGE.delete}되었습니다.`);
    }
  };

  // 수정 버튼 클릭
  const handleEditAnswerStatus = async () => {
    setIsEdit(true);
    setAnswerText(submittedAnswer);
  };

  // 답변 수정
  const handleEditAnswer = async () => {
    if (!window.confirm(`답변을 ${MESSAGE.edit}하시겠습니까?`)) {
      return;
    }

    const { error, loading, data } = await patchAnswer(answerId, answerText, false);

    if (loading) {
      console.log(`답변 ${MESSAGE.edit} 중`);
    } else if (error) {
      console.error(`답변 ${MESSAGE.edit} 실패`, error);
    } else if (data) {
      // 등록된 답변의 내용으로 업데이트
      setSubmittedAnswer(data.content);
      // 등록된 답변이 즉시 UI에 반영되도록 추가
      setAnswerText('');
      // 답변 등록 상태 변경
      setIsAnswerSubmitted(true);
      // 답변 거절 상태 변경
      setIsRejected(false);
      // 답변 id
      setAnswerId(data.id);
      // 수정 상태
      setIsEdit(false);
      // 토스트 메세지
      addToast(`답변이 ${MESSAGE.edit}되었습니다.`);
    }
  };

  // 답변 등록/수정/삭제 핸들러
  const handleEnterKey = useCallback(
    (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();

        if (!answerText.trim()) {
          return;
        }

        if (isEdit) {
          handleEditAnswer();
        } else {
          handleSubmitAnswer(false);
        }
      }
    },
    [handleEditAnswer, handleSubmitAnswer, answerText, isEdit],
  );

  // 질문 시간 출력
  useEffect(() => {
    const nowDate = new Date();
    const createdDate = new Date(question.createdAt);
    const date = (nowDate - createdDate) / 1000;
    setCreatedQuestionTime(calculateDate(date));
  }, [question.createdAt]);

  // 답변 시간 출력
  useEffect(() => {
    if (answer) {
      const nowDate = new Date();
      const createdDate = new Date(answer.createdAt);
      const date = (nowDate - createdDate) / 1000;
      setCreatedAnswerTime(calculateDate(date));
    }
  }, [answer]);

  useEffect(() => {
    if (createdAnswerTime.time && createdAnswerTime.result) {
      setCreatedAnswerText(` ・ ${createdAnswerTime.time}${createdAnswerTime.result}전`);
    } else {
      setCreatedAnswerText('');
    }
  }, [createdAnswerTime]);

  return (
    <SQ.QuestBody>
      <S.QuestionStatus>
        <SQ.QuestionStatus $complete={isAnswerSubmitted}>
          {isAnswerSubmitted ? '답변 완료' : '미답변'}
        </SQ.QuestionStatus>
      </S.QuestionStatus>
      <SQ.QuestionContent>
        <SQ.Time>
          질문
          {createdQuestionText}
        </SQ.Time>
        <SQ.QuestionDetail>{question.content}</SQ.QuestionDetail>
      </SQ.QuestionContent>
      {/* 답변 입력 or 출력하는 곳 */}
      <SA.AnswerContainer>
        {/* 답변 입력 유저 정보 및 답변 입력 시간 */}
        <SA.Profile src={user.imageSource} />
        <SA.AnswerContent>
          <SA.Answerinfo>
            <S.WrapAnswerTop>
              <SA.UserName>{user.name}</SA.UserName>
              <SA.AnswerTime>{createdAnswerText}</SA.AnswerTime>
              {/* 아이콘 표시 */}
              <S.WrapEditIcons>
                {isAnswerSubmitted ? (
                  <>
                    {!isRejected && (
                      <S.EditIconButton onClick={() => handleEditAnswerStatus()}>
                        <img src={editIcon} alt="수정버튼" />
                      </S.EditIconButton>
                    )}
                    <S.EditIconButton onClick={() => handleDeleteAnswer()}>
                      <img src={deleteIcon} alt="삭제버튼" />
                    </S.EditIconButton>
                  </>
                ) : (
                  <S.EditIconButton onClick={() => handleSubmitAnswer(true)}>
                    <img src={rejectionIcon} alt="답변거절버튼" />
                  </S.EditIconButton>
                )}
              </S.WrapEditIcons>
              {/* 아이콘 표시 */}
            </S.WrapAnswerTop>
          </SA.Answerinfo>
          {/* 답변 입력 유저 정보 및 답변 입력 시간 */}

          {/* 답변 내용 출력 및 입력 창 */}
          <S.WrapAnswerContent>
            {submittedAnswer && !isEdit ? (
              <S.AnswerText $rejected={isRejected}>
                {isRejected ? '답변 거절' : submittedAnswer}
              </S.AnswerText>
            ) : (
              <>
                <S.WrapTextarea>
                  <S.AnswerTextarea
                    placeholder="답변을 입력해주세요"
                    value={answerText || ''}
                    onChange={(event) => handleAnswerChange(event)}
                    onKeyPress={(event) => handleEnterKey(event)}
                  />
                  <S.CharacterCount>{`${answerText.length}/400`}</S.CharacterCount>
                </S.WrapTextarea>
                {!isEdit ? (
                  <S.AnswerButton
                    $bgColor={answerText?.trim() ? '--Brown-40' : '--Brown-30'}
                    onClick={() => handleSubmitAnswer(false)}
                    disabled={!answerText?.trim()}>
                    답변 완료
                  </S.AnswerButton>
                ) : (
                  <S.AnswerButton
                    $bgColor={answerText?.trim() ? '--Brown-40' : '--Brown-30'}
                    onClick={() => handleEditAnswer()}
                    disabled={!answerText?.trim()}>
                    수정 완료
                  </S.AnswerButton>
                )}
              </>
            )}
          </S.WrapAnswerContent>
          {/* 답변 내용 출력 및 입력 창 */}
        </SA.AnswerContent>
      </SA.AnswerContainer>
      {/* 답변 입력 or 출력하는 곳 */}
      <Reaction question={question} />
      {sendToast.map((sendtoast, index) => (
        <SendToast
          key={sendtoast.id}
          setToast={() => removeToast(sendtoast.id)}
          text={sendtoast.text}
          index={index}
        />
      ))}
    </SQ.QuestBody>
  );
}

PostAnswer.propTypes = {
  question: PropTypes.shape({
    content: PropTypes.string,
    like: PropTypes.number.isRequired,
    dislike: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    answer: PropTypes.object,
  }).isRequired,
};

export default PostAnswer;
