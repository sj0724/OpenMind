import styled from 'styled-components';
import LinkButton from '../LinkButton/LinkButton.styled';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 4rem 5rem;

  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled(LinkButton)`
  position: static;

  @media (max-width: 769px) {
    width: 12.7rem;
    height: 3.4rem;
    margin-top: 2rem;
    font-size: 1.4rem;
    gap: 0.4rem;
    padding: 0.8rem 1.2rem;
  }
`;
