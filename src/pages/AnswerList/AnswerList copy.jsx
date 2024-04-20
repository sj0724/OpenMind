import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchQuestionList from '../../hooks/useFetchQuestionList';
import { postAnswer } from '../../services/postAnswer';
import * as S from './AnswerList.styled';
import emptyIcon from '../../assets/emptyIcon.svg';
import kebab from '../../assets/kebab.svg';

/** 작업완료 후 주석은 다 지울 예정 */
function AnswerList() {
  const { id } = useParams();
  const { data: list, question } = useFetchQuestionList(id);

  const [answerTexts, setAnswerTexts] = useState(Array(question.length).fill(''));
  const [submittedAnswers, setSubmittedAnswers] = useState([]);

  const [editModal, setEditModal] = useState(false);

  // 이미 등록된 답변이 있을 경우 submittedAnswers 상태 업데이트
  useEffect(() => {
    if (question.length > 0) {
      setAnswerTexts(Array(question.length).fill(''));
      setSubmittedAnswers(question.map((item) => item.answer || null));
    }
  }, [question]);

  // 입력 된 답변이 있으면 비활성화 된 버튼 활성화 상태로 변경
  const handleAnswerChange = (index, event) => {
    const newTexts = [...answerTexts];
    newTexts[index] = event.target.value;
    setAnswerTexts(newTexts);
  };

  // 답변 등록
  const handleSubmitAnswer = async (index) => {
    if (!window.confirm('답변을 등록하시겠습니까?')) {
      return false;
    }

    const questionId = question[index].id;
    const answerText = answerTexts[index];

    const { error, loading, data } = await postAnswer(questionId, answerText, false);

    if (loading) {
      console.log('답변 등록 중');
    } else if (error) {
      console.error('답변 등록 실패', error);
    } else if (data) {
      const newSubmittedAnswers = [...submittedAnswers];
      newSubmittedAnswers[index] = data;
      setSubmittedAnswers(newSubmittedAnswers);

      // 등록된 답변이 즉시 UI에 반영되도록 추가
      setAnswerTexts((newTexts) => newTexts.map((text, i) => (i === index ? '' : text)));
    }
  };

  // 케밥버튼 클릭
  const toggleEditModal = (index) => {
    setEditModal(index === editModal ? null : index);
  };

  // 수정하기 버튼 클릭
  const editAnswerContent = (index) => {
    console.log(question[index].id);
  };

  if (!list || list.count === 0) {
    return (
      <S.QuestBody>
        <S.NoQuestion src={emptyIcon} />
      </S.QuestBody>
    );
  }

  return (
    <>
      {question.map((item, index) => (
        <S.QuestBody key={index}>
          <S.WrapAnswerTop>
            <S.QuestionStatus $complete={item.answer}>
              {item.answer ? '답변 완료' : '미답변'}
            </S.QuestionStatus>
            <S.WrapKebabButton>
              <S.KebabButton onClick={() => toggleEditModal(index)}>
                <img src={kebab} alt="더보기" />
              </S.KebabButton>
              {editModal === index && (
                <S.WrapEditModal>
                  <S.EditModalButton onClick={() => editAnswerContent(index)}>
                    수정하기
                  </S.EditModalButton>
                </S.WrapEditModal>
              )}
            </S.WrapKebabButton>
          </S.WrapAnswerTop>
          <S.QuestionContent>
            <S.Time>질문 (id : {item.id})</S.Time>
            <S.QuestionDetail>{item.content}</S.QuestionDetail>
          </S.QuestionContent>
          <S.AnswerContainer>
            <S.AnswerContent $rejected={submittedAnswers[index]?.isRejected}>
              {submittedAnswers[index] ? (
                <p>
                  {submittedAnswers[index].isRejected
                    ? '답변 거절'
                    : submittedAnswers[index].content}
                </p>
              ) : (
                <>
                  <S.AnswerText
                    $bgColor="--Grayscale-20"
                    $color="--Grayscale-40"
                    placeholder="답변을 입력해주세요"
                    value={answerTexts[index] || ''}
                    onChange={(event) => handleAnswerChange(index, event)}></S.AnswerText>
                  <S.AnswerButton
                    $color="--Grayscale-10"
                    $bgColor={answerTexts[index]?.trim() ? '--Brown-40' : '--Brown-30'}
                    onClick={() => handleSubmitAnswer(index)}
                    disabled={!answerTexts[index]?.trim()}>
                    답변 완료
                  </S.AnswerButton>
                </>
              )}
            </S.AnswerContent>
          </S.AnswerContainer>
        </S.QuestBody>
      ))}
    </>
  );
}

export default AnswerList;
