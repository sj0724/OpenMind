import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchQuestionList from '../../hooks/useFetchQuestionList';
import * as S from './AnswerList.styled';
import emptyIcon from '../../assets/emptyIcon.svg';

/** 작업완료 후 주석은 다 지울 예정 */
function AnswerList() {
  const { id } = useParams();

  // questionList
  //   {
  //     "count": 2,
  //     "next": null,
  //     "previous": null,
  //     "results": [
  //         {
  //             "id": 8257,
  //             "subjectId": 4838,
  //             "content": "테스트 질문 2",
  //             "like": 0,
  //             "dislike": 0,
  //             "createdAt": "2024-04-15T08:22:23.809788Z",
  //             "answer": null
  //         },
  //         {
  //             "id": 8160,
  //             "subjectId": 4838,
  //             "content": "테스트입니다",
  //             "like": 0,
  //             "dislike": 0,
  //             "createdAt": "2024-04-12T05:34:28.212140Z",
  //             "answer": null
  //         }
  //     ]
  // }
  const { data: list, question } = useFetchQuestionList(id);

  return (
    <>
      {list.count ? (
        question.map((item, index) => (
          <S.QuestBody key={index}>
            <S.QuestionStatus $complete={item.answer}>
              {item.answer ? '답변 완료' : '미답변'}
            </S.QuestionStatus>
            <S.QuestionContent>
              <S.Time>
                질문
                {item.createdAt}
              </S.Time>
              <S.QuestionDetail>{item.content}</S.QuestionDetail>
            </S.QuestionContent>
            <S.AnswerContainer>
              <S.AnswerContent>
                <S.AnswerText
                  $bgColor="--Grayscale-20"
                  $color="--Grayscale-40"
                  placeholder="답변을 입력해주세요"></S.AnswerText>
                <S.AnswerButton $color="--Grayscale-10" $bgColor="--Brown-30">
                  답변 완료
                </S.AnswerButton>
              </S.AnswerContent>
            </S.AnswerContainer>
          </S.QuestBody>
        ))
      ) : (
        <S.NoQuestion src={emptyIcon} />
      )}
    </>
  );
}

export default AnswerList;
