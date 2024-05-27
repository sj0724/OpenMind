/* eslint-disable max-len */
import styled from 'styled-components';
import { useState, useEffect, useMemo } from 'react';
import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header';
import CardList from '../components/Card/CardList';

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--Grayscale-20);
`;

const options = [
  { label: '최신순', value: 'time' },
  { label: '이름순', value: 'name' },
];

function List() {
  const [view, setView] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    () => localStorage.getItem('selectedItem') || '최신순',
  );

  useEffect(() => {
    localStorage.setItem('selectedItem', selectedItem);
  }, [selectedItem]);

  const toggleDropdown = () => {
    setView(!view);
  };

  const handleItemClick = (value) => {
    const selectedLabel = options.find((option) => option.value === value).label;
    setSelectedItem(selectedLabel);
    localStorage.setItem('selectedItem', selectedLabel); // 이전 선택된 값을 저장
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
