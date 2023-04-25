import { List, StyledNavigation, Item,  StyledLink } from "./styled";

const Navigation = () => (
  <StyledNavigation>
    <List>
      <Item>
        <StyledLink to="/zadania">Zadania</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/autor">O autorze</StyledLink>
      </Item>
    </List>
  </StyledNavigation>
);

export default Navigation;
