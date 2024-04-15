import styled from 'styled-components';

export const Container = styled.div`
  width: 94rem;
  height: 47.4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;
  margin: 5rem 13rem;
  max-width: 96rem;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 5rem 3.2rem;
    max-width: 90%;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CardContainer = styled.div`
  width: min(22rem, 25vw);
  height: 18.7rem;
  padding: 2rem;
  border-radius: 1.6rem;
  border: 0.1rem solid var(--Grayscale-40);
  z-index: 1;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    min-width: 18.6rem;
  }
`;

export const CardImage = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`;

export const CardName = styled.p`
  color: #000;
  margin-top: 1rem;
  font-size: 2rem;
`;

export const CardInfo = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
`;

export const QuestionCountMessage = styled.span`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  img {
    width: 1.8rem;
    height: 1.8rem;
  }

  p {
    color: var(--Grayscale-40);
    font-size: 1.6rem;
  }
`;

export const QuestionCount = styled.p`
  display: flex;
  align-items: center;
  color: var(--Grayscale-40);
  font-size: 1.6rem;
`;
