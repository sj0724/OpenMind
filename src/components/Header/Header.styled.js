import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 769px) {
    flex-direction: row;
  }
`;

export const QuestionHeading = styled.h1`
  font-size: 4rem;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 769px) {
    font-size: 2.4rem;
    margin: 2.4rem;
    white-space: nowrap;
  }
`;

export const DropdownWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  @media (max-width: 769px) {
    margin-right: 2.4rem;
  }
`;

export const DropdownSelect = styled.li`
  display: flex;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  border: 0.1rem solid ${(props) => (props.$fold ? ' var(--Grayscale-60)' : 'var(--Grayscale-40)')};
  background: var(--Grayscale-10);
  color: ${(props) => (props.$fold ? ' var(--Grayscale-60)' : 'var(--Grayscale-40)')};
  border-radius: 0.8rem;
  padding: 0.8rem 1.2rem;
  display: flex;
  gap: 0.4rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const ArrowIcon = styled.img`
  width: 20px;
  height: 20px;
`;
