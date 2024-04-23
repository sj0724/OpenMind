import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Question from '../../components/Question/Question';
import QuestionContainer from '../../components/QuestionContainer/QuestionContainer';
import * as S from './QuestionList.styled';
import emptyIcon from '../../assets/emptyIcon.svg';
import mainLogo from '../../assets/logo.svg';
import arrowUp from '../../assets/Arrow-up.svg';
import arrowLeft from '../../assets/Arrow-left.svg';
import UserProfile from '../../components/UserProfile/UserProfile';
import Toast from '../../components/Toast/Toast';
import Modal from '../../components/Modal/Modal';
import useFetchUser from '../../hooks/useFetchUser';
import useFetchQuestionList from '../../hooks/useFetchQuestionList';
import UserContext from '../../utils/contexts/UserContext';
import Loading from '../../components/Loading/Loading';
import SendToast from '../../components/SendToast/SendToast';

function QuestionList() {
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const { user } = useFetchUser(id);
  const [toast, setToast] = useState(false);
  const [sendToast, setSendToast] = useState([]);
  const obsRef = useRef(null);
  const preventRef = useRef(true);
  const [listOffset, setListOffset] = useState(0);
  const { data, question, loading, next, addQuestion } = useFetchQuestionList(id, listOffset);
  const navigate = useNavigate();

  const handleObserver = (entries) => {
    const target = entries[0];
    if (next && target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setListOffset((prev) => prev + 2);
      preventRef.current = true;
    }
  };

  const handleModalToggle = () => {
    setModal(!modal);
  };

  const addToast = (text) => {
    setSendToast((prevToasts) => {
      if (prevToasts.length >= 5) {
        return [{ id: Date.now(), text }];
      }
      return [...prevToasts, { id: Date.now(), text }];
    });
  };
  const removeToast = (toastId) => {
    setSendToast((prevToasts) => prevToasts.filter((sendtoast) => sendtoast.id !== toastId));
  };

  const handleNewQuestion = (newQuestion) => {
    addQuestion(newQuestion);
    addToast('질문이 등록되었습니다.'); // 새 토스트 추가
  };

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
    const observer = new IntersectionObserver(handleObserver, { threshold: 0 });
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
          {loading ? (
            <Loading />
          ) : (
            <QuestionContainer count={data.count}>
              {data.count ? (
                question.map((item) => <Question question={item} key={item.id} />)
              ) : (
                <S.NoQuestion src={emptyIcon} />
              )}
            </QuestionContainer>
          )}
        </S.Body>
        <S.PageEnd ref={obsRef} />
        <S.PageButtons $isbottom={false}>
          <S.UpButton onClick={moveTop}>
            <img src={arrowUp} alt="위로가기화살표" />
          </S.UpButton>
          <S.PrevButton onClick={movePrev}>
            <img src={arrowLeft} alt="뒤로가기화살표" />
            <p>뒤로가기</p>
          </S.PrevButton>
        </S.PageButtons>
        <S.FloatingBtn onClick={handleModalToggle}>질문 작성하기</S.FloatingBtn>
        {toast && <Toast setToast={setToast} text="URL이 복사되었습니다." />}
        {modal && <Modal setModal={setModal} onNewQuestion={handleNewQuestion} />}
        {sendToast.map((sendtoast, index) => (
          <SendToast
            key={sendtoast.id}
            setToast={() => removeToast(sendtoast.id)}
            text={sendtoast.text}
            index={index}
          />
        ))}
      </UserContext.Provider>
    </>
  );
}

export default QuestionList;
