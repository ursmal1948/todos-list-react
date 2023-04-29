import { List, StyledNavigation, Item,  StyledNavLink } from "./styled";

const Navigation = () => (
  <StyledNavigation>
    <List>
      <Item>
        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to="/autor">O autorze</StyledNavLink>
      </Item>
    </List>
  </StyledNavigation>
);



export default Navigation;
