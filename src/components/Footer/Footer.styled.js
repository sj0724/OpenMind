import styled from 'styled-components';

export const Body = styled.div`
  font-size: 14px;
  font-weight: 600;
  font-family: Pretendard;
  background-color: var(--Grayscale-20);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  img {
    width: 60px;
    height: 60px;
    margin-right: 20px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Content = styled.a`
  text-decoration: none;
  color: var(--Brown-40);
`;
