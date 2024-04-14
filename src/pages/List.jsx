import styled from 'styled-components';
import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header';
import CardList from '../components/Card/CardList';

const PageContainer = styled.div`
  background-color: var(--Grayscale-20);
  margin-top: 0;
`;

const PageWrapper = styled.div`
  @media (min-width: 1200px) {
    max-width: 120rem;
    margin: 0 auto;
  }
`;

function List() {
  return (
    <PageContainer>
      <PageWrapper>
        <Nav />
        <Header />
        <CardList />
      </PageWrapper>
    </PageContainer>
  );
}

export default List;
