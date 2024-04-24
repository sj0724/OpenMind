import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import useFetchUser from '../../hooks/useFetchUser';
import useFetchQuestionList from '../../hooks/useFetchQuestionList';

import QuestionContainer from '../../components/QuestionContainer/QuestionContainer';
import PostAnswer from '../../components/PostAnswer/PostAnswer';
import UserProfile from '../../components/UserProfile/UserProfile';
import Toast from '../../components/Toast/Toast';

import * as S from '../QuestionList/QuestionList.styled';

import UserContext from '../../utils/contexts/UserContext';

import emptyIcon from '../../assets/emptyIcon.svg';
import mainLogo from '../../assets/logo.svg';
import arrowUp from '../../assets/Arrow-up.svg';
import arrowLeft from '../../assets/Arrow-left.svg';

/** 작업완료 후 주석은 다 지울 예정 */
function AnswerList() {
  const { id } = useParams();

  // 유저정보
  const { user } = useFetchUser(id);

  const obsRef = useRef(true);
  const preventRef = useRef(true);
  const [listOffset, setListOffset] = useState(0);
  const { data, question, next } = useFetchQuestionList(id, listOffset);

  const navigate = useNavigate();

  const obsHandler = (entries) => {
    const target = entries[0];
    if (next && target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setListOffset((prev) => prev + 2);
      preventRef.current = true;
    }
  };

  // 토스트 메세지
  const [toast, setToast] = useState(false);

  // 링크 공유
  const copyUrl = async (url) => {
    await navigator.clipboard.writeText(url);
    setToast(true);
  };

  const moveTop = () => {
    window.scrollTo(0, 0);
  };

  const movePrev = () => {
    navigate(-1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, [next]);

  return (
    <>
      <S.Header>
        <Link to="/">
          <S.HeaderLogo src={mainLogo} alt="mainLogo" />
        </Link>
        <S.HeaderImage />
      </S.Header>
      <UserContext.Provider value={user}>
        <UserProfile copy={copyUrl} />
        <S.Body>
          <QuestionContainer count={data?.count || 0}>
            {data?.count ? (
              question.map((item) => <PostAnswer question={item} key={item.id} />)
            ) : (
              <S.NoQuestion src={emptyIcon} />
            )}
          </QuestionContainer>
        </S.Body>
        <S.PageEnd ref={obsRef} />
        <S.PageButtons $isBottom={true}>
          <S.UpButton onClick={moveTop}>
            <img src={arrowUp} alt="위로가기화살표" />
          </S.UpButton>
          <S.PrevButton onClick={movePrev}>
            <img src={arrowLeft} alt="뒤로가기화살표" />
            <p>뒤로가기</p>
          </S.PrevButton>
        </S.PageButtons>
        {toast && <Toast setToast={setToast} text="URL이 복사되었습니다." />}
      </UserContext.Provider>
    </>
  );
}

export default AnswerList;
