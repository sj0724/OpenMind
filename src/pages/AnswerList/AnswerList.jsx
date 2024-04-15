import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSubject } from '../../services/fetchSubject';
import * as S from './AnswerList.styled';
import mainLogo from '../../assets/logo.svg';
import kakaoIcon from '../../assets/Kakaotalk.svg';
import linkIcon from '../../assets/Link.svg';
import facebookIcon from '../../assets/Facebook.svg';
import MessageIcon from '../../assets/Messages.svg';

function AnswerList() {
  const { id } = useParams();

  const { data } = fetchSubject({ id });

  const [answerStatus] = useState();

  // {
  //     "id": 4838,
  //     "name": "test",
  //     "imageSource": "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
  //     "questionCount": 2,
  //     "createdAt": "2024-04-09T01:12:41.641885Z"
  // }

  if (!data) {
    return <div>hi</div>;
  }

  return (
    <>
      <S.Header>
        <img src={mainLogo} alt="mainLogo" />
      </S.Header>
      <S.UserInfo>
        <S.UserImage image={data.imageSource} />
        <span>{data.name}</span>
        <S.BtnContainer>
          <S.SnsBtn color="--Brown-40" image={linkIcon} />
          <S.SnsBtn color="--Yellow-50" image={kakaoIcon} />
          <S.SnsBtn color="--Blue-50" image={facebookIcon} />
        </S.BtnContainer>
      </S.UserInfo>
      <S.Body>
        <S.Container>
          <S.QuestionCount>
            <img src={MessageIcon} alt="MessageIcon" />
            {data.questionCount}개의 질문이 있습니다.
          </S.QuestionCount>
          <S.QuestBody>
            <S.QuestionStatus complete={answerStatus}>
              {answerStatus ? '답변 완료' : '미답변'}
            </S.QuestionStatus>
          </S.QuestBody>
        </S.Container>
      </S.Body>
    </>
  );
}

export default AnswerList;
