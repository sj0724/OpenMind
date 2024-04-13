import { useFetchCardList } from "../../hooks/useFetchCardList";
import Messages from "../../../images/Messages.png";
import Pagination from "../Pagination/Pagination";
import * as S from "./CardList.styled";

const CardList = ({ limit, offset, sort }) => {
  const { cards, loading } = useFetchCardList(limit, offset, sort);

  return (
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
              <S.QuestionCount>{card.questionCount}개</S.QuestionCount>
            </S.CardInfo>
          </S.CardContainer>
        ))
      )}
    </S.Container>
  );
};

export default CardList;
