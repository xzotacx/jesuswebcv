import styled from "styled-components";
import { fontSizes } from "../../styles";

import useColor from "../../hooks/useColor";

const SubTitleStyled = styled.h3`
  font-size: ${fontSizes.subtitle};
  position: relative;
  width: max-content;
  text-align: center;
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 4px;
    background-color: ${() => useColor().color_5};
    bottom: -4px;
    transition: color 0.2s ease, background-color 0.2s ease;
  }
`;

export { SubTitleStyled };
