import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 4rem 5rem;
`;

export const Button = styled.button`
  height: 4.6rem;
  background-color: var(--Brown-10);
  border: 1px solid var(--Brown-40);
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;
  display: flex;
  white-space: nowrap;
  gap: 0.8rem;
  font-size: 1.6rem;
  color: var(--Brown-40);
  cursor: pointer;
`;
