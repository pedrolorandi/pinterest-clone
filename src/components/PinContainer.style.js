import styled from "styled-components";

export const PinContainer = styled.div`
  width: 295px;
  position: relative;
  display: grid;
  border-radius: 1.25em;
  grid-row-end: span ${(props) => props.spanHeight};
  cursor: zoom-in;
`;
