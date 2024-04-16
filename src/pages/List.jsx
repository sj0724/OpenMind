/* eslint-disable max-len */
import styled from 'styled-components';
import { useState } from 'react';
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
  const [view, setView] = useState(false);
  const [selectedItem, setSelectedItem] = useState('최신순');

  const options = [
    { label: '최신순', value: 'time' },
    { label: '이름순', value: 'name' },
  ];

  const toggleDropdown = () => {
    setView(!view);
  };

  const handleItemClick = (value) => {
    setSelectedItem(options.find((option) => option.value === value).label);
    toggleDropdown();
  };

  // eslint-disable-next-line no-shadow
  const mapSelectedItemToSortValue = (selectedItem) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    options.find((option) => option.label === selectedItem).value;

  return (
    <PageContainer>
      <PageWrapper>
        <Nav />
        <Header
          selectedItem={selectedItem}
          toggleDropdown={toggleDropdown}
          handleItemClick={handleItemClick}
          view={view}
          options={options}
        />
        <CardList sort={mapSelectedItemToSortValue(selectedItem)} />
      </PageWrapper>
    </PageContainer>
  );
}

export default List;
