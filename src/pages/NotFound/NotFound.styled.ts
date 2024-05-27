import styled from 'styled-components';

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--Grayscale-20);
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    z-index: 10;
    margin-top: 10rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--Brown-30);
  color: var(--Brown-50);
  padding: 3rem;
  margin-top: 5rem;
  border: 2px solid var(--Brown-40);
  border-radius: 1rem;
  gap: 2rem;
  z-index: 10;

  p {
    font-size: 2rem;
    font-weight: 200;
  }
`;

export const Description = styled.h1`
  text-align: center;
  font-family: Pretendard;
  font-size: 12rem;
  font-weight: 700;
`;

export const Image = styled.img`
  bottom: 0;
  position: absolute;
  height: 62.7rem;
`;

export const HeaderLogo = styled.img`
  width: 34rem;
  height: 13.4rem;
`;
