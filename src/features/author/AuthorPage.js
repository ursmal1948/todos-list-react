import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Paragraph } from "./styled";

const AutorPage = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Urszula Malinowska"
      body={
        <Paragraph>
          Nazywam się Ula Malinowska. Jestem na pierwszym roku studiów na
          kierunku Business Analytics. Wolne chwile spędzam na oglądaniu filmów
          oraz nauce języków, aktualnie króluje <strong>norweski</strong>😊
        </Paragraph>
      }
    />
  </Container>
);

export default AutorPage;
