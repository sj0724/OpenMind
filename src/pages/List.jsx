import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import styled from "styled-components";

const PageWrapper = styled.div`
  background-color: var(--Grayscale-20);
`;

const List = () => {
  return (
    <PageWrapper>
      <Nav />
      <Header />
      <Card />
    </PageWrapper>
  );
};

export default List;
