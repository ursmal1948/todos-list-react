import styled from "styled-components";

export default styled.input`
  padding:5px 0 5px 10px;
  

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 35px;
    margin-left: 2px;
    margin-right: 2px;
  }
`;
