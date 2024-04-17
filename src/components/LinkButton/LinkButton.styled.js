import styled from 'styled-components';

const LinkBtn = styled.span`
  height: 46px;
  width: 170px;
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--Brown-40);
  background: var(--Brown-10);
  color: var(--Brown-40);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;

  img {
    width: 18px;
    height: 18px;
  }

  &:hover {
    border: 2px solid var(--Brown-40);
    background: var(--Brown-10);
  }

  &:active {
    border: 2px solid var(--Brown-40);
    background: var(--Brown-20);
  }

  @media (max-width: 769px) {
    width: 130px;
    height: 34px;
    padding: 8px 12px;
    gap: 4px;
    font-size: 14px;
    line-height: 18px;
  }
`;

export default LinkBtn;
