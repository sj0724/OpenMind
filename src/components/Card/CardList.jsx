import useFetchCardList from "../../hooks/useFetchCardList";
import Messages from "../../assets/Messages.svg";
import Paging from "../Pagination/Pagination";
import * as S from "./CardList.styled";
import { useState } from "react";

const CardList = ({ limit, offset, sort }) => {
  const { cards, loading } = useFetchCardList(limit, offset, sort);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <S.Container>
        {loading ? (
          <p>Loading...</p>
        ) : (
          cards.map((card) => (
            <S.CardContainer key={card.id}>
              <S.CardImage src={card.imageSource} alt={card.name} />
              <S.CardName>{card.name}</S.CardName>
              <S.CardInfo>
                <S.QuestionCountMessage>
                  <img src={Messages} alt="QuestionMessage img" />
                  <p>받은 질문</p>
                </S.QuestionCountMessage>
                <S.QuestionCount>{`${card.questionCount}개`}</S.QuestionCount>
              </S.CardInfo>
            </S.CardContainer>
          ))
        )}
      </S.Container>
      <Paging page={currentPage} setPage={handlePageChange} />
    </>
  );
};

export default CardList;
