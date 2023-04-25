import styled from "styled-components";

const Button = styled.button`
  margin: 0 0 0 20px;
  color: ${({ theme }) => theme.colors.teal};
  border: none;
  background-color: inherit;
  font-size: 15px;
  margin-right: 10px;

  &:disabled {
    color: ${({ theme }) => theme.colors.lightGrey};
    &:hover {
      color: ${({ theme }) => theme.colors.alto};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.lightTeal};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-basis: 100%;
    margin: 10px;
  }
`;

export default Button;
