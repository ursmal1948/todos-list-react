import styled from "styled-components";

export const SectionButtons = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-wrap: wrap;
  } ;
`;

