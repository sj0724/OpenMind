/* eslint-disable max-len */
import styled from 'styled-components';
import { useState, useMemo } from 'react';
import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header';
import CardList from '../components/Card/CardList';

const PageWrapper = styled.div`
  background-color: var(--Grayscale-20);
  margin: 0;
  @media (max-width: 1199px) {
    margin: 0 auto;
  }
`;

const options = [
  { label: '최신순', value: 'time' },
  { label: '이름순', value: 'name' },
];

function List() {
  const [view, setView] = useState(false);
  const [selectedItem, setSelectedItem] = useState('최신순');

  const toggleDropdown = () => {
    setView(!view);
  };

  const handleItemClick = (value) => {
    setSelectedItem(options.find((option) => option.value === value).label);
    toggleDropdown();
  };

  const mapSelectedItemToSortValue = useMemo(
    () => (item) => options.find((option) => option.label === item).value,
    [],
  );

  return (
    <PageWrapper>
      <Nav />
      <Header
        selectedItem={selectedItem}
        toggleDropdown={toggleDropdown}
        handleItemClick={handleItemClick}
        view={view}
        options={options}
      />
      <CardList limit={8} offset={0} sort={mapSelectedItemToSortValue(selectedItem)} />
    </PageWrapper>
  );
}

export default List;
