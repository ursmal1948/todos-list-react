import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  align-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 2px;
  padding: 8px;
  transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:hover {
    filter: brightness(120%);
    transform: scale(1.1);
  }
`;
