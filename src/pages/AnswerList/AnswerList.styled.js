import styled from 'styled-components';
// import { Profile } from '../../components/Answer/Answer.styled';
import backgroundImage from '../../assets/backgroundImage-removebg.png';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  height: 234px;
  width: 1200px;
  margin: 0 auto;
  background-image: url(${backgroundImage});
  background-position: 0px -267.142px;
  background-size: 100% 515.021%;
  background-repeat: no-repeat;
  mix-blend-mode: hard-light;

  img {
    height: fit-content;
    margin-top: 50px;
  }
`;

export const Body = styled.div`
  background-color: var(--Grayscale-20);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 189px 0 136px 0;
`;

export const NoQuestion = styled.img`
  margin: 111px 283px 65px 283px;
`;

// UserProfile
export const UserInfo = styled.div`
  position: absolute;
  top: 129px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--Grayscale-60);
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 125% */
  gap: 12px;
`;

export const UserImage = styled.img`
  width: 136px;
  height: 136px;
  border-radius: 50%;
  background-image: url(${(props) => props.$image});
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  gap: 8px;
`;

export const SnsBtn = styled.span`
  cursor: pointer;
  display: flex;
  width: 40px;
  height: 40px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  background-color: var(${(props) => props.$color});
  background-image: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-position: center;
`;

export const Container = styled.div`
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  border: 1px solid var(--Brown-30);
  background: var(--Brown-10);
`;

export const QuestionCount = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--Brown-40);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 125% */
`;

// Question
export const QuestBody = styled.div`
  display: flex;
  width: 684px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 16px;
  background: var(--Grayscale-10);
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
`;

export const QuestionStatus = styled.div`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.$complete ? 'var(--Brown-40)' : 'var(--Grayscale-40)')};
  background: var(--Grayscale-10);
  color: ${(props) => (props.$complete ? 'var(--Brown-40)' : 'var(--Grayscale-40)')};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

export const QuestionContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  flex-direction: column;
`;

export const Time = styled.p`
  color: var(--Grayscale-40);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

export const QuestionDetail = styled.p`
  color: var(--Grayscale-60);
  font-family: Actor;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
`;
