import styled from 'styled-components';

export const QuestionStatus = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: none;
`;

export const WrapAnswerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  flex: 1 0 0;
  width: 56rem;
`;

export const AnswerTextarea = styled.textarea`
  width: 100%;
  height: 18.6rem;
  padding: 1.6rem;
  resize: none;
  border-radius: 0.8rem;
  border: none;
  color: var(--Grayscale-40);
  background-color: var(--Grayscale-20);
  margin-bottom: 0.8rem;

  border: 1px solid black;
`;

export const AnswerButton = styled.button`
  width: 100%;
  height: 4.6rem;
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  color: var(--Grayscale-10);
  background-color: var(${(props) => props.$bgColor});
`;

export const AnswerText = styled.p`
  color: ${(props) => (props.$rejected ? 'var(--Red-50)' : 'var(--Grayscale-60)')};
`;

export const WrapEditIcons = styled.div`
  display: flex;
  gap: 0.8rem;
  position: absolute;
  top: 0;
  right: 0;
`;

export const EditIconButton = styled.button`
  img {
    width: 2rem;
    height: 2rem;
    fill: var(--Grayscale-50);
  }
`;

export const WrapAnswerTop = styled.div`
  width: 56rem;
  position: relative;
}
`;
