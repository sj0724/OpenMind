import styled from 'styled-components';

export const OuterContainer = styled.div`
  margin: 0 auto;
  padding-left: 3.2rem;
  padding-right: 3.2rem;

  @media (max-width: 769px) {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }
`;

export const Container = styled.div`
  width: 94rem;
  height: 47.4rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: 2rem;
  position: relative;
  margin: 5rem auto;
  max-width: 96rem;
  justify-content: center;

  @media (max-width: 1199px) {
    width: 90%;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 769px) {
    width: 80%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
export const CardContainer = styled.div`
  width: 100%;
  max-width: min(22rem, 25vw);
  height: 18.7rem;
  padding: 2rem;
  border-radius: 1.6rem;
  border: 0.1rem solid var(--Grayscale-40);
  z-index: 1;
  transition: width 0.3s ease;

  &: hover {
    background-color: var(--Grayscale-30);
  }

  @media (max-width: 1199px) {
    min-width: 18.6rem;
  }

  @media (max-width: 769px) {
    min-width: 16rem;
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
