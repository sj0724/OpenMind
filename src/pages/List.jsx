import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import CardList from "../components/Card/CardList";
import styled from "styled-components";

const PageWrapper = styled.div`
  background-color: var(--Grayscale-20);
`;

const List = () => {
  return (
    <PageWrapper>
      <Nav />
      <Header />
      <CardList />
    </PageWrapper>
  );
};

export default List;
