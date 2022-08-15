import styled from "styled-components";

export const User = styled.div`
  width: 100%;
  height: auto;
  padding: 8px 6px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover{
    text-decoration: underline;
  }

  img{
    border-radius: 50%;
  }

  span{
    margin-left: 0.5em;
    font-size: 0.875em;
    font-weight: 400;
  }
`;