import { Heading } from '../../components/Heading';
import { Container } from '../../components/Utilities';
import { Main } from './styles';

export function HomePage() {
  return (
    <Main>
      <section>
        <Container>
          <Heading level="h1">
            Encontre o café perfeito para qualquer hora do dia
          </Heading>
        </Container>
      </section>
    </Main>
  );
}
