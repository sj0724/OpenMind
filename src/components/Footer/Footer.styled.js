import styled from 'styled-components';

export const Body = styled.div`
  height: 140px;
  font-size: 14px;
  font-weight: 500;
  font-family: Pretendard;
  background-color: var(--Brown-30);
  display: flex;
  align-items: end;
  padding: 25px;
  color: var(--Brown-40);

  img {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }

  @media (max-width: 769px) {
    align-items: normal;

    img {
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 769px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Container = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90px;
  margin-right: 20px;
`;

export const Content = styled.a`
  white-space: nowrap;
  font-size: 16px;
  text-decoration: none;
  color: var(--Brown-40);

  @media (max-width: 769px) {
    font-size: 12px;
  }
`;
