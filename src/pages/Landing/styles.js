import styled, { css, keyframes } from "styled-components";
import SearchIcon from "../../icons/search";
import ArrowRightIcon from "../../icons/arrowRight";

const Container = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 50%;
  border: 1px solid #fff;
  padding: 5px;

  transition: all 0.5s;
  margin-left: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 200px;
      -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
      box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
      border: 1px solid #000;

      @media (min-width: 768px) {
        width: 150px;
      }
    `}
`;

const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
  line-height: 30px;
  outline: 0;
  border: 0;
  border-radius: 20px;
  padding: 0 20px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;

/** icons */
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const IconCommonCss = css`
  height: 1.25rem;
  width: 1.25rem;
  fill: #fff;
  z-index: 10;
  animation: ${fadeIn} 2s linear;
`;

const IconMagnifyingGlass = styled(SearchIcon)`
  ${IconCommonCss}
`;

const IconRightArrow = styled(ArrowRightIcon)`
  ${IconCommonCss}
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    fill: #000;
  }
`;

export { Container, SearchInput, IconMagnifyingGlass, IconRightArrow };
