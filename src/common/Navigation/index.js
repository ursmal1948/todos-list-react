import { toAuthor, toTasks } from "../../routes";
import { List, StyledNavigation, Item,  StyledNavLink } from "./styled";

const Navigation = () => (
  <StyledNavigation>
    <List>
      <Item>
        <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
      </Item>
    </List>
  </StyledNavigation>
);



export default Navigation;
