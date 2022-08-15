import styled from "styled-components";

export const Pin = styled.div`
  width: 295px;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  background-image: url(${(props) => props.background});
  border-radius: 1.25em;
  grid-row-end: span ${(props) => props.spanHeight};
  overflow: hidden;
`;
