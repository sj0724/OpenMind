import styled from 'styled-components';

const LinkBtn = styled.span`
  position: absolute;
  top: 45px;
  right: 130px;
  z-index: 2;
  display: inline-flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--Brown-40, #542f1a);
  background: var(--Brown-10, #f5f1ee);
  color: var(--Brown-40);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */

  img {
    width: 18px;
    height: 18px;
  }
`;

export default LinkBtn;
