import styled from "styled-components";
import bussula from "../../img/bussula.png";

export default function Header() {
  const HeaderTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
  `;

  const HeaderParagraph = styled.p`
    color: #737380;
  `;

  const HeaderSpan = styled.span`
    color: #a8a8b3;
  `;
  return (
    <HeaderTitle>
      <img src={bussula} />
      <HeaderParagraph>
        github<HeaderSpan>_explorer</HeaderSpan>
      </HeaderParagraph>
    </HeaderTitle>
  );
}
