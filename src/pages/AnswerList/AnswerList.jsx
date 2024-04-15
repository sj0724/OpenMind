import { useState } from 'react';
import * as S from './AnswerList.styled';
import mainLogo from '../../assets/logo.svg';
import { useParams } from 'react-router-dom';
import { fetchSubject } from '../../services/fetchSubject';

function AnswerList() {
  const { id } = useParams();

  const { data } = fetchSubject({ id });

  return (
    <>
      <S.Header>
        <img src={mainLogo} alt="mainLogo" />
      </S.Header>
    </>
  );
}

export default AnswerList;
