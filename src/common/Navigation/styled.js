import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.nav``;

export const List = styled.ul`
  background-color: ${({ theme }) => theme.colors.teal};
  margin-top: 0;
  display: flex;
  justify-content: center;
  list-style-type: none;
  gap: 50px;
  padding: 20px;
`;

export const Item = styled.li``;

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeightScale.medium};
  color: ${({ theme }) => theme.colors.white};

  &.${activeClassName} {
    font-weight: ${({ theme }) => theme.fontWeightScale.bold};
  }

  &:hover {
    border-bottom: 1px solid;
  }
`;
