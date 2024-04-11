import styled from "styled-components";
import headerImage from "../../assets/v872batch5-nunny-04 1.jpg";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  height: 234px;
  width: 1200px;
  margin: 0 auto;
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center;

  img {
    height: fit-content;
    margin-top: 50px;
  }
`;

export const Body = styled.div`
  background-color: var(--Grayscale-20);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 189px 0 136px 0;
`;
